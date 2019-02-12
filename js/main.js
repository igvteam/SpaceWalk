import * as THREE from './threejs_es6/three.module.js';

import LineGeometry from './threejs_es6/LineGeometry.js';
import LineMaterial from './threejs_es6/LineMaterial.js';
import Line2        from './threejs_es6/Line2.js';

import { appleCrayonColorHexValue, appleCrayonColorThreeJS } from './ei_color.js';
import SegmentManager from './segmentManager.js';
import CubicMapManager from "./cubicMapManager.js";
import EventBus from './eventBus.js';
import SceneManager from './sceneManager.js';
import OrbitalCamera from "./orbitalCamera.js";

import BedTrack from './igv/bedTrack.js';
import TrackManager from './trackManager.js';

let scene;
let renderer;
let orbitalCamera;
let segmentManager;
let trackManager;
let diffuseCubicMapManager;
let specularCubicMapManager;

let sphereGeometry;
let showNormalsMaterial;
let showSTMaterial;

const cylinderMaterial = new THREE.MeshBasicMaterial({ color: appleCrayonColorThreeJS('nickel') });

let globalEventBus = new EventBus();
let sceneManager;
let main = (threejs_canvas_container) => {

    sceneManager = new SceneManager();


    // scene
    scene = new THREE.Scene();

    const specularCubicMapMaterialConfig =
        {
            // textureRoot: 'texture/cubic/specular/aerodynamics_workshop/',
            textureRoot: 'texture/cubic/diagnostic/threejs_format/',
            suffix: '.png',
            isSpecularMap: true
        };

    specularCubicMapManager = new CubicMapManager(specularCubicMapMaterialConfig);

    // scene.background = specularCubicMapManager.cubicTexture;
    scene.background = appleCrayonColorThreeJS('mercury');


    // renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    renderer.setClearColor(appleCrayonColorHexValue('iron'));

    // insert rendering canvas in DOM
    threejs_canvas_container.appendChild( renderer.domElement );



    // orbital camera
    const [ near, far, fov ] = [ 5e1, 1e4, 35 ];
    const aspectRatio = window.innerWidth / window.innerHeight;
    const domElement = renderer.domElement;
    orbitalCamera = new OrbitalCamera({ scene, renderer, fov, near, far, aspectRatio, domElement });



    const diffuseCubicMapMaterialConfig =
        {
            // textureRoot: 'texture/cubic/diffuse/aerodynamics_workshop/',
            textureRoot: 'texture/cubic/diagnostic/threejs_format/',
            suffix: '.png',
            vertexShaderName: 'diffuse_cube_vert',
            fragmentShaderName: 'diffuse_cube_frag',
            isSpecularMap: false
        };

    diffuseCubicMapManager = new CubicMapManager(diffuseCubicMapMaterialConfig);


    showNormalsMaterial = new THREE.MeshNormalMaterial();


    const showSTMaterialConfig =
        {
            uniforms: {},
            vertexShader: document.getElementById( 'show_st_vert' ).textContent,
            fragmentShader: document.getElementById( 'show_st_frag' ).textContent
        };

    showSTMaterial = new THREE.ShaderMaterial(showSTMaterialConfig );


    setup(scene, renderer);
};

let setup = async (scene, renderer) => {

    segmentManager = new SegmentManager();

    const path = 'data/csv/IMR90_chr21-28-30Mb.csv';
    await segmentManager.loadSequence({ path });

    // trackManager = new TrackManager({ bedTrack: new BedTrack('data/tracks/IMR-90_CTCF_27-31.bed') });
    trackManager = new TrackManager({ track: new BedTrack('data/tracks/IMR-90_RAD21_27-31.bed') });

    await trackManager.buildFeatureSegmentIndices({chr: "chr21", start: 28000071, step: 30000});

    const currentKey = '1';
    let currentSegment = segmentManager.segmentWithName(currentKey);

    const [ targetX, targetY, targetZ ] = currentSegment.centroid;
    const [ extentX, extentY, extentZ ] = currentSegment.extent;

    orbitalCamera.setPosition(currentSegment.cameraPosition);
    orbitalCamera.setLookAt(new THREE.Vector3(targetX, targetY, targetZ));

    let dimen = 0.5 * Math.max(extentX, extentY, extentZ);
    dimen = Math.sqrt(dimen*dimen + (2 * dimen*dimen));

    orbitalCamera.setNearFar([ 1e-1 * dimen, 32 * dimen ]);

    const groundPlane = new THREE.GridHelper(2 * Math.max(extentX, extentY, extentZ), 16, appleCrayonColorHexValue('steel'), appleCrayonColorHexValue('steel'));
    groundPlane.position.set(targetX, targetY, targetZ);
    scene.add( groundPlane );


    // ball
    const sphereRadius = 24;
    sphereGeometry = new THREE.SphereGeometry(sphereRadius, 32, 16);
    for(let seg of currentSegment) {

        const [x, y, z] = seg.xyz;
        const doSkip = isNaN(x) || isNaN(y) || isNaN(z);

        if (!doSkip) {

            const material = new THREE.MeshBasicMaterial({ color: trackManager.colorForFeatureSegmentIndex({ index: seg.segmentIndex, listLength: currentSegment.length }) });
            // const material = diffuseCubicMapManager.material;

            const mesh = new THREE.Mesh(sphereGeometry, material);
            mesh.position.set(x, y, z);

            scene.add(mesh);

        }

    }

    // stick
    for (let i = 0, j = 1; j < currentSegment.length; ++i, ++j) {

        const [ x0, y0, z0 ] = currentSegment[i].xyz;
        const [ x1, y1, z1 ] = currentSegment[j].xyz;
        const doSkip = isNaN(x0) || isNaN(x1);

        if (!doSkip) {
            const axis = new THREE.CatmullRomCurve3([ new THREE.Vector3( x0, y0, z0 ), new THREE.Vector3( x1, y1, z1 ) ]);
            const geometry = new THREE.TubeGeometry(axis, 8, sphereRadius/4, 16, false);
            scene.add(new THREE.Mesh(geometry, cylinderMaterial/*diffuseCubicMapManager.material*/));
        }

    }

    window.addEventListener( 'resize', onWindowResize, false );

    animate();

};

let animate = () => {
    requestAnimationFrame( animate );
    renderer.render(scene, orbitalCamera.camera)
};

let onWindowResize = () => {
    orbitalCamera.camera.aspect = window.innerWidth / window.innerHeight;
    orbitalCamera.camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
};

export { main, globalEventBus };
