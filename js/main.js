import * as THREE from './threejs_es6/three.module.js';
import SceneManager from './sceneManager.js';
import Picker from './picker.js';
import PickHighlighter from './pickHighlighter.js';
import DataFileLoader from './dataFileLoader.js';
import StructureSelect from './structureSelect.js';
import StructureManager from './structureManager.js';
import IGVPalette from './igvPalette.js';

import { parsePathEncodedGenomicLocation } from './structureManager.js';
import { appleCrayonColorHexValue, appleCrayonColorThreeJS, rgb255ToThreeJSColor, appleCrayonColorRGB255 } from './color.js';
import { globalEventBus } from './eventBus.js';

let structureManager;

let structureSelect;

let dataFileLoader;

let igvPalette;

let sceneManager;

let [ chr, genomicStart, genomicEnd ] = [ undefined, undefined, undefined ];

let doUpdateCameraPose = true;

let main = async container => {

    const sceneManagerSettings =
        {
            container: container,

            ballRadius: 24,

            // stickMaterial: new THREE.MeshBasicMaterial({ color: appleCrayonColorThreeJS('aluminum') }),
            stickMaterial: new THREE.MeshPhongMaterial({ color: appleCrayonColorThreeJS('aluminum') }),

            backgroundColor: appleCrayonColorThreeJS('mercury'),
            // backgroundColor: rgb255ToThreeJSColor(195, 236, 255),

            groundPlaneColor: appleCrayonColorHexValue('steel'),

            colorRampPalette: $('#trace3d_color_ramp_palette').get(0),

            colorRampPaletteColors: [ appleCrayonColorRGB255('honeydew'), appleCrayonColorRGB255('clover') ],

            renderer: new THREE.WebGLRenderer({ antialias: true }),

            picker: new Picker( { raycaster: new THREE.Raycaster(), pickHighlighter: new PickHighlighter(appleCrayonColorThreeJS('maraschino')) } ),

            // skyColor | grundColor | intensity
            // hemisphereLight: new THREE.HemisphereLight( appleCrayonColorHexValue('sky'), appleCrayonColorHexValue('moss'), 1 )
            hemisphereLight: new THREE.HemisphereLight( appleCrayonColorHexValue('snow'), appleCrayonColorHexValue('nickel'), 1 )
        };

    sceneManager = new SceneManager(sceneManagerSettings);

    structureManager = new StructureManager();

    dataFileLoader = new DataFileLoader({ $urlModal: $('#trace3d-file-load-url-modal'), $selectModal: $('#trace3d-file-load-select-modal')});

    structureSelect = new StructureSelect({ container, palette: $('#trace3d_structure_select_palette').get(0) });

    igvPalette = new IGVPalette({ container, palette: $('#trace3d_igv_palette').get(0) });

    // const url = 'https://www.encodeproject.org/files/ENCFF079FWO/@@download/ENCFF079FWO.bigBed';
    // const url = 'https://www.encodeproject.org/files/ENCFF079FWO/@@download/ENCFF079FWO.bigBed';
    const url = 'https://www.encodeproject.org/files/ENCFF298BFT/@@download/ENCFF298BFT.bigWig';
    // const url = 'https://www.encodeproject.org/files/ENCFF722EUH/@@download/ENCFF722EUH.bigWig';

    let track = await igvPalette.createLoadLowLevelTrack({genomeID: 'hg38', url});

    if (track) {
        await igvPalette.gotoDefaultLocus();
    }

    sceneManager.defaultConfiguration();

    renderLoop();

    const eventListener =
        {
            receiveEvent: async ({ type, data }) => {
                let structure;

                if ('DidSelectStructure' === type) {

                    structure = structureManager.structureWithName(data);

                    sceneManager.dispose();
                    [ chr, genomicStart, genomicEnd ] = parsePathEncodedGenomicLocation(structureManager.path);

                    setup({ sceneManager, chr, genomicStart, genomicEnd, structure });

                } else if ('DidLoadFile' === type) {

                    let { name, payload } = data;

                    $('.navbar').find('#trace3d-file-name').text(name);

                    structureManager.path = name;
                    structureManager.ingest(payload);

                    [ chr, genomicStart, genomicEnd ] = parsePathEncodedGenomicLocation(structureManager.path);

                    igvPalette.goto({ chr, start: genomicStart, end: genomicEnd });

                    const initialStructureKey = '0';
                    structure = structureManager.structureWithName(initialStructureKey);

                    structureSelect.configure({ structures: structureManager.structures, initialStructureKey });

                    sceneManager.dispose();

                    setup({ sceneManager, chr, genomicStart, genomicEnd, structure });

                    doUpdateCameraPose = false;

                }


            }
        };

    globalEventBus.subscribe('DidSelectStructure', eventListener);
    globalEventBus.subscribe('DidLoadFile', eventListener);

};

let setup = ({ sceneManager, chr, genomicStart, genomicEnd, structure }) => {

    let [ structureLength, structureExtent, cameraPosition, centroid ] = [ structure.array.length, structure.extent, structure.cameraPosition, structure.centroid ];
    sceneManager.configure({ chr, genomicStart, genomicEnd, structureLength, structureExtent, cameraPosition, centroid, doUpdateCameraPose });

    // Dictionay of segment indices. Key is UUID of 3D object
    sceneManager.objectUUID2SegmentIndex = {};

    // Array of 3D objects. Index is segment index.
    sceneManager.segmentIndex2Object = [];

    // balls
    for(let item of structure.array) {

        const [ x, y, z ] = item.xyz;

        const doSkip = isNaN(x) || isNaN(y) || isNaN(z);

        if (!doSkip) {

            const color = sceneManager.colorRampPalette.genomicRampWidget.colorForSegmentIndex(item.segmentIndex);
            // const ballMaterial = new THREE.MeshPhongMaterial({ color, envMap: specularCubicTexture });
            const ballMaterial = new THREE.MeshPhongMaterial({ color });

            const ballMesh = new THREE.Mesh(sceneManager.ballGeometry, ballMaterial);
            ballMesh.position.set(x, y, z);

            sceneManager.objectUUID2SegmentIndex[ ballMesh.uuid ] =
                {
                    'segmentIndex' : item.segmentIndex,
                    'genomicLocation' : (item.segmentIndex - 1) * 3e4 + genomicStart,
                };

            sceneManager.segmentIndex2Object[ item.segmentIndex ] =
                {
                    'object' : ballMesh,
                    'genomicLocation' : (item.segmentIndex - 1) * 3e4 + genomicStart,
                };

            sceneManager.scene.add(ballMesh);

        }

    }

    // sticks
    for (let i = 0, j = 1; j < structure.array.length; ++i, ++j) {

        const [ x0, y0, z0 ] = structure.array[i].xyz;
        const [ x1, y1, z1 ] = structure.array[j].xyz;

        const doSkip = isNaN(x0) || isNaN(x1);

        if (!doSkip) {

            const axis = new THREE.CatmullRomCurve3([ new THREE.Vector3( x0, y0, z0 ), new THREE.Vector3( x1, y1, z1 ) ]);
            const stickGeometry = new THREE.TubeGeometry(axis, 8, sceneManager.ballRadius/8, 16, false);

            const stickMesh = new THREE.Mesh(stickGeometry, sceneManager.stickMaterial);
            stickMesh.name = 'stick';

            sceneManager.scene.add( stickMesh );
        }

    }

};

let renderLoop = () => {

    requestAnimationFrame( renderLoop );

    if (sceneManager.scene && sceneManager.orbitalCamera) {
        sceneManager.renderer.render(sceneManager.scene, sceneManager.orbitalCamera.camera);
    }

};

export { main, sceneManager };
