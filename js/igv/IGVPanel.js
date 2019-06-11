import Globals from './../globals.js';
import igv from '../../vendor/igv.esm.js';
import { makeDraggable } from "../draggable.js";
import { lerp } from "../math.js";
import { segmentIndexForInterpolant, moveOffScreen, moveOnScreen } from '../utils.js';
import { igvPanel } from '../gui.js';

let currentURL = undefined;
class IGVPanel {

    constructor ({ container, panel, isHidden }) {

        this.container = container;
        this.$panel = $(panel);
        this.isHidden = isHidden;

        if (isHidden) {
            moveOffScreen(this);
        } else {
            this.layout();
        }

        makeDraggable(panel, $(panel).find('.spacewalk_card_drag_container').get(0));

        $(window).on('resize.window.trace3d.spacewalk_igv_panel', () => { this.onWindowResize() });

        addResizeListener(panel, () => {

            if (this.browser) {
                this.browser.resize();
            }

        });

        this.$panel.on('mouseenter.trace3d.spacewalk_igv_panel', (event) => {
            event.stopPropagation();
            Globals.eventBus.post({ type: "DidEnterGUI" });
        });

        this.$panel.on('mouseleave.trace3d.spacewalk_igv_panel', (event) => {
            event.stopPropagation();
            Globals.eventBus.post({ type: "DidLeaveGUI" });
        });

        // URL
        const $url_input = $('#spacewalk_igv_panel_url_input');
        $url_input.val('');

        const $url_button = $('#spacewalk_igv_panel_url_button');

        $url_input.on('change.spacewalk_igv_panel_url_input', (event) => {
            event.stopPropagation();
            // console.log('url on change - value ' + event.target.value);
            currentURL = event.target.value;
        });

        const $url_container = $('#spacewalk_igv_container');

        $url_button.on('click.spacewalk_igv_panel_url_button', async (event) => {
            event.stopPropagation();
            $url_input.trigger('change.spacewalk_igv_panel_url_input');
            await this.loadURL({ url: currentURL, $spinner: $url_container.find('.spinner-border')});

            $url_input.val('');
            currentURL = undefined;
        });

        Globals.eventBus.subscribe("ToggleUIControl", this);
    }

    receiveEvent({ type, data }) {

        if ("ToggleUIControl" === type && data && data.payload === this.$panel.attr('id')) {

            if (true === this.isHidden) {

                moveOnScreen(this);

                const { chromosome, start, end } = this.browser.genomicStateList[ 0 ];
                const { name: chr } = chromosome;
                this.browser.goto(chr, start, end);
            } else {
                moveOffScreen(this);
            }

            this.isHidden = !this.isHidden;
        }
    }

    async initialize(config) {

        try {
            this.browser = await igv.createBrowser( this.$panel.find('#spacewalk_igv_root_container').get(0), config );
            const tracks = this.browser.findTracks('type', 'wig');
            addDataValueMaterialProviderGUI(tracks);
        } catch (error) {
            console.warn(error.message);
        }

    }

    goto({ chr, start, end }) {
        this.browser.goto(chr, start, end);
    }

    async loadTrack(url) {

        try {
            const track = await igv.browser.loadTrack({ url });
            return track;
        } catch (error) {
            console.warn(error.message);
            return undefined;
        }

    }

    async loadURL({ url, $spinner }){

        url = url || '';

        if ('' !== url) {
            $spinner.show();
            let track = await this.loadTrack(url);
            $spinner.hide();
        }

    };

    async trackDataHandler (track) {

        if (track) {
            this.currentDataTrack = track;
        }

        if (this.currentDataTrack) {

            const { chromosome, start, end, referenceFrame } = this.browser.genomicStateList[ 0 ];
            const { name: chr } = chromosome;
            const { bpPerPixel } = referenceFrame;

            const features = await this.currentDataTrack.getFeatures(chr, start, end, bpPerPixel);

            const { min, max } = this.currentDataTrack.dataRange;

            Globals.dataValueMaterialProvider.configure({startBP: start, endBP: end, features, min, max});
        }

    };

    onWindowResize() {
        if (false === this.isHidden) {
            this.layout();
        }
    }

    layout() {

        // const { left, top, right, bottom, x, y, width, height } = container.getBoundingClientRect();
        const { width: c_w, height: c_h } = this.container.getBoundingClientRect();
        const { width:   w, height:   h } = this.$panel.get(0).getBoundingClientRect();

        const left = (c_w - w)/2;
        const top = c_h - 1.1 * h;
        this.$panel.offset( { left, top } );
    }

    // Each segment "ball" is point in genomic space. Find features (genomic range) that overlap that point.
    async buildFeatureSegmentIndices({ chr, start, end, stepSize }) {

        this.featureSegmentIndices = new Set();

        const features = await this.track.getFeatures(chr, start, end, this.bpp);

        for (let feature of features) {

            const index = Math.floor((feature.start - start) / stepSize);

            const one_based = 1 + index;
            if(index >= 0) {
                this.featureSegmentIndices.add(one_based);
            }
        }

    }

}

export const encodeTrackListLoader = async (browser, trackConfigurations) => {

    const tracks = await browser.loadTrackList(trackConfigurations);
    addDataValueMaterialProviderGUI(tracks);
};

const addDataValueMaterialProviderGUI = tracks => {

    for (let track of tracks) {

        if ('wig' === track.type) {

            const { trackDiv } = track.trackView;

            const $container = $(trackDiv).find('.igv-left-hand-gutter');

            const $div = $('<div>', { class: 'input-group' });
            $container.append($div);

            const $input = $('<input>', { type: 'checkbox' });
            $div.append($input);

            $input.on('click.encode-loader', (event) => {
                const isChecked = $input.prop('checked') ? 'check': 'un-check';
                console.log(`roger. that's a ${ isChecked }`)
            });

        }
    }

};

export const igvBrowserConfigurator = () => {
    return { genome: 'hg38', customTrackHandler: customIGVTrackHandler };
};

export const igvBrowserConfiguratorBigWig = () => {

    const config =
        {
            genome: 'hg38',
            customTrackHandler: customIGVTrackHandler,
            tracks:
                [

                    {
                        "Assembly": "GRCh38",
                        "ExperimentID": "/experiments/ENCSR580GSX/",
                        "Experiment": "ENCSR580GSX",
                        "Biosample": "A172",
                        "Assay Type": "RNA-seq",
                        "Target": "",
                        "Format": "bigWig",
                        "Output Type": "minus strand signal of all reads",
                        "Lab": "Thomas Gingeras, CSHL",
                        "url": "https://www.encodeproject.org/files/ENCFF439GUL/@@download/ENCFF439GUL.bigWig",
                        "Bio Rep": "1",
                        "Tech Rep": "1_1",
                        "Accession": "ENCFF439GUL",
                        "Name": " RNA-seq 1:1_1 minus strand signal of all reads ENCSR580GSX",
                        "filename": "ENCFF439GUL.bigWig",
                        "sourceType": "file",
                        "format": "bigwig",
                        "type": "wig",
                        "color": "rgb(150,150,150)",
                        "height": 50,
                        "name": "https://www.encodeproject.org/files/ENCFF439GUL/@@download/ENCFF439GUL.bigWig",
                        "autoscale": true,
                        "order": 3
                    },
                    {
                        "Assembly": "GRCh38",
                        "ExperimentID": "/experiments/ENCSR000DND/",
                        "Experiment": "ENCSR000DND",
                        "Biosample": "pancreas male adult (54 years) and male adult (60 years)",
                        "Assay Type": "ChIP-seq",
                        "Target": "CTCF ",
                        "Format": "bigWig",
                        "Output Type": "signal p-value",
                        "Lab": "Vishwanath Iyer, UTA",
                        "url": "https://www.encodeproject.org/files/ENCFF741SLO/@@download/ENCFF741SLO.bigWig",
                        "Bio Rep": "1",
                        "Tech Rep": "1_1",
                        "Accession": "ENCFF741SLO",
                        "Name": " CTCF  1:1_1 signal p-value ENCSR000DND",
                        "filename": "ENCFF741SLO.bigWig",
                        "sourceType": "file",
                        "format": "bigwig",
                        "type": "wig",
                        "color": "rgb(150,150,150)",
                        "height": 50,
                        "name": "https://www.encodeproject.org/files/ENCFF741SLO/@@download/ENCFF741SLO.bigWig",
                        "autoscale": true,
                        "order": 4
                    },
                    {
                        "Assembly": "GRCh38",
                        "ExperimentID": "/experiments/ENCSR000DXZ/",
                        "Experiment": "ENCSR000DXZ",
                        "Biosample": "WI38",
                        "Assay Type": "ChIP-seq",
                        "Target": "H3K4me3 ",
                        "Format": "bigWig",
                        "Output Type": "fold change over control",
                        "Lab": "John Stamatoyannopoulos, UW",
                        "url": "https://www.encodeproject.org/files/ENCFF319QVY/@@download/ENCFF319QVY.bigWig",
                        "Bio Rep": "1,2",
                        "Tech Rep": "1_1,2_1",
                        "Accession": "ENCFF319QVY",
                        "Name": " H3K4me3  1,2:1_1,2_1 fold change over control ENCSR000DXZ",
                        "filename": "ENCFF319QVY.bigWig",
                        "sourceType": "file",
                        "format": "bigwig",
                        "type": "wig",
                        "color": "rgb(150,150,150)",
                        "height": 50,
                        "name": "https://www.encodeproject.org/files/ENCFF319QVY/@@download/ENCFF319QVY.bigWig",
                        "autoscale": true,
                        "order": 5
                    }

                ]
        };

    return config;
};

export let IGVMouseHandler = ({ bp, start, end, interpolant, structureLength }) => {

    const { genomicStart, genomicEnd } = Globals.ensembleManager.locus;

    const xRejection = start > genomicEnd || end < genomicStart || bp < genomicStart || bp > genomicEnd;

    if (xRejection) {
        return;
    }

    let [ a, b ] = [ (start - genomicStart)/(genomicEnd - genomicStart), (end - genomicStart)/(genomicEnd - genomicStart) ];
    const segmentIndex = segmentIndexForInterpolant(lerp(a, b, interpolant), structureLength);

    Globals.eventBus.post({ type: 'DidSelectSegmentIndex', data: { interpolantList: [ interpolant ], segmentIndexList: [ segmentIndex ]} });
};

export let customIGVTrackHandler = async (track) => {

    await igvPanel.trackDataHandler(track);

    Globals.sceneManager.materialProvider = Globals.dataValueMaterialProvider;
    Globals.noodle.updateMaterialProvider(Globals.sceneManager.materialProvider);
    Globals.ballAndStick.updateMaterialProvider(Globals.sceneManager.materialProvider);

};

export const genomes = "resources/genomes.json";
export const trackRegistryFile = "resources/tracks/trackRegistry.json";
export default IGVPanel;
