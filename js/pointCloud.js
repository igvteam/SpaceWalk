import * as THREE from "../node_modules/three/build/three.module.js";
import { degrees } from './math.js';
import Globals from "./globals.js";
import { setGeometryAttributeColorListWithColorThreeJS } from './color.js';

class PointCloud {

    constructor () {

        const materialConfig =
            {
                size: 64,
                vertexColors: THREE.VertexColors,
                map: new THREE.TextureLoader().load( "texture/dot_dugla.png" ),
                transparent: true,
                depthTest: false
            };

        this.material = new THREE.PointsMaterial( materialConfig );
        this.material.side = THREE.DoubleSide;

        const deemphasizedConfig =
            {
                size: 64,
                vertexColors: THREE.VertexColors,
                map: new THREE.TextureLoader().load( "texture/dot_dugla_translucent.png" ),
                transparent: true,
                depthTest: false
            };

        this.deemphasizedMaterial = new THREE.PointsMaterial( deemphasizedConfig );
        this.deemphasizedMaterial.side = THREE.DoubleSide;

    }

    highlight(geometryUUID) {

        if (this.meshList) {

            for (let mesh of this.meshList) {
                if (geometryUUID === mesh.geometry.uuid) {
                    mesh.material = this.material;
                    setGeometryAttributeColorListWithColorThreeJS(mesh.geometry.attributes.color.array, mesh.geometry.userData.color)
                } else {
                    mesh.material = this.deemphasizedMaterial;
                    setGeometryAttributeColorListWithColorThreeJS(mesh.geometry.attributes.color.array, mesh.geometry.userData.deemphasizedColor)
                }
            }
        }

    }

    unHighlight() {
        for (let mesh of this.meshList) {
            mesh.material = this.material;
            setGeometryAttributeColorListWithColorThreeJS(mesh.geometry.attributes.color.array, mesh.geometry.userData.color)
        }
    }

    static getRenderStyle() {
        return 'render-style-point-cloud';
    }

    configure(geometryList) {

        this.dispose();

        this.meshList = this.createPointCloud(geometryList);

        if (Globals.sceneManager.renderStyle === PointCloud.getRenderStyle()) {
            this.show();
        } else {
            this.hide();
        }

    }

    createPointCloud(geometryList) {

        return geometryList
            .map(geometry => {
                let mesh = new THREE.Points( geometry, this.material );
                mesh.name = 'point_cloud';
                return mesh;
            });

    };

    updateMaterialProvider (materialProvider) {
        // do stuff
    }

    addToScene (scene) {
        for (let mesh of this.meshList) {
            scene.add( mesh );
        }
    }

    renderLoopHelper () {

        if (this.meshList) {
            for (let mesh of this.meshList) {
                mesh.geometry.attributes.color.needsUpdate = true;
            }
        }

    }

    hide () {
        for (let mesh of this.meshList) {
            mesh.visible = false;
        }
    }

    show () {
        for (let mesh of this.meshList) {
            mesh.visible = true;
        }
    }

    dispose () {

        if (this.meshList) {
            for (let mesh of this.meshList) {
                // mesh.material.dispose();
                mesh.geometry.dispose();
            }
        }

    }

    getThumbnailGeometryList () {
        return undefined;
    }

    getBounds() {
        return Globals.pointCloudManager.getBounds();
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

export default PointCloud;
