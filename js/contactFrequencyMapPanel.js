import EnsembleManager from './ensembleManager.js'
import { colorMapManager, ensembleManager } from "./app.js";
import { clamp } from "./math.js";
import Panel from "./panel.js";
import {appleCrayonColorRGB255, appleCrayonColorThreeJS, threeJSColorToRGB255} from "./color.js"
import {clearCanvasArray, drawWithCanvasArray} from "./utils.js"
import SpacewalkEventBus from "./spacewalkEventBus.js"

let canvasArray = undefined

const maxDistanceThreshold = 4096;
const defaultDistanceThreshold = 256;

const kContactFrequencyUndefined = -1

class ContactFrequencyMapPanel extends Panel {

    constructor ({ container, panel, isHidden, distanceThreshold }) {

        const xFunction = (cw, w) => {
            return w * 0.1;
        };

        const yFunction = (ch, h) => {
            return ch - (h * 1.1);
        };

        super({ container, panel, isHidden, xFunction, yFunction });

        const $canvas_container = this.$panel.find('#spacewalk_contact_frequency_map_panel_container');

        let canvas;

        // ensemble canvas and context
        canvas = $canvas_container.find('#spacewalk_contact_frequency_map_canvas_ensemble').get(0);
        canvas.width = $canvas_container.width();
        canvas.height = $canvas_container.height();
        this.ctx_ensemble = canvas.getContext('bitmaprenderer');

        // trace canvas and context
        canvas = $canvas_container.find('#spacewalk_contact_frequency_map_canvas_trace').get(0);
        canvas.width = $canvas_container.width();
        canvas.height = $canvas_container.height();
        this.ctx_trace = canvas.getContext('bitmaprenderer');

        this.distanceThreshold = distanceThreshold;

        const input = panel.querySelector('#spacewalk_contact_frequency_map_adjustment_select_input')
        input.value = distanceThreshold.toString()

        panel.querySelector('#spacewalk_contact_frequency_map__button').addEventListener('click', () => {

            const value = input.value
            this.distanceThreshold = clamp(parseInt(value, 10), 0, maxDistanceThreshold);

            window.setTimeout(() => {
                this.updateEnsembleContactFrequencyCanvas(ensembleManager.maximumSegmentID, this.ensemble)
                this.updateTraceContactFrequencyCanvas(ensembleManager.maximumSegmentID, this.trace)
                this.doUpdateTrace = this.doUpdateEnsemble = undefined
            }, 0)
        })

        this.doUpdateTrace = this.doUpdateEnsemble = undefined

        this.worker = new Worker(new URL('./contactFrequencyMapWorker.js', import.meta.url), { type: 'module' })

        this.worker.addEventListener('message', ({ data }) => {

            document.querySelector('#spacewalk-contact-frequency-map-spinner').style.display = 'none'

            if ('ensemble' === data.traceOrEnsemble) {
                ContactFrequencyMapPanel.echoContactMatrixUpperTriangle(data.workerValuesBuffer, ensembleManager.maximumSegmentID)
            }

            populateContactFrequencyCanvasArray(data.workerValuesBuffer)

            const context = 'trace' === data.traceOrEnsemble ? this.ctx_trace : this.ctx_ensemble
            drawWithCanvasArray(context, canvasArray)

        }, false)

        SpacewalkEventBus.globalBus.subscribe('DidSelectTrace', this);
        SpacewalkEventBus.globalBus.subscribe('DidLoadEnsembleFile', this);

    }

    receiveEvent({ type, data }) {

        if ("DidSelectTrace" === type) {

            const { trace } = data
            this.trace = trace
            this.doUpdateTrace = true

            if (false === this.isHidden) {
                this.updateTraceContactFrequencyCanvas(ensembleManager.maximumSegmentID, this.trace)
                this.doUpdateTrace = undefined
            }

        } else if ("DidLoadEnsembleFile" === type) {

            const { ensemble, trace } = data
            this.ensemble = ensemble
            this.trace = trace
            this.doUpdateTrace = this.doUpdateEnsemble = true

            initializeSharedBuffers(ensembleManager.maximumSegmentID)

            if (false === this.isHidden) {
                this.updateEnsembleContactFrequencyCanvas(ensembleManager.maximumSegmentID, this.ensemble)
                this.updateTraceContactFrequencyCanvas(ensembleManager.maximumSegmentID, this.trace)
                this.doUpdateTrace = this.doUpdateEnsemble = undefined
            }

        }

        super.receiveEvent({ type, data });

    }

    present() {

        if (true === this.doUpdateEnsemble) {
            this.updateEnsembleContactFrequencyCanvas(ensembleManager.maximumSegmentID, this.ensemble)
            this.doUpdateEnsemble = undefined
        }

        if (true === this.doUpdateTrace) {
            this.updateTraceContactFrequencyCanvas(ensembleManager.maximumSegmentID, this.trace)
            this.doUpdateTrace = undefined
        }

        super.present()

    }

    getClassName(){ return 'ContactFrequencyMapPanel' }

    updateTraceContactFrequencyCanvas(maximumSegmentID, trace) {

        document.querySelector('#spacewalk-contact-frequency-map-spinner').style.display = 'block'

        const vertices = EnsembleManager.getLiveMapVertices(trace)

        const data =
            {
                traceOrEnsemble: 'trace',
                maximumSegmentID,
                verticesString: JSON.stringify(vertices),
                distanceThreshold: this.distanceThreshold
            }

        this.worker.postMessage(data)

        clearCanvasArray(canvasArray, ensembleManager.maximumSegmentID)
        drawWithCanvasArray(this.ctx_trace, canvasArray)

    }

    updateEnsembleContactFrequencyCanvas(maximumSegmentID, ensemble) {

        document.querySelector('#spacewalk-contact-frequency-map-spinner').style.display = 'block'

        const vertexLists = Object.values(ensemble).map(trace => EnsembleManager.getLiveMapVertices(trace))

        const data =
            {
                traceOrEnsemble: 'ensemble',
                maximumSegmentID,
                vertexListsString: JSON.stringify(vertexLists),
                distanceThreshold: this.distanceThreshold
            }

        this.worker.postMessage(data)

        clearCanvasArray(canvasArray, ensembleManager.maximumSegmentID)
        drawWithCanvasArray(this.ctx_ensemble, canvasArray)

    }

    // Contact Matrix is m by m where m = matrixSize
    static echoContactMatrixUpperTriangle(frequencies, matrixSize) {

        for (let y = 0; y < matrixSize; y++) {
            const list = []
            for (let x = y; x < matrixSize; x++) {

                const xy = x * matrixSize + y
                const frequency = frequencies[ xy ]

                // omit main diagonal
                // if (x !== y) list.push(`freq(${ frequency })`)

                list.push(`freq(${ frequency })`)
            }
            const str = list.join(' ')
            console.log(`${str}`)
        }

    }
}

function populateContactFrequencyCanvasArray(frequencies) {

    const maxFrequency = Math.max(Number.NEGATIVE_INFINITY, ...frequencies)

    const colorMap = colorMapManager.dictionary['juicebox_default']

    let i = 0
    for (let frequency of frequencies) {

        let rgb
        if (frequency > kContactFrequencyUndefined) {

            let interpolant = frequency / maxFrequency
            interpolant = Math.floor(interpolant * (colorMap.length - 1))

            rgb = threeJSColorToRGB255(colorMap[ interpolant ][ 'threejs' ])
        } else {
            rgb = threeJSColorToRGB255(appleCrayonColorThreeJS('silver'))
        }

        canvasArray[i++] = rgb.r
        canvasArray[i++] = rgb.g
        canvasArray[i++] = rgb.b
        canvasArray[i++] = 255
    }

}

function initializeSharedBuffers(maximumSegmentID) {
    canvasArray = new Uint8ClampedArray(maximumSegmentID * maximumSegmentID * 4)
}

function contactFrequencyMapPanelConfigurator({ container, isHidden }) {

    return {
        container,
        panel: $('#spacewalk_contact_frequency_map_panel').get(0),
        isHidden,
        distanceThreshold: defaultDistanceThreshold
    };

}

export { contactFrequencyMapPanelConfigurator }

export default ContactFrequencyMapPanel
