import * as THREE from "../node_modules/three/build/three.module.js";
import Globals from './globals.js';
import igv from '../vendor/igv.esm.js'
import KDBush from '../node_modules/kd3d/js/index.js'
import { readFileAsText } from "./utils.js";
import { rgb255String, appleCrayonColorRGB255 } from './color.js';
import { distanceMapPanel, contactFrequencyMapPanel } from './gui.js';
import { lerp } from './math.js';

export let contactFrequencyDistanceThreshold = 256;

class EnsembleManager {

    constructor () {
        this.stepSize = 3e4;
    }

    ingest({ path, string }){

        this.locus = parsePathEncodedGenomicLocation(path);
        this.path = path;

        const raw = string.split(/\r?\n/);

        // discard blurb
        raw.shift();

        // discard column titles
        raw.shift();

        // discard blank lines
        const lines = raw.filter(rawLine => "" !== rawLine);

        console.time(`ingest ensemble data with ${ lines.length } lines`);

        // build scratch dictionary
        let dictionary = {};
        for (let line of lines) {

            const tokens = line.split(',');

            // chr-index (1-based) | segment-index (1-based) | Z | X | Y
            const [ index, segmentID, z, x, y ] = [ tokens[ 0 ], tokens[ 1 ], tokens[ 2 ], tokens[ 3 ], tokens[ 4 ] ];

            // key will be 0-based
            let number = parseInt(index, 10) - 1;
            let key = number.toString();

            if (undefined === dictionary[ key ]) {
                dictionary[ key ] = [];
            }

            if ('nan' === x || 'nan' === y || 'nan' === z) {
                // do nothing
            } else {
                const genomicLocation = this.locus.genomicStart + this.stepSize * (0.5 + (parseInt(segmentID, 10) - 1));
                dictionary[ key ].push({ segmentID, genomicLocation, x: parseFloat(x), y: parseFloat(y), z: parseFloat(z) })
            }
        }

        this.maximumSegmentID = Number.NEGATIVE_INFINITY;

        let keys = Object.keys(dictionary);

        // transform and augment dictionary into ensemble
        this.ensemble = {};
        for (let key of keys) {

            let list = dictionary[ key ];

            // find the longest list. this will be the edge length of the distance and contact maps
            this.maximumSegmentID = Math.max(this.maximumSegmentID, list.length);

            let segmentList = list.map(o => {
                let { segmentID, genomicLocation } = o;
                return { segmentID, genomicLocation }
            });

            let geometry = new THREE.Geometry();

            geometry.vertices = list.map(o => {
                let { x, y, z } = o;
                return new THREE.Vector3(x, y, z);
            });

            geometry.computeBoundingBox();
            geometry.computeBoundingSphere();

            let material = new THREE.MeshPhongMaterial();

            this.ensemble[ key ] = { segmentList, geometry, material };
        }

        console.timeEnd(`ingest ensemble data with ${ lines.length } lines`);

        // update ensemble level contact frequency map
        contactFrequencyMapPanel.drawEnsembleContactFrequency(getEnsembleContactFrequencyCanvas(this.ensemble, contactFrequencyMapPanel.distanceThreshold));

        // update ensemble level distance map
        distanceMapPanel.drawEnsembleDistanceCanvas(getEnsembleDistanceMapCanvas(this.ensemble));

        const { chr, genomicStart, genomicEnd } = this.locus;

        Globals.eventBus.post({ type: "DidLoadFile", data: { path, string, chr, genomicStart, genomicEnd, initialKey: '0' } });

    }

    getTraceWithName(name) {
        return this.ensemble[ name ] || undefined;
    }

    segmentIDForGenomicLocation(bp) {

        let delta = Math.round(bp - this.locus.genomicStart);
        let segmentID = 1 + Math.floor(delta / this.stepSize);
        return segmentID;
    }

    async loadURL ({ url, name }) {

        try {

            let string = await igv.xhr.load(url);
            const { file:path } = igv.parseUri(url);

            this.ingest({ path, string });

        } catch (error) {
            console.warn(error.message);
        }

    }

    async loadLocalFile ({ file }) {

        try {
            const string = await readFileAsText(file);
            const { name: path } = file;

            this.ingest({ path, string });

        } catch (e) {
            console.warn(e.message)
        }

    }

    blurb() {
        const cellLine = this.path.split('_').shift();
        const str = `Cell Line ${ cellLine } `
    }
}

export const parsePathEncodedGenomicLocation = path => {

    let dev_null;
    let parts = path.split('_');
    dev_null = parts.shift();
    let locus = parts[ 0 ];

    let [ chr, start, end ] = locus.split('-');

    dev_null = end.split(''); // 3 0 M b
    dev_null.pop(); // 3 0 M
    dev_null.pop(); // 3 0
    end = dev_null.join(''); // 30

    return { chr, genomicStart: parseInt(start) * 1e6, genomicEnd: parseInt(end) * 1e6 };
};

export const getBoundsWithTrace = (trace) => {
    const { center, radius } = trace.geometry.boundingSphere;
    const { min, max } = trace.geometry.boundingBox;
    return { min, max, center, radius }
};

export const getTraceContactFrequenceCanvas = (trace, distanceThreshold) => {

    const spatialIndex = new KDBush(kdBushConfguratorWithTrace(trace));

    let mapSize = Globals.ensembleManager.maximumSegmentID;

    let frequencies = new Array(mapSize * mapSize);
    for (let f = 0; f < frequencies.length; f++) frequencies[ f ] = 0;

    let { vertices } = trace.geometry;
    for (let i = 0; i < vertices.length; i++) {

        const { x, y, z } = vertices[ i ];

        const ids = spatialIndex.within(x, y, z, distanceThreshold);

        const traceSegmentID = trace.segmentList[ i ].segmentID;
        const ids_filtered = ids.filter(id => id !== traceSegmentID);

        if (ids_filtered.length > 0) {
            for (let id of ids_filtered) {

                // ids are segment indices which are 1-based. Decrement to use
                // as index into frequency array which is 0-based
                const id_freq = id - 1;
                const  i_freq = traceSegmentID - 1;

                const xy =  i_freq * mapSize + id_freq;
                if (xy > frequencies.length) {
                    console.log('xy is bogus index ' + xy);
                }
                const yx = id_freq * mapSize +  i_freq;

                if (yx > frequencies.length) {
                    console.log('yx is bogus index ' + yx);
                }

                ++frequencies[ xy ];
                ++frequencies[ yx ];

            }
        }

    }

    const maxFrequency = Math.max(...frequencies);

    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    ctx.canvas.width = ctx.canvas.height = mapSize;

    const { width: w, height: h } = ctx.canvas;
    ctx.fillStyle = rgb255String( appleCrayonColorRGB255('snow') );
    ctx.fillRect(0, 0, w, h);

    for (let i = 0; i < w; i++) {
        for(let j = 0; j < h; j++) {

            const ij = i * w + j;
            const interpolant = i === j ? 1 :  frequencies[ ij ] / maxFrequency;
            ctx.fillStyle = Globals.colorMapManager.retrieveRGB255String('juicebox_default', interpolant);
            ctx.fillRect(i, j, 1, 1);
        }
    }

    return canvas;

};

export const getEnsembleContactFrequencyCanvas = (ensemble, distanceThreshold) => {

    const ensembleList = Object.values(ensemble);

    let mapSize = Globals.ensembleManager.maximumSegmentID;

    console.time(`getEnsembleContactFrequencyCanvas. ${ ensembleList.length } traces.`);

    let frequencies = new Array(mapSize * mapSize);
    for (let f = 0; f < frequencies.length; f++) frequencies[ f ] = 0;

    let maxFrequency = Number.NEGATIVE_INFINITY;

    for (let trace of ensembleList) {

        // console.time(`index and process single traces`);

        const spatialIndex = new KDBush(kdBushConfguratorWithTrace(trace));

        let { vertices } = trace.geometry;
        for (let i = 0; i < vertices.length; i++) {

            const { x, y, z } = vertices[ i ];

            const ids = spatialIndex.within(x, y, z, distanceThreshold);

            const traceSegmentID = trace.segmentList[ i ].segmentID;
            const ids_filtered = ids.filter(id => id !== traceSegmentID);

            if (ids_filtered.length > 0) {
                for (let id of ids_filtered) {

                    // ids are segment indices which are 1-based. Decrement to use
                    // as index into frequency array which is 0-based
                    const id_freq = id - 1;
                    const  i_freq = traceSegmentID - 1;

                    const xy =  i_freq * mapSize + id_freq;
                    if (xy > frequencies.length) {
                        console.log('xy is bogus index ' + xy);
                    }
                    const yx = id_freq * mapSize +  i_freq;

                    if (yx > frequencies.length) {
                        console.log('yx is bogus index ' + yx);
                    }

                    ++frequencies[ xy ];
                    ++frequencies[ yx ];

                    maxFrequency = Math.max(maxFrequency, frequencies[ xy ]);

                }
            }

        }

        // console.timeEnd(`index and process single traces`);

    }

    console.timeEnd(`getEnsembleContactFrequencyCanvas. ${ ensembleList.length } traces.`);

    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    ctx.canvas.width = ctx.canvas.height = mapSize;

    // clear canvas
    const { width: w, height: h } = ctx.canvas;
    ctx.fillStyle = rgb255String( appleCrayonColorRGB255('snow') );
    ctx.fillRect(0, 0, w, h);

    // paint frequencies as lerp'd color
    for (let i = 0; i < w; i++) {
        for(let j = 0; j < h; j++) {

            const ij = i * w + j;
            const interpolant = i === j ? 1 :  frequencies[ ij ] / maxFrequency;
            ctx.fillStyle = Globals.colorMapManager.retrieveRGB255String('juicebox_default', interpolant);
            ctx.fillRect(i, j, 1, 1);
        }
    }

    return canvas;

};

export const getTraceDistanceMapCanvas = trace => {

    const { distanceMapArray, maxDistance, minDistance } = createTraceDistanceMapArray(trace);

    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    ctx.canvas.width = ctx.canvas.height = Globals.ensembleManager.maximumSegmentID;

    const { width: w, height: h } = ctx.canvas;
    ctx.fillStyle = rgb255String( appleCrayonColorRGB255('snow') );
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < w; i++) {
        for(let j = 0; j < h; j++) {
            const ij = i * w + j;
            const interpolant = distanceMapArray[ ij ] / maxDistance;
            ctx.fillStyle = Globals.colorMapManager.retrieveRGB255String('juicebox_default', interpolant);
            ctx.fillRect(i, j, 1, 1);
        }

    }

    return canvas;

};

export const getEnsembleDistanceMapCanvas = ensemble => {

    const ensembleList = Object.values(ensemble);

    console.time(`getEnsembleDistanceMapCanvas. ${ ensembleList.length } traces.`);

    let mapSize = Globals.ensembleManager.maximumSegmentID;

    let averageDistance = new Array(mapSize * mapSize);
    for (let d = 0; d < averageDistance.length; d++) averageDistance[ d ] = 0.0;

    for (let trace of ensembleList) {

        const { distanceMapArray, maxDistance } = createTraceDistanceMapArray(trace);

        let { vertices } = trace.geometry;
        let { length } = vertices;

        for (let i = 0; i < length; i++) {

            const i_segmentIDIndex = trace.segmentList[ i ].segmentID - 1;
            for (let j = 0; j < length; j++) {

                const j_segmentIDIndex = trace.segmentList[ j ].segmentID - 1;

                const ij =  i_segmentIDIndex * mapSize + j_segmentIDIndex;
                const ji =  j_segmentIDIndex * mapSize + i_segmentIDIndex;

                // Incrementally build running average
                averageDistance[ ij ] = averageDistance[ ij ] + (distanceMapArray[ ij ] - averageDistance[ ij ]) / (1 + i);

                averageDistance[ ji ] = averageDistance[ ij ];

            } // for (trace.length)

        } // for (trace.length)

    } // for (trace)

    const maxAverageDistance = Math.max(...averageDistance);
    const minAverageDistance = Math.min(...averageDistance);

    console.timeEnd(`getEnsembleDistanceMapCanvas. ${ ensembleList.length } traces.`);


    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    ctx.canvas.width = ctx.canvas.height = mapSize;

    const { width: w, height: h } = ctx.canvas;
    ctx.fillStyle = rgb255String( appleCrayonColorRGB255('snow') );
    ctx.fillRect(0, 0, w, h);
    // paint average distances as lerp'd color
    for (let i = 0; i < w; i++) {
        for(let j = 0; j < h; j++) {
            const ij = i * w + j;
            const interpolant = averageDistance[ ij ] / maxAverageDistance;
            ctx.fillStyle = Globals.colorMapManager.retrieveRGB255String('juicebox_default', interpolant);
            ctx.fillRect(i, j, 1, 1);
        }
    }

    return canvas;


};

export const createTraceDistanceMapArray = trace => {

    let mapSize = Globals.ensembleManager.maximumSegmentID;

    let distanceMapArray = new Array(mapSize * mapSize);
    for (let d = 0; d < distanceMapArray.length; d++) distanceMapArray[ d ] = 0;

    let maxDistance = Number.NEGATIVE_INFINITY;
    let minDistance = Number.POSITIVE_INFINITY;

    let { vertices } = trace.geometry;
    let { length } = vertices;
    for (let i = 0; i < length; i++) {

        const candidate = vertices[ i ];
        const i_segmentIDIndex = trace.segmentList[ i ].segmentID - 1;

        for (let j = 0; j < length; j++) {

            const centroid = vertices[ j ];
            const j_segmentIDIndex = trace.segmentList[ j ].segmentID - 1;

            const ij =  i_segmentIDIndex * mapSize + j_segmentIDIndex;
            const ji =  j_segmentIDIndex * mapSize + i_segmentIDIndex;

            if (i_segmentIDIndex === j_segmentIDIndex) {
                distanceMapArray[ ij ] = 0;
            } else {

                const distance = candidate.distanceTo(centroid);

                maxDistance = Math.max(maxDistance, distance);
                minDistance = Math.min(minDistance, distance);

                distanceMapArray[ ij ] = distance;

                if (distanceMapArray[ ji ]) {
                    // do nothing
                } else {
                    distanceMapArray[ ji ] = distance;
                }
            }

        } // for (j)

    }

    return { distanceMapArray, maxDistance, minDistance };

};

const kdBushConfguratorWithTrace = trace => {

    return {
        idList: trace.segmentList.map(segment => segment.segmentID),
        points: trace.geometry.vertices,
        getX: pt => pt.x,
        getY: pt => pt.y,
        getZ: pt => pt.z,
        nodeSize: 64,
        ArrayType: Float64Array,
        axisCount: 3
    }

};

export default EnsembleManager;
