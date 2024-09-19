import hic from '../../node_modules/juicebox.js/js/index.js'
import SpacewalkEventBus from '../spacewalkEventBus.js'
import Panel from '../panel.js'
import {
    ballAndStick,
    colorRampMaterialProvider,
    liveMapService,
    ensembleManager,
    ribbon,
    igvPanel, juiceboxPanel
} from '../app.js'
import SWBDatasource from "../datasource/SWBDatasource.js"
import {makeDraggable} from "../utils/draggable.js"
import LiveMapState from "./liveMapState.js"
import LiveContactMapDataSet from "./liveContactMapDataSet.js"

class JuiceboxPanel extends Panel {

    constructor ({ container, panel, isHidden }) {

        const xFunction = (cw, w) => {
            return (cw - w)/2;
        };

        const yFunction = (ch, h) => {
            return ch - (h * 1.05);
        };

        super({ container, panel, isHidden, xFunction, yFunction });

        const dragHandle = panel.querySelector('.spacewalk_card_drag_container')
        makeDraggable(panel, dragHandle)

        this.$panel.on(`mouseenter.${ this.namespace }`, (event) => {
            event.stopPropagation();
            SpacewalkEventBus.globalBus.post({ type: 'DidEnterGenomicNavigator', data: 'DidEnterGenomicNavigator' });
        });

        this.$panel.on(`mouseleave.${ this.namespace }`, (event) => {
            event.stopPropagation();
            SpacewalkEventBus.globalBus.post({ type: 'DidLeaveGenomicNavigator', data: 'DidLeaveGenomicNavigator' });
        })

        SpacewalkEventBus.globalBus.subscribe('DidLoadEnsembleFile', this)

    }

    async initialize(container, config) {

        let session

        if (config.browsers) {
            session = Object.assign({ queryParametersSupported: false }, config)
        } else {
            const { width, height } = config
            session =
                {
                    browsers:
                        [
                            {
                                width,
                                height,
                                queryParametersSupported: false
                            }
                        ]
                }
        }

        try {
            this.browser = await hic.restoreSession(container, session)
            this.locus = config.locus
        } catch (e) {
            const error = new Error(`Error initializing Juicebox ${ e.message }`)
            console.error(error.message)
            alert(error.message)

        }


        document.querySelector('#hic-live-contact-frequency-map-button').addEventListener('click', async e => {
            if (ensembleManager.datasource instanceof SWBDatasource) {
                await ensembleManager.datasource.calculateLiveMapVertexLists()
            }
            liveMapService.updateEnsembleContactFrequencyCanvas(undefined)
            this.present()

        })

        this.attachMouseHandlersAndEventSubscribers()

    }

    async loadSession(session) {

        this.detachMouseHandlers()

        this.browser = await hic.restoreSession(document.querySelector('#spacewalk_juicebox_root_container'), session)

        setJuiceboxLiveState(this.browser)

        this.attachMouseHandlersAndEventSubscribers()

        this.hicMapTab.show()

    }

    attachMouseHandlersAndEventSubscribers() {

        this.browser.eventBus.subscribe('DidHideCrosshairs', ribbon)

        this.browser.eventBus.subscribe('DidHideCrosshairs', ballAndStick)

        this.browser.eventBus.subscribe('DidHideCrosshairs', colorRampMaterialProvider)

        this.browser.eventBus.subscribe('DidUpdateColor', async ({ data }) => {
            await this.colorPickerHandler(data)
        })

        this.browser.eventBus.subscribe('MapLoad', async event => {
            const activeTabButton = this.container.querySelector('button.nav-link.active')
            tabAssessment(this.browser, activeTabButton)
        })

        this.browser.setCustomCrosshairsHandler(({ xBP, yBP, startXBP, startYBP, endXBP, endYBP, interpolantX, interpolantY }) => {
            juiceboxMouseHandler({ xBP, yBP, startXBP, startYBP, endXBP, endYBP, interpolantX, interpolantY });
        })

        this.configureTabs()
    }

    configureTabs() {

        // Locate tab elements
        const hicMapTabElement = document.getElementById('spacewalk-juicebox-panel-hic-map-tab')
        const liveMapTabElement = document.getElementById('spacewalk-juicebox-panel-live-map-tab')
        const liveDistanceMapTabElement = document.getElementById('spacewalk-juicebox-panel-live-distance-map-tab')

        // Assign data-bs-target to refer to corresponding map canvas container (hi-c or live-contact or live-distance)
        hicMapTabElement.setAttribute("data-bs-target", `#${this.browser.id}-contact-map-canvas-container`)
        liveMapTabElement.setAttribute("data-bs-target", `#${this.browser.id}-live-contact-map-canvas-container`)
        liveDistanceMapTabElement.setAttribute("data-bs-target", `#${this.browser.id}-live-distance-map-canvas-container`)

        // Create instance property for each tab
        this.hicMapTab = new bootstrap.Tab(hicMapTabElement)
        this.liveMapTab = new bootstrap.Tab(liveMapTabElement)
        this.liveDistnceMapTab = new bootstrap.Tab(liveDistanceMapTabElement)

        // Default to show Live Map tab
        this.liveMapTab.show()

        const activeTabButton = this.container.querySelector('button.nav-link.active')
        tabAssessment(this.browser, activeTabButton)

        for (const tabElement of this.container.querySelectorAll('button[data-bs-toggle="tab"]')) {
            tabElement.addEventListener('show.bs.tab', tabEventHandler)
        }

    }

    detachMouseHandlers() {

        for (const tabElement of this.container.querySelectorAll('button[data-bs-toggle="tab"]')) {
            tabElement.removeEventListener('show.bs.tab', tabEventHandler);
        }

    }

    receiveEvent({ type, data }) {

        if ('DidLoadEnsembleFile' === type) {

            setJuiceboxLiveState(this.browser)

            // Show Live Map tab to be consistent with Live State and Dataset
            this.liveMapTab.show()

        }

        super.receiveEvent({ type, data });

    }

    getClassName(){ return 'JuiceboxPanel' }

    async locusDidChange({ chr, genomicStart, genomicEnd }) {

        if (this.isContactMapLoaded() && this.browser.dataset.isLiveContactMapDataSet !== true) {
            try {
                await this.goto({ chr, start: genomicStart, end: genomicEnd })
            } catch (e) {
                console.error(e.message)
                alert(e.message)
            }
        }
    }

    async goto({ chr, start, end }) {

        if (this.isContactMapLoaded()) {
            try {
                const browser = this.browser
                await browser.parseGotoInput(`${chr}:${start}-${end}`)
            } catch (error) {
                console.warn(error.message)
            }
        }

    }

    async loadHicFile(url, name, mapType) {

        try {
            const isControl = ('control-map' === mapType)

            const config = { url, name, isControl }

            if (false === isControl) {

                this.present()

                await this.browser.loadHicFile(config)

            }

        } catch (e) {
            const error = new Error(`Error loading ${ url }: ${ e }`)
            console.error(error.message)
            alert(error.message)
        }

        const { chr, genomicStart, genomicEnd } = ensembleManager.locus

        try {
            await this.browser.parseGotoInput(`${chr}:${genomicStart}-${genomicEnd}`)
        } catch (error) {
            console.warn(error.message)
        }

    }

    isContactMapLoaded() {

        if (undefined === this.browser) {
            return false
        } else if (undefined === this.browser.dataset) {
            return false
        } else {
            return true
        }
    }

    createContactRecordList(contactFrequencies, liveMapTraceLength) {
        this.browser.liveContactMapDataSet.createContactRecordList(contactFrequencies, liveMapTraceLength)
    }

    async renderWithLiveContactFrequencyData(contactFrequencies, contactFrequencyArray, liveMapTraceLength) {
        await this.browser.contactMatrixView.renderWithLiveContactFrequencyData(this.browser.liveContactMapState, this.browser.liveContactMapDataSet, contactFrequencies, contactFrequencyArray, liveMapTraceLength)
    }

    async colorPickerHandler(data) {
        // if (this.browser.liveContactMapDataSet) {
            console.log(`JuiceboxPanel - colorPicker(${ data }). renderWithLiveContactFrequencyData()`)
            await this.renderWithLiveContactFrequencyData(liveMapService.contactFrequencies, liveMapService.ensembleContactFrequencyArray, ensembleManager.getLiveMapTraceLength())
        // }
    }
}

function juiceboxMouseHandler({ xBP, yBP, startXBP, startYBP, endXBP, endYBP, interpolantX, interpolantY }) {

    if (undefined === ensembleManager || undefined === ensembleManager.locus) {
        return
    }

    const { genomicStart, genomicEnd } = ensembleManager.locus

    const trivialRejection = startXBP > genomicEnd || endXBP < genomicStart || startYBP > genomicEnd || endYBP < genomicStart

    if (trivialRejection) {
        return
    }

    const xRejection = xBP < genomicStart || xBP > genomicEnd
    const yRejection = yBP < genomicStart || yBP > genomicEnd

    if (xRejection || yRejection) {
        return
    }

    SpacewalkEventBus.globalBus.post({ type: 'DidUpdateGenomicInterpolant', data: { poster: this, interpolantList: [ interpolantX, interpolantY ] } })
}

function setJuiceboxLiveState(browser) {

    const ctx = browser.contactMatrixView.ctx_live
    ctx.transferFromImageBitmap(null)

    // Create state and dataset
    browser.liveContactMapState = new LiveMapState(ensembleManager, browser.contactMatrixView)
    browser.liveContactMapDataSet = new LiveContactMapDataSet(igvPanel.browser.genome, ensembleManager)

    // Update Juicebox rulers
    browser.layoutController.xAxisRuler.presentLiveMapRuler(browser.liveContactMapState, browser.liveContactMapDataSet)
    browser.layoutController.yAxisRuler.presentLiveMapRuler(browser.liveContactMapState, browser.liveContactMapDataSet)

    if (!browser.contactMatrixView.mouseHandlersEnabled) {
        browser.contactMatrixView.addMouseHandlers(browser.contactMatrixView.$viewport);
        browser.contactMatrixView.mouseHandlersEnabled = true;
    }

}

function tabEventHandler(event) {
    tabAssessment(juiceboxPanel.browser, event.target);
    console.log(`Juicebox panel: ${event.target.id} tab selection`);
}

function tabAssessment(browser, activeTabButton) {

    switch (activeTabButton.id) {
        case 'spacewalk-juicebox-panel-hic-map-tab':
            document.getElementById('hic-live-distance-map-toggle-widget').style.display = 'none'
            document.getElementById('hic-live-contact-frequency-map-threshold-widget').style.display = 'none'
            document.getElementById('hic-file-chooser-dropdown').style.display = 'block'
            browser.contactMatrixView.assessPanelTabSelection(false)
            console.log('HIC Map Tab is active');
            break;

        case 'spacewalk-juicebox-panel-live-map-tab':
            document.getElementById('hic-live-distance-map-toggle-widget').style.display = 'none'
            document.getElementById('hic-live-contact-frequency-map-threshold-widget').style.display = 'block'
            document.getElementById('hic-file-chooser-dropdown').style.display = 'none'
            browser.contactMatrixView.assessPanelTabSelection(true)
            console.log('Live Map Tab is active');
            break;

        case 'spacewalk-juicebox-panel-live-distance-map-tab':
            document.getElementById('hic-live-distance-map-toggle-widget').style.display = 'block'
            document.getElementById('hic-live-contact-frequency-map-threshold-widget').style.display = 'none'
            document.getElementById('hic-file-chooser-dropdown').style.display = 'none'
            browser.contactMatrixView.assessPanelTabSelection(true)
            console.log('Live Distance Map Tab is active');
            break;

        default:
            console.log('Unknown tab is active');
            break;
    }
}

export default JuiceboxPanel;
