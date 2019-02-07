import * as THREE from './threejs_es6/three.module.js';

import LineGeometry from './threejs_es6/LineGeometry.js';
import LineMaterial from './threejs_es6/LineMaterial.js';
import Line2        from './threejs_es6/Line2.js';

import OrbitControls from './threejs_es6/orbit-controls-es6.js';

import { appleCrayonNames, appleCrayonColorHexValue, appleCrayonColorThreeJS } from './ei_color.js';
import SequenceManager from './sequenceManager.js';

import BedTrack from './igv/bedTrack.js'
import CubicMapManager from "./cubicMapManager.js";

let scene;
let renderer;
let camera;
let orbitControl;
let sequenceManager;
let diffuseCubicMapManager;

let sphereGeometry;
let showNormalsMaterial;
let showSTMaterial;

const genomicChr = "chr21"
const genomicStart = 28000071
const genomicStep = 30000

// Compute the segment indexes containing a feature.  Quick hack, this is not the right place to do this but
// I don't know how to change sphere color after its placed in scene
let featureSegmentIndexes = new Set()
let initDemoTrack = async (path) => {
    const bedTrack = new BedTrack(path)
    const bedFeatures = await bedTrack.getFeatures(genomicChr)
    for (let feature of bedFeatures) {
        // Segment index (first sgement is 1)
        const idx = Math.floor((feature.start - genomicStart) / genomicStep) + 1
        if(idx >= 0) {
            console.log(idx + "  " + (genomicStart + (idx-1)*( genomicStep)) + "-" + (genomicStart + idx*genomicStep))
            featureSegmentIndexes.add(idx)
        }
    }
}

let main = (threejs_canvas) => {

    renderer = new THREE.WebGLRenderer({ canvas: threejs_canvas, antialias: true });
    renderer.setClearColor(appleCrayonColorHexValue('iron'));
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const [ near, far, fov ] = [ 5e1, 1e4, 35 ];
    camera = new THREE.PerspectiveCamera(fov, window.innerWidth / window.innerHeight, near, far);
    orbitControl = new OrbitControls(camera, renderer.domElement);

    scene = new THREE.Scene();


    const specularCubicMapMaterialConfig =
        {
            // textureRoot: 'texture/cubic/specular/blouberg_sunrise/',
            textureRoot: 'texture/cubic/openexr_to_threejs_format/',
            suffix: '.png',
            isSpecularMap: true
        };

    const specularCubicMapManager = new CubicMapManager(specularCubicMapMaterialConfig);

    scene.background = specularCubicMapManager.cubicTexture;
    // scene.background = appleCrayonColorThreeJS('iron');

    const diffuseCubicMapMaterialConfig =
        {
            // textureRoot: 'texture/cubic/diffuse/blouberg_sunrise/',
            textureRoot: 'texture/cubic/openexr_to_threejs_format/',
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

    setup(scene, renderer, camera, orbitControl);
};

let setup = async (scene, renderer, camera, orbitControl) => {

    const path = 'data/csv/IMR90_chr21-28-30Mb.csv';
    sequenceManager = new SequenceManager();
    await sequenceManager.loadSequence({ path });

    //initDemoTrack('data/tracks/IMR-90_CTCF_27-31.bed')
    initDemoTrack('data/tracks/IMR-90_RAD21_27-31.bed')

    const currentKey = '2489';
    let currentSegment = sequenceManager.segmentWithName(currentKey)

    const [ targetX, targetY, targetZ ] = currentSegment.target;
    const target = new THREE.Vector3(targetX, targetY, targetZ);

    const [ extentX, extentY, extentZ ] = currentSegment.extent;

    const [ cameraPositionX, cameraPositionY, cameraPositionZ ] = currentSegment.cameraPosition;

    camera.position.set(cameraPositionX, cameraPositionY, cameraPositionZ);
    camera.lookAt( target );

    let dimen = 0.5 * Math.max(extentX, extentY, extentZ);
    dimen = Math.sqrt(dimen*dimen + (2 * dimen*dimen));
    camera.near = 0.05 * dimen;
    camera.far  = 4.00 * dimen;

    orbitControl.screenSpacePanning = false;
    orbitControl.target = target;
    orbitControl.update();
    orbitControl.addEventListener("change", () => renderer.render(scene, camera));

    const groundPlane = new THREE.GridHelper(2 * Math.max(extentX, extentY, extentZ), 16, appleCrayonColorHexValue('steel'), appleCrayonColorHexValue('steel'));
    groundPlane.position.set(targetX, targetY, targetZ);
    scene.add( groundPlane );


    const sphereRadius = 24;
    sphereGeometry = new THREE.SphereGeometry(sphereRadius, 32, 16);
    for(let seg of currentSegment) {

        const [x, y, z] = seg.xyz;
        const doSkip = isNaN(x) || isNaN(y) || isNaN(z);

        if (!doSkip) {
            // sphereForSegment(seg, sphereGeometry, showSTMaterial, x, y, z, scene);
            sphereForSegment(seg, sphereGeometry, diffuseCubicMapManager.material, x, y, z, scene);
        }

    }

    // cylinders
    const flatColorMaterial = new THREE.MeshBasicMaterial();
    flatColorMaterial.color = appleCrayonColorThreeJS('aluminum');

    for (let i = 0, j = 1; j < currentSegment.length; ++i, ++j) {

        const [ x0, y0, z0 ] = currentSegment[i].xyz;
        const [ x1, y1, z1 ] = currentSegment[j].xyz;
        const doSkip = isNaN(x0) || isNaN(x1);

        if (!doSkip) {
            const axis = new THREE.CatmullRomCurve3([ new THREE.Vector3( x0, y0, z0 ), new THREE.Vector3( x1, y1, z1 ) ]);
            const geometry = new THREE.TubeGeometry(axis, 8, sphereRadius/4, 16, false);
            // scene.add(new THREE.Mesh(geometry, showSTMaterial));
            scene.add(new THREE.Mesh(geometry, diffuseCubicMapManager.material));
        }

    }

    window.addEventListener( 'resize', onWindowResize, false );

    renderer.render( scene, camera );

};

let onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.render( scene, camera );
};

let sphereForSegment = (segment, geometry, material, x, y, z, scene) => {

    const flatColorMaterial = new THREE.MeshBasicMaterial();

    let index

    // advance past dark crayon color names.
    // index += 24;
    // index %= appleCrayonNames.length;
    // const name = appleCrayonNames[ index ];
    // flatColorMaterial.color = new THREE.Color( appleCrayonColor(name) );

    // Transition from blue -> red over 60 steps
    index = segment.segmentIndex;
    const step = index / 60
    const red = Math.floor(Math.min(255, step * 255))
    const green = 0
    const blue = 255 - red
    flatColorMaterial.color = new THREE.Color(featureSegmentIndexes.has(segment.segmentIndex) ? 'rgb(0, 255, 0)': `rgb(${red},${green},${blue})`);

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(x, y, z);
    scene.add(mesh);
};

let lineWithLerpedColorBetweenEndPoints = (a, b, aColor, bColor, scene) => {

    const [ x0, y0, z0 ] = a;
    const [ x1, y1, z1 ] = b;
    if (isNaN(x0) || isNaN(x1)) {
        return;
    }

    let positions = [];
    positions.push( a[0], a[1], a[2] );
    positions.push( b[0], b[1], b[2] );

    let colors = [];
    colors.push( aColor.r, aColor.g, aColor.b );
    colors.push( bColor.r, bColor.g, bColor.b );

    var lineGeometry = new LineGeometry();
    lineGeometry.setPositions( positions );
    lineGeometry.setColors( colors );

    const lineMaterial = new LineMaterial( { color: appleCrayonColorHexValue('snow'), linewidth: 5, vertexColors: THREE.VertexColors, dashed: false } );

    let line = new Line2( lineGeometry, lineMaterial );
    line.computeLineDistances();
    line.scale.set( 1, 1, 1 );
    scene.add( line );

};

export { main };
