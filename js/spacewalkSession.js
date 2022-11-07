import {URIUtils, BGZip, URLShortener, FileUtils} from 'igv-utils'
import Zlib from './vendor/zlib_and_gzip.js'
import hic from './juicebox/index.js'
import Panel from './panel.js'
import {
    igvPanel,
    juiceboxPanel,
    ensembleManager,
    sceneManager,
    contactFrequencyMapPanel,
    SpacewalkGlobals
} from './app.js'
import { getGUIRenderStyle, setGUIRenderStyle } from './guiManager.js'
import SpacewalkEventBus from './spacewalkEventBus.js'
import {Globals} from "./juicebox/globals"
import {defaultDistanceThreshold} from "./contactFrequencyMapPanel"
import GenomicParser from "./genomicParser.js"
import GenomicDataset from "./genomicDataset.js"
import HDF5Parser from "./hdf5Parser.js"
import HDF5Version2Dataset from "./hdf5Version2Dataset.js";

const urlShortener = URLShortener.getShortener({ provider: "tinyURL" })

const loadSessionURL = async spacewalkSessionURL => {

    if (spacewalkSessionURL) {
        await loadSpacewalkSession( JSON.parse( uncompressSession(spacewalkSessionURL) ))
    }

}

async function loadSession(json) {

    await loadSpacewalkSession(json.spacewalk)

    if (json.juicebox) {
        await loadJuiceboxSession(json.juicebox)
    } else {
        const { chr, genomicStart, genomicEnd } = json.spacewalk.locus
        juiceboxPanel.locus = `${chr}:${genomicStart}-${genomicEnd}`
    }

    await loadIGVSession(json.spacewalk, json.igv)
}

async function loadIGVSession(spacewalk, igv) {

    await igvPanel.browser.loadSession(igv)
    igvPanel.configureMouseHandlers()

    if ('none' !== spacewalk.igvPanelState) {
        await igvPanel.restoreSessionState(spacewalk.igvPanelState);
    }

}

async function loadJuiceboxSession(session) {
    await hic.restoreSession($('#spacewalk_juicebox_root_container').get(0), session)
    juiceboxPanel.configureMouseHandlers()
}

async function loadSpacewalkSession (session) {

    SpacewalkEventBus.globalBus.unsubscribe('DidLoadEnsembleFile', igvPanel)
    SpacewalkEventBus.globalBus.unsubscribe('DidLoadEnsembleFile', juiceboxPanel)
    SpacewalkEventBus.globalBus.unsubscribe('RenderStyleDidChange', sceneManager)

    const {
        url,
        traceKey,
        igvPanelState,
        renderStyle,
        panelVisibility,
        gnomonVisibility,
        groundPlaneVisibility,
        cameraLightingRig,
        gnomonColor,
        groundplaneColor,
        sceneBackground,
        contactFrequencyMapDistanceThreshold
    } = session

    contactFrequencyMapPanel.setState(contactFrequencyMapDistanceThreshold || defaultDistanceThreshold)

    await loadSessionTrace({ url, traceKey })

    setGUIRenderStyle(renderStyle);

    Panel.setAllPanelVisibility(panelVisibility);

    sceneManager.gnomon.setVisibility(gnomonVisibility);

    sceneManager.groundPlane.setVisibility(groundPlaneVisibility);

    // TODO: Decide whether to restore camera state
    // sceneManager.cameraLightingRig.setState(cameraLightingRig);

    sceneManager.gnomon.setColorState(gnomonColor);

    sceneManager.groundPlane.setColorState(groundplaneColor);

    // TODO: Figure out how do deal with background shader
    // sceneManager.setBackgroundState(sceneBackground);

    SpacewalkEventBus.globalBus.subscribe('DidLoadEnsembleFile', igvPanel)
    SpacewalkEventBus.globalBus.subscribe('DidLoadEnsembleFile', juiceboxPanel)
    SpacewalkEventBus.globalBus.subscribe('RenderStyleDidChange', sceneManager)

}

async function loadSessionTrace ({ url, traceKey }) {

    const extension = FileUtils.getExtension(url)

    if ('cndb' === extension) {
        await ensembleManager.load(url, new HDF5Parser(), new HDF5Version2Dataset(), parseInt(traceKey))
    } else {
        await ensembleManager.load(url, new GenomicParser(), new GenomicDataset(), parseInt(traceKey))
    }

    // await ensembleManager.load(url, new GenomicParser(), new GenomicDataset(), parseInt(traceKey))
}

function getUrlParams(url) {

    const search = decodeURIComponent( url.slice( url.indexOf( '?' ) + 1 ) );

    return search
        .split('&')
        .reduce((acc, key_value) => {

            const [ key, value ] = key_value.split( '=', 2 );
            acc[ key ] = value;
            return acc;
        }, {});

}

async function getShareURL() {

    const spacewalkCompressedSession = getCompressedSession()
    const igvCompressedSession = igvPanel.browser.compressedSession()

    let juiceboxCompressedSession
    if (Globals.currentBrowser.dataset && undefined === Globals.currentBrowser.dataset.isLiveContactMapDataSet) {
        // Note format is: session=blob:${BGZip.compressString(jsonString)}
        juiceboxCompressedSession = hic.compressedSession()
    }

    const path = window.location.href.slice()
    const index = path.indexOf("?")
    const prefix = index > 0 ? path.substring(0, index) : path

    let url
    if (juiceboxCompressedSession) {
        url = `${ prefix }?spacewalkSessionURL=blob:${ spacewalkCompressedSession }&sessionURL=blob:${ igvCompressedSession }&${ juiceboxCompressedSession }`
    } else {
        url = `${ prefix }?spacewalkSessionURL=blob:${ spacewalkCompressedSession }&sessionURL=blob:${ igvCompressedSession }`
    }

    return urlShortener.shortenURL(url)

}

function getCompressedSession() {
    const json = spacewalkToJSON()
    return BGZip.compressString( JSON.stringify( json ) )
}

function spacewalkToJSON () {

    let spacewalk
    if (SpacewalkGlobals.url) {
        spacewalk = { url: SpacewalkGlobals.url }

        spacewalk.locus = { ...ensembleManager.locus }
        spacewalk.traceKey = ensembleManager.currentIndex.toString()
        spacewalk.igvPanelState = igvPanel.getSessionState()
        spacewalk.renderStyle = getGUIRenderStyle()
        spacewalk.panelVisibility = {}

        for (let [key, value] of Object.entries( Panel.getPanelDictionary() )) {
            spacewalk.panelVisibility[ key ] = true === value.isHidden ? 'hidden' : 'visible'
        }

        spacewalk.gnomonVisibility = true === sceneManager.gnomon.group.visible ? 'visible' : 'hidden'
        spacewalk.groundPlaneVisibility = true === sceneManager.groundPlane.visible ? 'visible' : 'hidden'
        spacewalk.cameraLightingRig = sceneManager.cameraLightingRig.getState()
        spacewalk.gnomonColor = sceneManager.gnomon.getColorState()
        spacewalk.groundplaneColor = sceneManager.groundPlane.getColorState()

        spacewalk.contactFrequencyMapDistanceThreshold = contactFrequencyMapPanel.distanceThreshold

        return spacewalk
    } else {
        throw new Error(`Unable to save session. Local files not supported.`)
    }


}

function toJSON () {

    const spacewalk = spacewalkToJSON()

    const igv = igvPanel.browser.toJSON()

    const json = { spacewalk, igv }

    if (Globals.currentBrowser.dataset && undefined === Globals.currentBrowser.dataset.isLiveContactMapDataSet) {
        json.juicebox = hic.toJSON()
    }

    return json

}

function uncompressSession(url) {

    if (url.indexOf('/gzip;base64') > 0) {

        const bytes = URIUtils.decodeDataURI(url);
        let json = '';
        for (let b of bytes) {
            json += String.fromCharCode(b)
        }
        return json;
    } else {

        let enc = url.substring(5);
        return BGZip.uncompressString(enc, Zlib);
    }
}

export { getShareURL, getUrlParams, loadSessionURL, toJSON, loadSession, uncompressSession };
