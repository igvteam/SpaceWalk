import Stats from 'three/examples/jsm/libs/stats.module.js'
import { GUI } from 'three/examples/jsm/libs/dat.gui.module.js';
import { AlertSingleton, EventBus, createSessionWidgets, dropboxDropdownItem, googleDriveDropdownItem, createTrackWidgetsWithTrackRegistry } from 'igv-widgets'
import {GoogleAuth, igvxhr, StringUtils} from 'igv-utils'
import SpacewalkEventBus from "./spacewalkEventBus.js";
import EnsembleManager from "./ensembleManager.js";
import ColorMapManager from "./colorMapManager.js";
import Parser from "./parser.js";
import SceneManager, { sceneManagerConfigurator } from "./sceneManager.js";
import DataValueMaterialProvider from './dataValueMaterialProvider.js';
import DeprecatedDataValueMaterialProvider from "./deprecatedDataValueMaterialProvider.js";
import ColorRampMaterialProvider from "./colorRampMaterialProvider.js";
import Panel from "./panel.js";
import PointCloud from "./pointCloud.js";
import Ribbon from "./ribbon.js";
import BallAndStick from "./ballAndStick.js";
import GUIManager, { doConfigurePanelHidden } from "./guiManager.js";
import TraceSelectPanel from "./traceSelectPanel.js";
import ColorRampPanel, {colorRampPanelConfigurator} from "./colorRampPanel.js";
import DistanceMapPanel, {distanceMapPanelConfigurator} from "./distanceMapPanel.js";
import ContactFrequencyMapPanel, {contactFrequencyMapPanelConfigurator} from "./contactFrequencyMapPanel.js";
import IGVPanel from "./IGVPanel.js";
import JuiceboxPanel from "./juiceboxPanel.js";
import { appleCrayonColorRGB255, appleCrayonColorThreeJS, highlightColor } from "./color.js";
import { getUrlParams, getShareURL, loadSessionURL, toJSON, loadSession } from "./spacewalkSession.js";
import { initializeMaterialLibrary } from "./materialLibrary.js";
import RenderContainerController from "./renderContainerController.js";
import {createSpacewalkFileLoaders} from './spacewalkFileLoad.js'
import BallHighlighter from "./ballHighlighter.js";
import PointCloudHighlighter from "./pointCloudHighlighter.js";
import configureContactMapLoaders from "./juicebox/contactMapLoad.js";
import { spacewalkConfig } from "./spacewalk-config.js";

let stats
let gui
let guiStatsEl

let pointCloud;
let ribbon;
let ballAndStick;
let parser;
let ensembleManager;
let colorMapManager;
let sceneManager;
let dataValueMaterialProvider;
let colorRampMaterialProvider;
let guiManager;
let traceSelectPanel;
let colorRampPanel;
let distanceMapPanel;
let contactFrequencyMapPanel;
let juiceboxPanel;
let igvPanel;
let renderContainerController;
let googleEnabled = false;

document.addEventListener("DOMContentLoaded", async (event) => {

    const container = document.getElementById('spacewalk-root-container');

    AlertSingleton.init(container)

    const { userAgent } = window.navigator;

    const isChromeUserAgent = userAgent.indexOf("Chrome") > -1;

    try {

        if (!isChromeUserAgent) {
            throw new Error("Spacewalk only supports Chrome Browser");
        }

    } catch (e) {
        AlertSingleton.present(e.message)
    }

    const { clientId, apiKey } = spacewalkConfig
    const enableGoogle = clientId && 'CLIENT_ID' !== clientId && (window.location.protocol === "https:" || window.location.host === "localhost")

    if (enableGoogle) {
        try {
            await GoogleAuth.init({ clientId, apiKey, scope: 'https://www.googleapis.com/auth/userinfo.profile' })
            await GoogleAuth.signOut()
            googleEnabled = true
        } catch (e) {
            console.error(e)
            AlertSingleton.present(e.message)
        }
    }

    await initializationHelper(container)

});

const initializationHelper = async container => {

    await initializeMaterialLibrary();

    parser = new Parser();

    pointCloud = new PointCloud({ pickHighlighter: new PointCloudHighlighter(highlightColor), deemphasizedColor: appleCrayonColorThreeJS('magnesium') })

    ribbon = new Ribbon();

    ballAndStick = new BallAndStick({ pickHighlighter: new BallHighlighter(highlightColor) });

    ensembleManager = new EnsembleManager();

    colorMapManager = new ColorMapManager();
    await colorMapManager.configure();

    // dataValueMaterialProvider = new DataValueMaterialProvider({ width:8192, height:16, colorMinimum:appleCrayonColorRGB255('silver'), colorMaximum:appleCrayonColorRGB255('blueberry') })
    dataValueMaterialProvider = new DeprecatedDataValueMaterialProvider(appleCrayonColorRGB255('silver'), appleCrayonColorRGB255('blueberry'))

    const $canvasContainer = $('#spacewalk_color_ramp_canvas_container');
    colorRampMaterialProvider = new ColorRampMaterialProvider( { $canvasContainer, highlightColor } );

    sceneManager = new SceneManager(sceneManagerConfigurator({ container: document.getElementById('spacewalk-threejs-container'), highlightColor }));

    renderContainerController = new RenderContainerController(container, sceneManager);

    const { sessionURL:igvSessionURL, session:juiceboxSessionURL, spacewalkSessionURL } = getUrlParams(window.location.href);

    await createButtonsPanelsModals(container, igvSessionURL, juiceboxSessionURL);

    guiManager = new GUIManager({ $button: $('#spacewalk_ui_manager_button'), $panel: $('#spacewalk_ui_manager_panel') });

    // frame rate
    stats = new Stats()
    document.body.appendChild( stats.dom )

    // draw calls
    // gui = new GUI()
    //
    // const perfFolder = gui.addFolder('Performance')
    //
    // guiStatsEl = document.createElement('li')
    // guiStatsEl.classList.add('gui-stats')
    // guiStatsEl.innerHTML = '<i>GPU draw calls</i>: 1'
    //
    // perfFolder.__ul.appendChild( guiStatsEl )
    // perfFolder.open()


    await loadSessionURL(spacewalkSessionURL)

    renderLoop()

}

function renderLoop() {

    requestAnimationFrame( renderLoop )

    render()

}

function render () {

    pointCloud.renderLoopHelper()

    ribbon.renderLoopHelper()

    colorRampMaterialProvider.renderLoopHelper()

    sceneManager.renderLoopHelper()

    stats.update()

}

const createButtonsPanelsModals = async (container, igvSessionURL, juiceboxSessionURL) => {

    const spacewalkFileLoadConfig =
        {
            rootContainer: document.getElementById('spacewalk-main'),
            localFileInput: document.getElementById('spacewalk-sw-load-local-input'),
            urlLoadModalId: 'spacewalk-sw-load-url-modal',
            gsdbModalId: 'spacewalk-gsdb-modal',
            dropboxButton: document.getElementById('spacewalk-sw-dropbox-button'),
            googleDriveButton: document.getElementById('spacewalk-sw-google-drive-button'),
            googleEnabled,
            fileLoader: parser
        };

    createSpacewalkFileLoaders(spacewalkFileLoadConfig)

    // $('#spacewalk-reset-camera-button').on('click.spacewalk-reset-camera-button', e => {
    //     sceneManager.resetCamera();
    // });

    // Session - Dropbox and Google Drive buttons
    $('div#spacewalk-session-dropdown-menu > :nth-child(1)').after(dropboxDropdownItem('igv-app-dropdown-dropbox-session-file-button'));
    $('div#spacewalk-session-dropdown-menu > :nth-child(2)').after(googleDriveDropdownItem('igv-app-dropdown-google-drive-session-file-button'));

    const $main = $('#spacewalk-main')
    createSessionWidgets($main,
        igvxhr,
        'spacewalk',
        'igv-app-dropdown-local-session-file-input',
        'igv-app-dropdown-dropbox-session-file-button',
        'igv-app-dropdown-google-drive-session-file-button',
        'spacewalk-session-url-modal',
        'spacewalk-session-save-modal',
        googleEnabled,
        async json => await loadSession(json),
        () => toJSON());


    createShareWidgets($main, $('#spacewalk-share-button'), 'spacewalk-share-modal')

    traceSelectPanel = new TraceSelectPanel({ container, panel: $('#spacewalk_trace_select_panel').get(0), isHidden: doConfigurePanelHidden('spacewalk_trace_select_panel') });

    colorRampPanel = new ColorRampPanel( colorRampPanelConfigurator({ container, isHidden: doConfigurePanelHidden('spacewalk_color_ramp_panel') }) );

    distanceMapPanel = new DistanceMapPanel(distanceMapPanelConfigurator({ container, isHidden: doConfigurePanelHidden('spacewalk_distance_map_panel') }));

    contactFrequencyMapPanel = new ContactFrequencyMapPanel(contactFrequencyMapPanelConfigurator({ container, isHidden: doConfigurePanelHidden('spacewalk_contact_frequency_map_panel') }));

    juiceboxPanel = new JuiceboxPanel({ container, panel: $('#spacewalk_juicebox_panel').get(0), isHidden: doConfigurePanelHidden('spacewalk_juicebox_panel') });

    const juiceboxInitializationConfig =
        {
            container: $('#spacewalk_juicebox_root_container').get(0),
            width: 480,
            height: 480
        }
    if (juiceboxSessionURL) {
        juiceboxInitializationConfig.session = JSON.parse(StringUtils.uncompressString(juiceboxSessionURL.substr(5)))
    }
    await juiceboxPanel.initialize(juiceboxInitializationConfig)

    const $dropdownButton = $('#hic-contact-map-dropdown')
    const $dropdowns = $dropdownButton.parent()

    const contactMapLoadConfig =
        {
            rootContainer: document.querySelector('#spacewalk-main'),
            $dropdowns,
            $localFileInputs: $dropdowns.find('input'),
            urlLoadModalId: 'hic-load-url-modal',
            dataModalId: 'hic-contact-map-modal',
            encodeHostedModalId: 'hic-encode-hosted-contact-map-modal',
            $dropboxButtons: $dropdowns.find('div[id$="-map-dropdown-dropbox-button"]'),
            $googleDriveButtons: $dropdowns.find('div[id$="-map-dropdown-google-drive-button"]'),
            googleEnabled,
            mapMenu: spacewalkConfig.contactMapMenu,
            loadHandler: (path, name, mapType) => juiceboxPanel.loadHicFile(path, name, mapType)
        }

    configureContactMapLoaders(contactMapLoadConfig)

    igvPanel = new IGVPanel({ container, panel: $('#spacewalk_igv_panel').get(0), isHidden: doConfigurePanelHidden('spacewalk_igv_panel') })
    igvPanel.materialProvider = colorRampMaterialProvider;

    if (igvSessionURL) {
        spacewalkConfig.session = JSON.parse(StringUtils.uncompressString(igvSessionURL.substr(5)))
    }
    await igvPanel.initialize(spacewalkConfig)

    createTrackWidgetsWithTrackRegistry(
        $(igvPanel.container),
        $('#hic-track-dropdown-menu'),
        $('#hic-local-track-file-input'),
        $('#hic-track-dropdown-dropbox-button'),
        googleEnabled,
        $('#hic-track-dropdown-google-drive-button'),
        ['hic-encode-signal-modal', 'hic-encode-other-modal'],
        'hic-app-track-load-url-modal',
        'hic-app-track-select-modal',
        undefined,
        spacewalkConfig.trackRegistryFile,
        (configurations) => igvPanel.loadTrackList(configurations))

    // Event bus specifically dedicated to IGV Track Menu
    EventBus.globalBus.post({ type: 'DidChangeGenome', data: { genomeID: igvPanel.browser.genome.id }})

    Panel.setPanelList([traceSelectPanel, colorRampPanel, distanceMapPanel, contactFrequencyMapPanel, juiceboxPanel, igvPanel]);

    $(window).on('resize.app', e => {

        // Prevent responding to resize event sent by jQuery resizable()
        const status = $(e.target).hasClass('ui-resizable');

        if (false === status) {
            let { width, height } = container.getBoundingClientRect();
            SpacewalkEventBus.globalBus.post({ type: 'AppWindowDidResize', data: { width, height } });
        }
    });

};

const createShareWidgets = ($container, $share_button, share_modal_id) => {

    const modal =
        `<div id="${ share_modal_id }" class="modal fade">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">

                <div class="modal-header">
                    <div class="modal-title">Share</div>
                    <button type="button" class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>

                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-9">
                                <div class="form-group">
                                    <input type="text" class="form-control" placeholder="">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <button type="button" class="btn btn-default">COPY</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>`

    $container.append($(modal))
    const $share_modal = $(`#${ share_modal_id }`)

    const $share_input = $share_modal.find('input')

    $share_button.on('click.spacewalk-share-button', async e => {

        let url = undefined
        try {
            url = await getShareURL()
        } catch (e) {
            AlertSingleton.present(e.message)
            return
        }

        if (url) {
            $share_input.val( url )
            $share_input.get(0).select()
            $share_modal.modal('show')
        }

    })

    const $copy_button = $share_modal.find('button')

    $copy_button.on('click.spacewalk-copy', e => {

        $share_input.get(0).select()

        const success = document.execCommand('copy')
        if (success) {
            $share_modal.modal('hide')
        } else {
            alert("Copy not successful")
        }
    })

}

const appendAndConfigureLoadURLModal = (root, id, input_handler) => {

    const html =
        `<div id="${id}" class="modal fade">
            <div class="modal-dialog  modal-lg">
                <div class="modal-content">

                <div class="modal-header">
                    <div class="modal-title">Load URL</div>

                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>

                </div>

                <div class="modal-body">

                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Enter URL">
                    </div>

                </div>

                </div>
            </div>
        </div>`;

    $(root).append(html);

    const $modal = $(root).find(`#${ id }`);
    $modal.find('input').on('change', function () {

        const path = $(this).val();
        $(this).val("");

        $(`#${ id }`).modal('hide');

        input_handler(path);


    });

    return html;
}

function showSpinner() {
    document.getElementById('spacewalk-spinner').style.display = 'block'
}

function hideSpinner() {
    document.getElementById('spacewalk-spinner').style.display = 'none'
}

export { googleEnabled, pointCloud, ribbon, ballAndStick, parser, ensembleManager, colorMapManager, sceneManager, colorRampMaterialProvider, dataValueMaterialProvider, guiManager, showSpinner, hideSpinner, juiceboxPanel, distanceMapPanel, contactFrequencyMapPanel, igvPanel, traceSelectPanel, colorRampPanel, appendAndConfigureLoadURLModal };