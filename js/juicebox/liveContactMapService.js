import {ensembleManager, igvPanel, juiceboxPanel} from "../app.js"
import EnsembleManager from "../ensembleManager.js"
import LiveContactMapDataSet from "./liveContactMapDataSet.js"
import SpacewalkEventBus from "../spacewalkEventBus.js"
import {hideGlobalSpinner, showGlobalSpinner} from "../utils/utils.js"
import {clamp} from "../utils/mathUtils.js"
import LiveState from "./liveState.js"

const maxDistanceThreshold = 1e4
const defaultDistanceThreshold = 256

class LiveContactMapService {

    constructor (distanceThreshold) {

        this.distanceThreshold = distanceThreshold
        this.hicState = undefined
        this.liveContactMapDataSet = undefined
        this.contactFrequencies = undefined
        this.ensembleContactFrequencyArray = undefined

        this.input = document.querySelector('#spacewalk_contact_frequency_map_adjustment_select_input')
        this.input.value = distanceThreshold.toString()

        document.querySelector('#spacewalk_contact_frequency_map_button').addEventListener('click', () => {

            this.distanceThreshold = clamp(parseInt(this.input.value, 10), 0, maxDistanceThreshold)

            window.setTimeout(() => {
                this.updateEnsembleContactFrequencyCanvas(this.distanceThreshold)
            }, 0)
        })

        this.worker = new Worker(new URL('./liveContactMapWorker.js', import.meta.url), { type: 'module' })

        this.worker.addEventListener('message', async ({ data }) => {

            console.log(`Contact Frequency ${ data.traceOrEnsemble } map received from worker`)

            // this.allocateGlobalContactFrequencyBuffer(ensembleManager.getLiveMapTraceLength())

            if ('ensemble' === data.traceOrEnsemble) {

                const { genomeAssembly } = ensembleManager
                const { chr, genomicStart, genomicEnd } = ensembleManager.locus
                const traceLength = ensembleManager.getLiveMapTraceLength()

                const { hicState, liveContactMapDataSet } = updateContactRecords(igvPanel.browser.genome, juiceboxPanel.browser.contactMatrixView.getViewDimensions(), data.workerValuesBuffer, traceLength, genomeAssembly, chr, genomicStart, genomicEnd)

                this.hicState = hicState
                this.liveContactMapDataSet = liveContactMapDataSet
                this.contactFrequencies = data.workerValuesBuffer

                await juiceboxPanel.renderWithLiveContactFrequencyData(this.hicState, this.liveContactMapDataSet, this.contactFrequencies, this.ensembleContactFrequencyArray, ensembleManager.getLiveMapTraceLength())

                hideGlobalSpinner()

            }

        }, false)

        SpacewalkEventBus.globalBus.subscribe('DidLoadEnsembleFile', this);

    }

    receiveEvent({ type, data }) {

        if ("DidLoadEnsembleFile" === type) {

            this.hicState = undefined
            this.liveContactMapDataSet = undefined
            this.contactFrequencies = undefined
            this.ensembleContactFrequencyArray = undefined

            this.distanceThreshold = distanceThresholdEstimate(ensembleManager.currentTrace)
            this.input.value = this.distanceThreshold.toString()

            this.allocateGlobalContactFrequencyBuffer(ensembleManager.getLiveMapTraceLength())
        }
    }

    setState(distanceThreshold) {
        this.distanceThreshold = distanceThreshold
        this.input.value = distanceThreshold.toString()
    }

    getClassName(){ return 'LiveContactMapService' }

    updateEnsembleContactFrequencyCanvas(distanceThresholdOrUndefined) {

        const { chr } = ensembleManager.locus
        const chromosome = igvPanel.browser.genome.getChromosome(chr.toLowerCase())

        if (chromosome) {
            showGlobalSpinner()

            this.distanceThreshold = distanceThresholdOrUndefined || distanceThresholdEstimate(ensembleManager.currentTrace)
            this.input.value = this.distanceThreshold.toString()

            const data =
                {
                    traceOrEnsemble: 'ensemble',
                    traceLength: ensembleManager.getLiveMapTraceLength(),
                    vertexListsString: JSON.stringify( ensembleManager.getLiveMapVertexLists()),
                    distanceThreshold: this.distanceThreshold
                }

            console.log(`Contact Frequency ${ data.traceOrEnsemble } payload sent to worker`)

            this.worker.postMessage(data)

        } else {
            hideGlobalSpinner()
            const str = `Warning! Can not create Live Contact Map. No valid genome for chromosome ${ chr }`
            console.warn(str)
            alert(str)
        }


    }

    allocateGlobalContactFrequencyBuffer(traceLength) {
        this.ensembleContactFrequencyArray = new Uint8ClampedArray(traceLength * traceLength * 4)
    }

}

function distanceThresholdEstimate(trace) {
    const { radius } = EnsembleManager.getTraceBounds(trace)
    return Math.floor(2 * radius / 4)
}

function updateContactRecords(genome, contactMatrixViewDimensions, contacts, traceLength, genomeAssembly, chr, genomicStart, genomicEnd) {

    const liveContactMapDataSet = new LiveContactMapDataSet(genome, ensembleManager)

    const hicState = new LiveState(ensembleManager, juiceboxPanel.browser.contactMatrixView)

    liveContactMapDataSet.createContactRecordList(hicState, contacts, ensembleManager.getLiveMapTraceLength())

    return { hicState, liveContactMapDataSet }

}

export { defaultDistanceThreshold }

export default LiveContactMapService
