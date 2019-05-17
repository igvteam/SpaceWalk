import * as THREE from "../node_modules/three/build/three.module.js";
import FatLineGeometry from "./threejs_es6/fatlines/fatLineGeometry.js";
import FatLineMaterial from "./threejs_es6/fatlines/fatLineMaterial.js";
import FatLine from "./threejs_es6/fatlines/fatLine.js";
import { sceneManager, structureManager } from "./main.js";
import { degrees, clamp, lerp } from './math.js';

let fatLineMaterial;

class Noodle {

    constructor () {
    }

    static getRenderStyle() {
        return 'render-style-noodle';
    }

    configure(structure, materialProvider, renderStyle) {

        this.dispose();

        let { material } = materialProvider;

        this.tube = this.createTube(structure, material);

        this.spline = this.createFatSpline(structure, materialProvider);

        if (renderStyle === Noodle.getRenderStyle()) {
            this.show();
        } else {
            this.hide();
        }

    }

    updateMaterialProvider (materialProvider) {

        if (undefined === this.tube || undefined === this.spline) {
            return;
        }

        // tube
        this.tube.mesh.material = materialProvider.material;

        // fat spline
        let colors = getColorListWithXYZList(materialProvider, this.spline.xyzList);
        this.spline.mesh.geometry.setColors( colors );

    }

    createTube(structure, material) {

        const knots = structure.map((obj) => {
            let [ x, y, z ] = obj.xyz;
            return new THREE.Vector3( x, y, z );
        });

        const tubularSegments = getTubularSegmentCount(structureManager.locus);
        const radialSegments = getRadialSegmentCount(structureManager.locus);

        const axis = new THREE.CatmullRomCurve3(knots);
        const geometry = new THREE.TubeBufferGeometry(axis, tubularSegments, sceneManager.ballRadius, radialSegments, false);

        const mesh = new THREE.Mesh(geometry, material);
        mesh.name = 'noodle';

        return { mesh };

    };

    createFatSpline(structure, materialProvider){

        const knots = structure.map((obj) => {
            let [ x, y, z ] = obj.xyz;
            return new THREE.Vector3( x, y, z );
        });

        const curve = new THREE.CatmullRomCurve3(knots);

        // const pointCount = 2048;
        const pointCount = getFatSplinePointCount(structureManager.locus);

        const xyzList = curve.getPoints( pointCount );

        let vertices = [];
        xyzList.forEach((xyz) => {
            const { x, y, z } = xyz;
            vertices.push(x, y, z);
        });

        let colors = getColorListWithXYZList(materialProvider, xyzList);

        let geometry = new FatLineGeometry();
        geometry.setPositions( vertices );
        geometry.setColors( colors );

        fatLineMaterial = new FatLineMaterial( { linewidth: /*2*/3, vertexColors: THREE.VertexColors } );

        let mesh = new FatLine(geometry, fatLineMaterial);
        mesh.computeLineDistances();
        mesh.scale.set( 1, 1, 1 );
        mesh.name = 'noodle_spline';

        return { mesh, xyzList };

    };

    addToScene (scene) {
        scene.add( this.tube.mesh );
        scene.add( this.spline.mesh );
    }

    renderLoopHelper () {

        if (fatLineMaterial) {
            fatLineMaterial.resolution.set(window.innerWidth, window.innerHeight);
        }

    }

    hide () {
        this.tube.mesh.visible = this.spline.mesh.visible = false;
    }

    show () {
        this.tube.mesh.visible = this.spline.mesh.visible = true;
    }

    dispose () {

        if (this.tube) {
            let { material, geometry } = this.tube.mesh;
            [ material, geometry ].forEach(item => item.dispose());
        }

        if (this.spline) {
            let { material, geometry } = this.spline.mesh;
            [ material, geometry ].forEach(item => item.dispose())
        }

    }

    getThumbnailGeometryList () {
        return [ this.tube.mesh.geometry ];
    }

    getBounds() {

        let { geometry } = this.tube.mesh;

        geometry.computeBoundingSphere();
        const { center, radius } = geometry.boundingSphere;

        geometry.computeBoundingBox();
        const { min, max } = geometry.boundingBox;

        return { min, max, center, radius }
    }

    getCameraPoseAlongAxis ({ axis, scaleFactor }) {

        const { center, radius } = this.getBounds();

        const dimen = scaleFactor * radius;

        const theta = Math.atan(radius/dimen);
        const fov = degrees( 2 * theta);

        const axes =
            {
                '-x': () => {
                    return new THREE.Vector3(-dimen, 0, 0);
                },
                '+x': () => {
                    return new THREE.Vector3(dimen, 0, 0);
                },
                '-y': () => {
                    return new THREE.Vector3(0, -dimen, 0);
                },
                '+y': () => {
                    return new THREE.Vector3(0, dimen, 0);
                },
                '-z': () => {
                    return new THREE.Vector3(0, 0, -dimen);
                },
                '+z': () => {
                    return new THREE.Vector3(0, 0, dimen);
                },
            };

        const vector = axes[ axis ]();
        let position = new THREE.Vector3();

        position.addVectors(center, vector);

        return { target:center, position, fov }
    }

}

const getRadialSegmentCount = (locus) => {

    const { genomicStart, genomicEnd } = locus;
    const genomicLengthMB = (genomicEnd - genomicStart) / 1e6;

    const [ minLog10, maxLog10 ] = [ 0.25, 2.5 ];
    let log10 = Math.log10(genomicLengthMB);
    log10 = clamp(log10, minLog10, maxLog10);

    const interpolant = (log10 - minLog10) / (maxLog10 - minLog10);

    let count = lerp(48, 4, interpolant);
    count = Math.round(count);

    return count;

};

const getTubularSegmentCount = locus => {
    return getCountMultiplier(locus) * 1024;
    // return 1024;
};

const getFatSplinePointCount = locus => {
    return getCountMultiplier(locus) * 2048;
};

const getCountMultiplier = locus => {

    const { genomicStart, genomicEnd } = locus;

    let multiplier = (genomicEnd - genomicStart) / 2e6;
    multiplier = Math.round(multiplier);

    return multiplier;
};

const getColorListWithXYZList = (materialProvider, xyzList) =>  {

    let colorList = [];

    xyzList
        .map((xyz, i, array) => {
            let interpolant = i / (array.length - 1);
            return materialProvider.colorForInterpolant(interpolant);
        })
        .forEach((rgb) => {
            const { r, g, b } = rgb;
            colorList.push(r, g, b);
        });

    return colorList;
};

const createThinSpline = (structure, colorRampMaterialProvider) => {

    const knots = structure.map((obj) => {
        let [ x, y, z ] = obj.xyz;
        return new THREE.Vector3( x, y, z );
    });

    const curve = new THREE.CatmullRomCurve3(knots);

    const howmany = 2048;
    const vertices = curve.getPoints( howmany );

    const colors = vertices.map((vertex, index) => {

        let interpolant = index / (vertices.length - 1);

        // flip direction
        interpolant = 1 - interpolant;

        return colorRampMaterialProvider.colorForInterpolant(interpolant);
    });

    const geometry = new THREE.Geometry();
    geometry.vertices = vertices;
    geometry.colors = colors;

    const material = new THREE.LineBasicMaterial( { vertexColors: THREE.VertexColors } );

    const line = new THREE.Line( geometry, material );

    sceneManager.scene.add( line );

};

export default Noodle;
