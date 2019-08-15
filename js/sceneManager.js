import * as THREE from "../node_modules/three/build/three.module.js";
import Globals from './globals.js';
import CameraLightingRig from './cameraLightingRig.js';
import Picker from "./picker.js";
import PickHighlighter from "./pickHighlighter.js";
import BallAndStick from "./ballAndStick.js";
import GroundPlane, { groundPlaneConfigurator } from './groundPlane.js';
import Gnomon, { gnomonConfigurator } from './gnomon.js';
import { guiManager, colorRampPanel } from './gui.js';
import { getMouseXY } from "./utils.js";
import { appleCrayonColorHexValue, appleCrayonColorThreeJS } from "./color.js";
import { clamp } from "./math.js";

const disposableSet = new Set([ 'gnomon', 'groundplane', 'point_cloud_convex_hull', 'point_cloud', 'noodle', 'ball' , 'stick' , 'noodle_spline' ]);
class SceneManager {

    constructor({ container, scene, stickMaterial, background, renderer, cameraLightingRig, picker, materialProvider, renderStyle }) {

        this.stickMaterial = stickMaterial;

        this.background = background;
        // this.background = specularCubicTexture;

        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        // insert rendering canvas in DOM
        container.appendChild(renderer.domElement);

        this.renderer = renderer;

        this.picker = picker;

        this.materialProvider = materialProvider;

        this.renderStyle = renderStyle;

        // stub configuration
        this.scene = scene;
        this.scene.background = this.background;

        this.cameraLightingRig = cameraLightingRig;
        this.cameraLightingRig.addToScene(this.scene);

        $(window).on('resize.spacewalk.scenemanager', () => { this.onWindowResize() });

        $(container).on('mousemove.spacewalk.picker', (event) => {
            this.onContainerMouseMove(event)
        });

        Globals.eventBus.subscribe("DidSelectSegmentID", this);
    }

    receiveEvent({ type, data }) {

        if ("DidSelectSegmentID" === type && BallAndStick.getRenderStyle() === this.renderStyle) {

            let objects = [];
            data.segmentIDList.forEach(segmentID => {
                const key = segmentID.toString();
                if (Globals.ballAndStick.segmentObjectDictionary[ key ]) {
                    let { object } = Globals.ballAndStick.segmentObjectDictionary[ key ];
                    objects.push(object);
                }
            });

            if (objects.length > 0) {
                this.picker.pickHighlighter.configureObjects(objects);
            }

        }
    }

    configure({ scene, min, max, boundingDiameter, cameraPosition, centroid, fov }) {

        // Scene
        this.scene = scene;
        this.scene.background = this.background;

        // Camera Lighting Rig
        this.cameraLightingRig.configure({ fov, position: cameraPosition, centroid, boundingDiameter });
        this.cameraLightingRig.addToScene(this.scene);

        // Groundplane
        if (this.groundPlane) {
            this.groundPlane.dispose();
        }

        const position = new THREE.Vector3(centroid.x, min.y, centroid.z);
        this.groundPlane = new GroundPlane(groundPlaneConfigurator(position, boundingDiameter));
        this.scene.add( this.groundPlane );

        // Gnomon
        if (this.gnomon) {
            this.gnomon.dispose();
        }

        this.gnomon = new Gnomon(gnomonConfigurator(min, max));
        this.gnomon.addToScene(this.scene);
    }

    ballRadius() {
        return ballRadiusTable[ ballRadiusTableCounter ];
    }

    updateBallRadius(increment) {
        ballRadiusTableCounter = clamp(ballRadiusTableCounter + increment, 0, ballRadiusTableLength - 1);
        Globals.ballAndStick.updateRadius(this.ballRadius());
    }

    onWindowResize() {

        this.renderer.setSize(window.innerWidth, window.innerHeight);

        this.cameraLightingRig.camera.aspect = window.innerWidth/window.innerHeight;
        this.cameraLightingRig.camera.updateProjectionMatrix();
    };

    onContainerMouseMove(event){

        if (this.cameraLightingRig && this.cameraLightingRig.camera && this.picker.isEnabled) {

            const xy = getMouseXY(this.renderer.domElement, event);

            const x =  ( xy.x / this.renderer.domElement.clientWidth  ) * 2 - 1;
            const y = -( xy.y / this.renderer.domElement.clientHeight ) * 2 + 1;

            this.picker.intersect({ x, y, scene: this.scene, camera: this.cameraLightingRig.camera, doTrackObject: true });

        }
    };

    dispose() {
        if (this.scene) {

            let disposable = this.scene.children.filter(child => {
                // return 'noodle' === child.name || 'ball' === child.name || 'stick' === child.name || 'noodle_spline' === child.name
                return disposableSet.has(child.name);
            });

            disposable.forEach(d => this.scene.remove(d));

            this.scene.dispose();
            delete this.scene;
        }
    }

    render () {

        if (this.scene && this.cameraLightingRig) {

            Globals.pointCloud.renderLoopHelper();

            Globals.noodle.renderLoopHelper();

            Globals.ballAndStick.renderLoopHelper();

            Globals.dataValueMaterialProvider.renderLoopHelper();

            this.materialProvider.renderLoopHelper();

            this.cameraLightingRig.renderLoopHelper();

            this.renderer.render(this.scene, this.cameraLightingRig.camera);

        }

    }

}

const maxBallRadius = 64;
const ballRadiusTableLength = 17;
let ballRadiusTableCounter = 8;
const ballRadiusTable = ((radius) => {

    let list = [];
    for (let r = 0; r < ballRadiusTableLength; r++) {
        const interpolant = (1 + r)/ballRadiusTableLength;
        list.push(interpolant * radius);
    }
    return list;
})(maxBallRadius);

export const sceneManagerConfigurator = ({ container, highlightColor }) => {

    // const stickMaterial = showSMaterial;
    // const stickMaterial = new THREE.MeshBasicMaterial({ color: appleCrayonColorThreeJS('aluminum') });
    const stickMaterial = new THREE.MeshPhongMaterial({ color: appleCrayonColorThreeJS('aluminum') });
    stickMaterial.side = THREE.DoubleSide;

    const renderer = new THREE.WebGLRenderer({ antialias: true });

    const hemisphereLight = new THREE.HemisphereLight( appleCrayonColorHexValue('snow'), appleCrayonColorHexValue('nickel'), (1) );

    const [ fov, near, far, domElement, aspectRatio ] = [ 35, 1e2, 3e3, renderer.domElement, (window.innerWidth/window.innerHeight) ];
    const cameraLightingRig = new CameraLightingRig({ fov, near, far, domElement, aspectRatio, hemisphereLight });



    // Nice numbers
    const position = new THREE.Vector3(134820, 55968, 5715);
    const centroid = new THREE.Vector3(133394, 54542, 4288);
    cameraLightingRig.setPose({ position, newTarget: centroid });

    // const background = appleCrayonColorThreeJS('nickel');
    const background = new THREE.TextureLoader().load( 'texture/scene-background-grey-0.png' );

    const picker = new Picker( { raycaster: new THREE.Raycaster(), pickHighlighter: new PickHighlighter(highlightColor) } );

    return {
        container,
        scene: new THREE.Scene(),
        stickMaterial,
        background,
        renderer,
        cameraLightingRig,
        picker,
        materialProvider: Globals.traceColorRampMaterialProvider,
        renderStyle: guiManager.getRenderingStyle()
    };

};

export default SceneManager;
