import {ensembleManager, igvPanel, juiceboxPanel} from "../app.js";
import { clamp } from "../utils/mathUtils.js";
import {appleCrayonColorRGB255, rgb255String} from "../utils/colorUtils.js";
import { hideGlobalSpinner, showGlobalSpinner } from "../utils/utils.js"
import {compositeColors} from "../utils/colorUtils.js"
import SpacewalkEventBus from "../spacewalkEventBus.js"
import SWBDatasource from "../datasource/SWBDatasource.js"

const kDistanceUndefined = -1

class LiveDistanceMapService {

    constructor () {

        this.configureMouseHandlers()

        this.worker = new Worker(new URL('./liveDistanceMapWorker.js', import.meta.url), {type: 'module'})

        this.worker.addEventListener('message', async ( { data }) => {
            await processWebWorkerResults.call(this, data)
        }, false)

        SpacewalkEventBus.globalBus.subscribe('DidSelectTrace', this);
        SpacewalkEventBus.globalBus.subscribe('DidLoadEnsembleFile', this);

    }

    configureMouseHandlers(){

        this.ensembleToggleElement = juiceboxPanel.panel.querySelector('#spacewalk-live-distance-map-toggle-ensemble')
        this.ensembleToggleElement.addEventListener('click', () => {
            this.updateEnsembleAverageDistanceCanvas(ensembleManager.getLiveMapTraceLength(), ensembleManager.getLiveMapVertexLists())
        })

        this.traceToggleElement = juiceboxPanel.panel.querySelector('#spacewalk-live-distance-map-toggle-trace')
        this.traceToggleElement.addEventListener('click', () => {
            this.updateTraceDistanceCanvas(ensembleManager.getLiveMapTraceLength(), ensembleManager.currentTrace)
        })

        juiceboxPanel.panel.querySelector('#hic-calculation-live-distance-button').addEventListener('click', event => {
            if (this.isEnsembleToggleChecked()) {
                this.updateEnsembleAverageDistanceCanvas(ensembleManager.getLiveMapTraceLength(), ensembleManager.getLiveMapVertexLists())
            } else if (this.isTraceToggleChecked()) {
                this.updateTraceDistanceCanvas(ensembleManager.getLiveMapTraceLength(), ensembleManager.currentTrace)
            }
        })

    }

    isTraceToggleChecked() {
        return true === this.traceToggleElement.checked
    }

    isEnsembleToggleChecked() {
        return true === this.ensembleToggleElement.checked
    }

    receiveEvent({ type, data }) {

        if ("DidLoadEnsembleFile" === type) {
            console.log('LiveDistanceMapService - receiveEvent(DidLoadEnsembleFile)')

            const ctx = juiceboxPanel.browser.contactMatrixView.ctx_live_distance
            ctx.transferFromImageBitmap(null)

            this.rgbaMatrix = undefined
            this.distances = undefined
            this.maxDistance = undefined

            this.traceToggleElement.checked = false
            this.ensembleToggleElement.checked = false

        } else if ("DidSelectTrace" === type) {

            window.setTimeout(() => {

                if (false === juiceboxPanel.isHidden && juiceboxPanel.isActiveTab(juiceboxPanel.liveDistanceMapTab)) {
                    console.log('LiveDistanceMapService - receiveEvent(DidSelectTrace)')
                    this.updateTraceDistanceCanvas(ensembleManager.getLiveMapTraceLength(), ensembleManager.currentTrace)
                    this.traceToggleElement.checked = true
                    this.ensembleToggleElement.checked = false
                }

            }, 0)

        }

    }

    getClassName(){
        return 'LiveDistanceMapService'
    }

    updateTraceDistanceCanvas(traceLength, trace) {

        const { chr } = ensembleManager.locus
        const chromosome = igvPanel.browser.genome.getChromosome(chr.toLowerCase())

        if (chromosome) {
            if (ensembleManager.datasource instanceof SWBDatasource) {

                showGlobalSpinner()

                ensembleManager.datasource.liveMapPresentationHandler(() => {

                    const vertices = ensembleManager.getLiveMapTraceVertices(trace)

                    const data =
                        {
                            traceOrEnsemble: 'trace',
                            traceLength,
                            verticesString: JSON.stringify(vertices),
                        }

                    console.log(`Live Distance Map ${ data.traceOrEnsemble } payload sent to worker`)
                    this.worker.postMessage(data)
                })
            }
        } else {
            hideGlobalSpinner()
            const str = `Warning! Can not create Live Trace Distance Map. No valid genome for chromosome ${ chr }`
            console.warn(str)
            alert(str)
            this.traceToggleElement.checked = false
            this.ensembleToggleElement.checked = false
        }
    }

    updateEnsembleAverageDistanceCanvas(traceLength, vertexLists){

        const { chr } = ensembleManager.locus
        const chromosome = igvPanel.browser.genome.getChromosome(chr.toLowerCase())

        if (chromosome) {
            if (ensembleManager.datasource instanceof SWBDatasource) {

                showGlobalSpinner()

                ensembleManager.datasource.liveMapPresentationHandler(() => {

                    const data =
                        {
                            traceOrEnsemble: 'ensemble',
                            traceLength,
                            vertexListsString: JSON.stringify(vertexLists)
                        }

                    console.log(`Live Distance Map ${ data.traceOrEnsemble } payload sent to worker`)
                    this.worker.postMessage(data)
                })

            }
        } else {
            hideGlobalSpinner()
            const str = `Warning! Can not create Live Ensemble Distance Map. No valid genome for chromosome ${ chr }`
            console.warn(str)
            alert(str)
            this.traceToggleElement.checked = false
            this.ensembleToggleElement.checked = false
        }
    }

}

async function processWebWorkerResults(data) {

    const traceLength = ensembleManager.getLiveMapTraceLength()
    const arrayLength = traceLength * traceLength * 4

    if (undefined === this.rgbaMatrix || this.rgbaMatrix.length !== arrayLength) {
        this.rgbaMatrix = new Uint8ClampedArray(arrayLength)
    } else {
        this.rgbaMatrix.fill(0)
    }

    this.distances = data.workerDistanceBuffer
    this.maxDistance = data.maxDistance
    await juiceboxPanel.renderLiveMapWithDistanceData(this.distances, this.maxDistance, this.rgbaMatrix, ensembleManager.getLiveMapTraceLength())

    hideGlobalSpinner()
}

function setupOffScreenCanvas(width, height, rgb255){

    const offscreenCanvas = document.createElement('canvas')
    offscreenCanvas.width = width
    offscreenCanvas.height = height

    const ctx2d = offscreenCanvas.getContext('2d')
    ctx2d.fillStyle = rgb255String(rgb255)
    ctx2d.fillRect(0, 0, width, height)
    return {offscreenCanvas, ctx2d}
}

async function renderLiveMapWithDistanceData(browser, distances, maxDistance, rgbaMatrix, liveMapTraceLength) {

    // Refer to destination canvas
    const distanceMapCanvas = browser.contactMatrixView.ctx_live_distance.canvas

    // Set up offscreen canvas for compositing with initial background color
    const {offscreenCanvas, ctx2d} = setupOffScreenCanvas(distanceMapCanvas.width, distanceMapCanvas.height, appleCrayonColorRGB255('tin'))

    // Paint foreground color - with alpha - into rgbaMatrix
    paintDistanceMapRGBAMatrix(distances, maxDistance, rgbaMatrix, browser.contactMatrixView.colorScale, browser.contactMatrixView.backgroundColor)

    // Composite foreground over background
    const imageBitmap = await createImageBitmap(new ImageData(rgbaMatrix, liveMapTraceLength, liveMapTraceLength))

    // draw imageBitmap into distanceMapCanvas context while simultaneously scaling up the imageBitmap
    // to the resolution of the distanceMapCanvas
    ctx2d.drawImage(imageBitmap, 0, 0, distanceMapCanvas.width, distanceMapCanvas.height)

    // Retrieve compositedImageBitmap and transfer to distanceMapCanvas via it's context
    const compositedImageBitmap = await createImageBitmap(offscreenCanvas)
    const ctx = browser.contactMatrixView.ctx_live_distance
    ctx.transferFromImageBitmap(compositedImageBitmap);

}

function paintDistanceMapRGBAMatrix(distances, maxDistance, rgbaMatrix, colorScale, backgroundRGB) {

    let i = 0;
    const { r, g, b } = colorScale.getColorComponents()

    for (let distance of distances) {

        if (kDistanceUndefined !== distance) {

            distance = clamp(distance, 0, maxDistance)
            const nearness = maxDistance - distance

            const rawInterpolant = nearness/maxDistance
            if (rawInterpolant < 0 || 1 < rawInterpolant) {
                console.warn(`${ Date.now() } populateCanvasArray - interpolant out of range ${ rawInterpolant }`)
            }

            const alpha = Math.floor(255 * clamp(nearness, 0, maxDistance) / maxDistance)
            const foregroundRGBA = { r, g, b, a:alpha }

            const { r:comp_r, g:comp_g, b:comp_b } = compositeColors(foregroundRGBA, backgroundRGB)

            rgbaMatrix[i    ] = comp_r;
            rgbaMatrix[i + 1] = comp_g;
            rgbaMatrix[i + 2] = comp_b;
            rgbaMatrix[i + 3] = 255;

        } else {

            rgbaMatrix[i    ] = 0;
            rgbaMatrix[i + 1] = 0;
            rgbaMatrix[i + 2] = 0;
            rgbaMatrix[i + 3] = 0;

        }

        i += 4;
    }

}

export { renderLiveMapWithDistanceData }

export default LiveDistanceMapService
