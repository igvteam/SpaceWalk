import { globalEventBus } from "../eventBus.js";

import { createBrowser } from '../../vendor/juicebox/js/hic.js'
import { makeDraggable } from "../draggable.js";
import { lerp } from '../math.js'
import { segmentIndexForInterpolant, moveOffScreen, moveOnScreen } from "../utils.js";

import { structureManager } from "../main.js";

let currentURL = undefined;
class JuiceboxPanel {

    constructor ({ container, panel, isHidden }) {

        this.$panel = $(panel);
        this.container = container;
        this.isHidden = isHidden;

        if (isHidden) {
            moveOffScreen(this);
        } else {
            this.layout();
        }

        makeDraggable(panel, $(panel).find('.trace3d_card_drag_container').get(0));

        $(window).on('resize.trace3d.juicebox_panel', () => { this.onWindowResize(container, panel) });

        $(panel).on('mouseenter.trace3d.juicebox_panel', (event) => {
            event.stopPropagation();
            globalEventBus.post({ type: "DidEnterGUI" });
        });

        $(panel).on('mouseleave.trace3d.juicebox_panel', (event) => {
            event.stopPropagation();
            globalEventBus.post({ type: "DidLeaveGUI" });
        });

        globalEventBus.subscribe("ToggleUIControl", this);

    }

    async receiveEvent({ type, data }) {

        if ("ToggleUIControl" === type && data && data.payload === this.$panel.attr('id')) {

            if (true === this.isHidden) {
                moveOnScreen(this);
                await this.browser.parseGotoInput(this.locus);
            } else {
                moveOffScreen(this);
            }

            this.isHidden = !this.isHidden;
        }
    }

    async createBrowser (config) {

        // const urlShortenerConfig =
        //     [
        //         {
        //             provider: "bitly",
        //             apiKey: "ABCD",        // TODO -- replace with your Bitly access token
        //             hostname: 'bit.ly'
        //         },
        //         {
        //             provider: "google",
        //             apiKey: "ABCD",        // TODO -- replace with your Google API Key
        //             hostname: "goo.gl"
        //         }
        //     ];
        //
        // hic.setURLShortener(urlShortenerConfig);

        try {
            const browser = await createBrowser(config.container, config);

            if (false === this.isHidden) {
                this.layout();
            }

            this.browser = browser;

            return browser;
        } catch (error) {
            console.warn(error.message);
            return undefined;
        }
    }

    async goto({ chr, start, end }) {
        this.locus = chr + ':' + start + '-' + end;
        await this.browser.parseGotoInput(this.locus);
    }

    async defaultConfiguration () {

        const config =
            {
                url: "https://hicfiles.s3.amazonaws.com/hiseq/gm12878/in-situ/HIC010.hic",
                name: "Rao and Huntley et al. | Cell 2014 GM12878 (human) in situ MboI HIC010 (47M)",
                isControl: false
            };

        await this.browser.loadHicFile(config);
        await this.goto({ chr:'chr21', start:28e6, end:30e6 });
    }

    async loadURL({ url, name }){

        try {
            await this.browser.loadHicFile({ url, name, isControl: false });
        } catch (error) {
            console.warn(error.message);
        }

        await this.browser.parseGotoInput(this.locus);
    }

    async loadLocalFile({ file }){

        await this.loadURL({ url: file, name: file.name });

    }

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
        const top = c_h - 1.05 * h;
        this.$panel.offset( { left, top } );
    }

}

export let juiceboxMouseHandler = ({ xBP, yBP, startXBP, startYBP, endXBP, endYBP, interpolantX, interpolantY, structureLength }) => {

    const { genomicStart, genomicEnd } = structureManager.locus;

    const trivialRejection = startXBP > genomicEnd || endXBP < genomicStart || startYBP > genomicEnd || endYBP < genomicStart;

    if (trivialRejection) {
        return;
    }

    const xRejection = xBP < genomicStart || xBP > genomicEnd;
    const yRejection = yBP < genomicStart || yBP > genomicEnd;

    if (xRejection || yRejection) {
        return;
    }

    let a;
    let b;

    [ a, b ] = [ (startXBP - genomicStart)/(genomicEnd - genomicStart), (endXBP - genomicStart)/(genomicEnd - genomicStart) ];
    const segmentIndexX = segmentIndexForInterpolant(lerp(a, b, interpolantX), structureLength);

    [ a, b ] = [ (startYBP - genomicStart)/(genomicEnd - genomicStart), (endYBP - genomicStart)/(genomicEnd - genomicStart) ];
    const segmentIndexY = segmentIndexForInterpolant(lerp(a, b, interpolantY), structureLength);

    const list = segmentIndexX === segmentIndexY ? [ segmentIndexX ] : [ segmentIndexX, segmentIndexY ];

    globalEventBus.post({ type: 'DidSelectSegmentIndex', data: list });
};

export let juiceboxSelectLoader = async ($select) => {

    const data = await igv.xhr.loadString('resources/hicFiles.txt');
    const lines = igv.splitLines(data);

    for (let line of lines) {

        const tokens = line.split('\t');

        if (tokens.length > 1) {
            const $option = $('<option value="' + tokens[0] + '">' + tokens[1] + '</option>');
            $select.append($option);
        }

    }

};

export default JuiceboxPanel;
