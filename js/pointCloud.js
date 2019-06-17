import * as THREE from "../node_modules/three/build/three.module.js";
import { getBoundsWithPointCloud } from './pointCloudManager.js';
import { degrees } from './math.js';
import { appleCrayonColorThreeJS } from "./color.js";
import Globals from "./globals.js";

class PointCloud {

    constructor () {
    }

    static getRenderStyle() {
        return 'render-style-point-cloud';
    }

    configure(geometry) {

        this.dispose();

        this.mesh = createPointCloud(geometry);

        if (Globals.sceneManager.renderStyle === PointCloud.getRenderStyle()) {
            this.show();
        } else {
            this.hide();
        }

    }

    updateMaterialProvider (materialProvider) {
        // do stuff
    }

    addToScene (scene) {
        scene.add( this.mesh );
    }

    renderLoopHelper () {
        // do stuff
    }

    hide () {
        this.mesh.visible = false;
    }

    show () {
        this.mesh.visible = true;
    }

    dispose () {

        if (this.mesh) {
            this.mesh.material.dispose();
            this.mesh.geometry.dispose();
        }

    }

    getThumbnailGeometryList () {
        return undefined;
    }

    getBounds() {
        const { center, radius } = this.mesh.geometry.boundingSphere;
        const { min, max } = this.mesh.geometry.boundingBox;
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

const createPointCloud = geometry => {

    // const pointsMaterialConfig =
    //     {
    //         size: 32,
    //         vertexColors: THREE.VertexColors
    //     };

    const map = new THREE.TextureLoader().load( "texture/dot_dugla.png" );
    const pointsMaterialConfig =
        {
            size: 64,
            vertexColors: THREE.VertexColors,
            map,
            transparent: true,
            depthTest: false,
            side: THREE.DoubleSide
        };

    let material = new THREE.PointsMaterial( pointsMaterialConfig );

    material.side = THREE.DoubleSide;

    let mesh = new THREE.Points( geometry, material );
    mesh.name = 'point_cloud';
    return mesh;

};

export default PointCloud;
