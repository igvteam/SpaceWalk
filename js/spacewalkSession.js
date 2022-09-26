import { URIUtils, BGZip, URLShortener } from 'igv-utils'
import Zlib from './vendor/zlib_and_gzip.js'
import hic from './juicebox/index.js'
import Panel from './panel.js'
import {parser, igvPanel, juiceboxPanel, ensembleManager, sceneManager} from './app.js'
import { getGUIRenderStyle, setGUIRenderStyle } from './guiManager.js'
import SpacewalkEventBus from './spacewalkEventBus.js'
import {Globals} from "./juicebox/globals"

const urlShortener = URLShortener.getShortener({ provider: "tinyURL" })

const loadSessionURL = async spacewalkSessionURL => {

    if (spacewalkSessionURL) {
        await loadSpacewalkSession( JSON.parse( uncompressSession(spacewalkSessionURL) ))
    }

}

async function loadSession(json) {

    await loadSpacewalkSession(json.spacewalk)

    if (json.juicebox) {
        await loadJuiceboxSession(json.spacewalk.locus, json.juicebox)
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

async function loadJuiceboxSession(locus, session) {
    await hic.restoreSession($('#spacewalk_juicebox_root_container').get(0), session)
    const { chr, genomicStart:start, genomicEnd:end } = locus
    await juiceboxPanel.goto({chr, start, end})
    juiceboxPanel.configureMouseHandlers()
}

async function loadSpacewalkSession (session) {

    SpacewalkEventBus.globalBus.unsubscribe('DidLoadEnsembleFile', igvPanel)
    SpacewalkEventBus.globalBus.unsubscribe('DidLoadEnsembleFile', juiceboxPanel)
    SpacewalkEventBus.globalBus.unsubscribe('RenderStyleDidChange', sceneManager)

    const { url, traceKey, igvPanelState, renderStyle, panelVisibility, gnomonVisibility, groundPlaneVisibility, cameraLightingRig, gnomonColor, groundplaneColor, sceneBackground } = session

    await parser.loadSessionTrace({ url, traceKey });

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

const getUrlParams = url => {

    const search = decodeURIComponent( url.slice( url.indexOf( '?' ) + 1 ) );

    return search
        .split('&')
        .reduce((acc, key_value) => {

            const [ key, value ] = key_value.split( '=', 2 );
            acc[ key ] = value;
            return acc;
        }, {});

};

async function getShareURL() {

    const spacewalkCompressedSession = getCompressedSession()
    const igvCompressedSession = igvPanel.browser.compressedSession()

    let juiceboxCompressedSession
    if (Globals.currentBrowser.dataset) {
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

    const spacewalk = parser.toJSON()
    spacewalk.locus = ensembleManager.locus
    spacewalk.traceKey = ensembleManager.getTraceKey(ensembleManager.currentTrace)
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

    return spacewalk

}

function toJSON () {

    const spacewalk = spacewalkToJSON()

    const igv = igvPanel.browser.toJSON()

    const juicebox = hic.toJSON()

    return { spacewalk, igv, juicebox }

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
