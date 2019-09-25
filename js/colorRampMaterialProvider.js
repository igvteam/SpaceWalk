import * as THREE from "../node_modules/three/build/three.module.js";
import { fitToContainer, getMouseXY } from "./utils.js";
import { rgb255, rgb255String } from "./color.js";
import { defaultColormapName } from "./colorMapManager.js";
import { globals } from "./app.js";
import EnsembleManager from "./ensembleManager.js";

const alpha_visible = `rgb(${255},${255},${255})`;

let rgbTexture;
let alphaTexture;
class ColorRampMaterialProvider {

    constructor({ $canvasContainer, highlightColor }) {

        let canvas;

        // highlight canvas
        canvas = $canvasContainer.find('#spacewalk_color_ramp_canvas_highlight').get(0);
        fitToContainer(canvas);
        this.highlight_ctx = canvas.getContext('2d');

        // ramp rgb canvas
        canvas = $canvasContainer.find('#spacewalk_color_ramp_canvas_rgb').get(0);
        fitToContainer(canvas);
        this.rgb_ctx = canvas.getContext('2d');

        // alpha canvas indicating highlighted region of rgb canvas
        canvas = $canvasContainer.find('#spacewalk_color_ramp_canvas_alpha').get(0);
        fitToContainer(canvas);
        this.alphamap_ctx = canvas.getContext('2d');

        // rgb
        rgbTexture = new THREE.CanvasTexture(this.rgb_ctx.canvas);
        rgbTexture.center.set(0.5, 0.5);
        rgbTexture.rotation = -Math.PI/2.0;
        rgbTexture.minFilter = rgbTexture.magFilter = THREE.NearestFilter;

        // alpha
        alphaTexture = new THREE.CanvasTexture(this.alphamap_ctx.canvas);
        alphaTexture.center.set(0.5, 0.5);
        alphaTexture.rotation = -Math.PI/2.0;
        alphaTexture.minFilter = alphaTexture.magFilter = THREE.NearestFilter;

        let material = new THREE.MeshPhongMaterial({ map: rgbTexture, alphaMap: alphaTexture });
        material.alphaTest = 0.5;
        material.side = THREE.DoubleSide;
        material.transparent = true;

        this.material = material;

        const namespace = 'color-ramp-material-provider';

        $canvasContainer.on(('mousemove.' + namespace), (event) => {
            event.stopPropagation();
            this.onCanvasMouseMove(canvas, event);
        });

        $canvasContainer.on(('mouseenter.' + namespace), (event) => {
            event.stopPropagation();
        });

        $canvasContainer.on(('mouseleave.' + namespace), (event) => {
            event.stopPropagation();
            this.repaint();
        });

        // soak up misc events
        let eventSink = e => { e.stopPropagation(); };
        $canvasContainer.on(('mouseup.' + namespace), eventSink);
        $canvasContainer.on(('mousedown.' + namespace), eventSink);
        $canvasContainer.on(('click.' + namespace), eventSink);

        const { r, g, b } = highlightColor;
        this.highlightColor = rgb255String( rgb255(r*255, g*255, b*255) );


        globals.eventBus.subscribe("DidLeaveGUI", this);
        globals.eventBus.subscribe("PickerDidLeaveObject", this);
        globals.eventBus.subscribe("PickerDidHitObject", this);
        globals.eventBus.subscribe("DidSelectSegmentID", this);
        globals.eventBus.subscribe('DidLoadEnsembleFile', this);
    }

    receiveEvent({ type, data }) {

        if ("PickerDidHitObject" === type) {

            const objectUUID = data;
            if (globals.ballAndStick.meshUUID_ColorRampInterpolantWindow_Dictionary[ objectUUID ]) {
                this.highlightWithInterpolantWindowList([ globals.ballAndStick.meshUUID_ColorRampInterpolantWindow_Dictionary[objectUUID] ])
            }

        } else if ("PickerDidLeaveObject" === type) {
            this.repaint()
        } else if ("DidSelectSegmentID" === type) {

            const { interpolantList } = data;
            const interpolantWindowList = EnsembleManager.getInterpolantWindowList({ trace: globals.ensembleManager.currentTrace, interpolantList });

            if (interpolantWindowList) {
                this.highlightWithInterpolantWindowList(interpolantWindowList.map(({ colorRampInterpolantWindow }) => { return colorRampInterpolantWindow }));
            }

        } else if ("DidLeaveGUI" === type || 'DidLoadEnsembleFile' === type) {
            this.repaint()
        }
    }

    onCanvasMouseMove(canvas, event) {

        if (undefined === globals.ensembleManager.currentTrace) {
            return;
        }

        let { yNormalized } = getMouseXY(canvas, event);
        const interpolantList = [ 1.0 - yNormalized ];

        const interpolantWindowList = EnsembleManager.getInterpolantWindowList({ trace: globals.ensembleManager.currentTrace, interpolantList });

        if (interpolantWindowList) {
            this.highlightWithInterpolantWindowList(interpolantWindowList.map(({ colorRampInterpolantWindow }) => { return colorRampInterpolantWindow }));
            globals.eventBus.post({ type: 'ColorRampMaterialProviderCanvasDidMouseMove', data: { interpolantList } });
        }

    };

    highlightWithInterpolantWindowList(interpolantWindowList) {

        if (interpolantWindowList) {
            this.paintWithInterpolantWindowList(interpolantWindowList);
        }

    }

    paintWithInterpolantWindowList(interpolantWindowList) {

        if (undefined === globals.ensembleManager.currentTrace) {
            return;
        }

        this.repaint();

        const { offsetHeight: height, offsetWidth: width } = this.rgb_ctx.canvas;

        // clear highlight canvas
        this.highlight_ctx.clearRect(0, 0, width, height);

        // paint alpha map opacque
        this.alphamap_ctx.fillStyle = alpha_visible;
        this.alphamap_ctx.fillRect(0, 0, width, height);

        if (interpolantWindowList) {

            // set highlight color
            this.highlight_ctx.fillStyle = this.highlightColor;

            // paint alpha map transparent
            this.alphamap_ctx.clearRect(0, 0, width, height);

            // set opaque color
            this.alphamap_ctx.fillStyle = alpha_visible;

            for (let interpolantWindow of interpolantWindowList) {

                const { start, end } = interpolantWindow;
                const h = Math.round((end - start) * height);
                const y = Math.round(start * height);

                const yy = height - (h + y);

                this.highlight_ctx.fillRect(0, yy, width, h);
                this.alphamap_ctx.fillRect(0, yy, width, h);

            }

        }

    }

    repaint(){

        if (undefined === globals.ensembleManager.currentTrace) {
            return;
        }

        const { offsetHeight: height, offsetWidth: width } = this.rgb_ctx.canvas;

        const colorRampInterpolantWindows = Object.values(globals.ensembleManager.currentTrace).map(({ colorRampInterpolantWindow }) => colorRampInterpolantWindow);

        for (let { interpolant, start, end, sizeBP } of colorRampInterpolantWindows) {

            this.rgb_ctx.fillStyle = globals.colorMapManager.retrieveRGB255String(defaultColormapName, interpolant);

            const h = Math.ceil((end - start) * height);
            const y = Math.round(start * (height));

            const yy = height - (h + y);

            this.rgb_ctx.fillRect(0, yy, width, h);
        }

        // clear highlight canvas
        this.highlight_ctx.clearRect(0, 0, width, height);

        // paint alpha map opacque
        this.alphamap_ctx.fillStyle = alpha_visible;
        this.alphamap_ctx.fillRect(0, 0, width, height);

    }

    colorForInterpolant(interpolant) {
        return globals.colorMapManager.retrieveRGBThreeJS(defaultColormapName, interpolant)
    }

    renderLoopHelper () {

        if (rgbTexture) {
            rgbTexture.needsUpdate = true;
        }

        if (alphaTexture) {
            alphaTexture.needsUpdate = true;
        }

    }

    show() {
        $(this.highlight_ctx.canvas).show();
        $(this.rgb_ctx.canvas).show();
    }

    hide() {
        $(this.highlight_ctx.canvas).hide();
        $(this.rgb_ctx.canvas).hide();
    }
}

export default ColorRampMaterialProvider;
