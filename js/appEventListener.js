import * as THREE from "../node_modules/three/build/three.module.js";
import Globals from './globals.js';
import PointCloud from './pointCloud.js';
import Noodle from "./noodle.js";
import BallAndStick from "./ballAndStick.js";
import { contactFrequencyMapPanel, distanceMapPanel, guiManager, thumbnailPanel, traceSelectPanel } from './gui.js';
import { getTraceDistanceCanvas } from "./distanceMapPanel.js";
import { getTraceContactFrequencyCanvas } from "./contactFrequencyMapPanel.js";

export const appEventListener =
    {
        receiveEvent: ({ type, data }) => {

            if ('RenderStyleDidChange' === type) {

                if (data === Noodle.getRenderStyle()) {
                    Globals.sceneManager.renderStyle = Noodle.getRenderStyle();
                    Globals.ballAndStick.hide();
                    Globals.noodle.show();
                } else {
                    Globals.sceneManager.renderStyle = BallAndStick.getRenderStyle();
                    Globals.noodle.hide();
                    Globals.ballAndStick.show();
                }

                // if (false === thumbnailPanel.isHidden) {
                //     const model = Globals.sceneManager.renderStyle === Noodle.getRenderStyle() ? Globals.noodle : Globals.ballAndStick;
                //     thumbnailPanel.configure(model);
                //     thumbnailPanel.render();
                // }

            }  else if ('DidLoadPointCloudFile' === type) {

                $('#spacewalk_info_panel_locus').text( Globals.pointCloudManager.blurbLocus() );
                $('#spacewalk_info_panel_ensemble').text( '-' );

                setupPointCloud(Globals.pointCloudManager.list.map(o => o.geometry));

            } else if ('DidLoadFile' === type) {

                $('#spacewalk_info_panel_locus').text( Globals.ensembleManager.blurbLocus() );
                $('#spacewalk_info_panel_ensemble').text( Globals.ensembleManager.blurbCellLine() );

                const { initialKey } = data;
                let trace = Globals.ensembleManager.getTraceWithName(initialKey);

                Globals.ensembleManager.currentTrace = trace;
                Globals.sceneManager.cameraLightingRig.doUpdateCameraPose = true;

                setup({ trace });

            } else if ('DidSelectStructure' === type) {

                let trace = Globals.ensembleManager.getTraceWithName(data);
                Globals.ensembleManager.currentTrace = trace;
                setup({ trace });
            }

        }
    };

let setupPointCloud = (geometryList) => {

    Globals.sceneManager.dispose();

    Globals.sceneManager.renderStyle = PointCloud.getRenderStyle();

    Globals.pointCloud.configure(geometryList);

    let scene = new THREE.Scene();
    Globals.pointCloud.addToScene(scene);

    const { min, max, center, radius } = Globals.pointCloud.getBounds();
    const { position, fov } = Globals.pointCloud.getCameraPoseAlongAxis({ axis: '+z', scaleFactor: 3 });
    Globals.sceneManager.configure({scene, min, max, boundingDiameter: (2 * radius), cameraPosition: position, centroid: center, fov});

};

let setup = ({ trace }) => {

    Globals.sceneManager.dispose();

    Globals.sceneManager.renderStyle = guiManager.getRenderingStyle();

    Globals.noodle.configure(trace);
    Globals.ballAndStick.configure(trace);

    let scene = new THREE.Scene();

    Globals.noodle.addToScene(scene);
    Globals.ballAndStick.addToScene(scene);

    const { min, max, center, radius } = Globals.ballAndStick.getBounds();
    const { position, fov } = Globals.ballAndStick.getCameraPoseAlongAxis({ axis: '+z', scaleFactor: 3 });
    Globals.sceneManager.configure({scene, min, max, boundingDiameter: (2 * radius), cameraPosition: position, centroid: center, fov});

    // if (false === thumbnailPanel.isHidden) {
    //     const model = Globals.sceneManager.renderStyle === Noodle.getRenderStyle() ? Globals.noodle : Globals.ballAndStick;
    //     thumbnailPanel.configure(model);
    //     thumbnailPanel.render();
    // }

    distanceMapPanel.drawTraceDistanceCanvas(getTraceDistanceCanvas(trace));
    contactFrequencyMapPanel.drawTraceContactFrequency(getTraceContactFrequencyCanvas(trace, contactFrequencyMapPanel.distanceThreshold));
};
