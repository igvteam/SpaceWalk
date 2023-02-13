import * as THREE from "three";
import SpacewalkEventBus from './spacewalkEventBus.js'
import { ensembleManager, sceneManager } from "./app.js";
import {StringUtils} from "igv-utils";

const pointSize = 128;

class PointCloud {

    constructor ({ pickHighlighter, deemphasizedColor }) {

        this.pickHighlighter = pickHighlighter;
        this.deemphasizedColor = deemphasizedColor;

        const materialConfig =
            {
                size: pointSize,
                // vertexColors: THREE.VertexColors,
                vertexColors: true,
                map: new THREE.TextureLoader().load( "texture/dot.png" ),
                sizeAttenuation: true,
                alphaTest: 0.5,
                transparent: true,
                depthTest: true
            };

        this.material = new THREE.PointsMaterial( materialConfig );
        this.material.side = THREE.DoubleSide;

        const deemphasizedConfig =
            {
                size: pointSize,
                // vertexColors: THREE.VertexColors,
                vertexColors: true,
                map: new THREE.TextureLoader().load( "texture/dot.png" ),
                sizeAttenuation: true,
                alphaTest: 0.5,
                transparent: true,
                depthTest: true
            };

        this.deemphasizedMaterial = new THREE.PointsMaterial( deemphasizedConfig );
        this.deemphasizedMaterial.side = THREE.DoubleSide;

        SpacewalkEventBus.globalBus.subscribe("DidUpdateGenomicInterpolant", this);
        SpacewalkEventBus.globalBus.subscribe("DidLeaveGenomicNavigator", this);
    }

    receiveEvent({ type, data }) {

        if (this.meshList && "DidUpdateGenomicInterpolant" === type && PointCloud.getRenderStyle() === sceneManager.renderStyle) {

            const { interpolantList } = data;

            const interpolantWindowList = ensembleManager.getGenomicInterpolantWindowList(interpolantList)

            if (interpolantWindowList) {
                const objectList = interpolantWindowList.map(({ index }) => this.meshList[ index ]);
                this.pickHighlighter.configureObjectList(objectList);

            }

        } else if ("DidLeaveGenomicNavigator" === type) {
            this.pickHighlighter.unhighlight()
        }

    }

    configure(trace) {

        //  const sum = array.reduce((total, item) => total + item);
        const list = trace.map(({ xyz }) => xyz.length / 3)
        for (const length of list) {
            console.log(`Point cloud cluster(${ list.indexOf(length) }) ${ StringUtils.numberFormatter(length)} points`)
        }

        const sum = list.reduce((total, item) => total + item)

        const str = `Point cloud total ${ StringUtils.numberFormatter(sum)} points`
        console.time(str)

        this.meshList = trace
            .map(({ xyz, rgb, color, drawUsage }) => {

                const geometry = new THREE.BufferGeometry()

                const positionAttribute = new THREE.Float32BufferAttribute(xyz, 3 )
                geometry.setAttribute('position', positionAttribute)

                const colorAttribute = new THREE.Float32BufferAttribute(rgb, 3)
                colorAttribute.setUsage(drawUsage)
                geometry.setAttribute('color', colorAttribute )

                geometry.userData.color = color

                const mesh = new THREE.Points( geometry, this.material )
                mesh.name = 'point_cloud'
                return mesh
            })

        sceneManager.renderStyle === PointCloud.getRenderStyle() ? this.show() : this.hide()

        console.timeEnd(str)

    }

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
        if (this.meshList) {
            for (let mesh of this.meshList) {
                mesh.visible = false;
            }
        }
    }

    show () {
        if (this.meshList) {
            for (let mesh of this.meshList) {
                mesh.visible = true;
            }
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

    static getRenderStyle() {
        return 'render-style-point-cloud';
    }
}

const setGeometryColorAttribute = (colorList, colorThreeJS) => {

    for (let c = 0; c < colorList.length; c++) {
        colorThreeJS.toArray(colorList, c * 3);
    }

};

export { setGeometryColorAttribute }
export default PointCloud;
