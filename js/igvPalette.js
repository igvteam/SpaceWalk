import igv from '../vendor/igv.esm.js'
import { makeDraggable } from "./draggable.js";
import { globalEventBus } from "./eventBus.js";

class IGVPalette {
    constructor ({ container, palette }) {

        layout(container, palette);

        // makeDraggable(palette, palette);

        $(window).on('resize.trace3d.trace3d_igv_palette', () => { this.onWindowResize(container, palette) });

        $(palette).on('mouseenter.trace3d.trace3d_igv_palette', (event) => {
            event.stopPropagation();
            globalEventBus.post({ type: "DidEnterGUI" });
        });

        $(palette).on('mouseleave.trace3d.trace3d_igv_palette', (event) => {
            event.stopPropagation();
            globalEventBus.post({ type: "DidLeaveGUI" });
        });

    }

    async createBrowser($container) {

        const config =
            {
                genome: 'hg19',
                locus: 'all',
                showTrackLabels: false,
                showIdeogram: false,
                showNavigation: false
            };

        return igv
            .createBrowser($container, config)
            .then((browser) => {
                $(browser.trackContainerDiv).off();
                const noop = () => {};
                browser.cancelTrackPan = browser.startTrackDrag = browser.updateTrackDrag = browser.endTrackDrag = noop;
            });
    }

    async loadTrack(url) {
        return igv.browser.loadTrack({ url });
    }

    // Each segment "ball" is point in genomic space. Find features (genomic range) that overlap that point.
    async buildFeatureSegmentIndices({ track, chr, genomicStart, stepSize }) {

        this.featureSegmentIndices = new Set();

        const features = await track.getFeatures(chr);

        for (let feature of features) {

            const index = Math.floor((feature.start - genomicStart) / stepSize);

            const one_based = 1 + index;
            if(index >= 0) {
                this.featureSegmentIndices.add(one_based);
            }
        }

    }


    configure({ chr, start, end }) {
        igv.browser.goto(chr, start, end);
    }

    onWindowResize(container, palette) {
        layout(container, palette);
    };

}

let layout = (container, element) => {

    // const { left, top, right, bottom, x, y, width, height } = container.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();

    const left = (containerRect.width - elementRect.width)/2;
    const top = containerRect.height - (1.5 * elementRect.height);
    $(element).offset( { left, top } );

};

export default IGVPalette;
