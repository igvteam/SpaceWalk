import { distanceTo } from './webWorkerUtils.js'

self.addEventListener('message', ({ data }) => {

    if ('trace' === data.traceOrEnsemble) {

        const str = `Distance Map Worker - Update Trace Distance Array`
        console.time(str)

        const items = JSON.parse(data.itemsString)
        const { maxDistance, distances } = updateTraceDistanceArray(data.maximumSegmentID, items)

        console.timeEnd(str)

        const payload =
            {
                traceOrEnsemble: data.traceOrEnsemble,
                workerDistanceBuffer: distances,
                maxDistance
            }

        self.postMessage(payload, [ distances.buffer ])

    } else {

        const str = `Distance Map Worker - Update Ensemble Distance Array`
        console.time(str);

        const essentials = JSON.parse(data.essentialsString)
        const { maxAverageDistance, averages } = updateEnsembleDistanceArray(data.maximumSegmentID, essentials)

        console.timeEnd(str)

        const payload =
            {
                traceOrEnsemble: data.traceOrEnsemble,
                workerDistanceBuffer: averages,
                maxDistance: maxAverageDistance
            }

        self.postMessage(payload, [ averages.buffer ])

    }

}, false)

const kDistanceUndefined = -1;

function updateTraceDistanceArray(maximumSegmentID, items) {

    const distances = new Float32Array(maximumSegmentID * maximumSegmentID)
    distances.fill(kDistanceUndefined)

    const validData = []
    const validIndices = []

    for (let i = 0; i < items.length; i++) {
        if (true === items[ i ].isMissingData) {
            // ignore
        } else {
            validIndices.push(i)
            validData.push(items[ i ])
        }
    }

    let maxDistance = Number.NEGATIVE_INFINITY;

    let exclusionSet = new Set();

    for (let v = 0; v < validData.length; v++) {

        const i = validIndices[ v ]

        const xy_diagonal = i * maximumSegmentID + i

        distances[ xy_diagonal ] = 0

        exclusionSet.add(v)
        for (let w = 0; w < validData.length; w++) {


            if (false === exclusionSet.has(w)) {

                const distance = distanceTo(validData[ v ], validData[ w ])

                const j = validIndices[ w ]

                const ij =  i * maximumSegmentID + j
                const ji =  j * maximumSegmentID + i

                distances[ ij ] = distances[ ji ] = distance

                maxDistance = Math.max(maxDistance, distance)
            }

        }

    }

    return { maxDistance, distances }

}

function updateEnsembleDistanceArray(maximumSegmentID, essentials) {

    const averages  = new Float32Array(maximumSegmentID * maximumSegmentID)
    averages.fill(kDistanceUndefined)

    const counters = new Int32Array(maximumSegmentID * maximumSegmentID)
    counters.fill(0)

    for (let items of essentials) {

        const { maxDistance, distances } = updateTraceDistanceArray(maximumSegmentID, items)

        // We need to calculate an array of averages where the input data
        // can have missing - kDistanceUndefined - values

        // loop over distance array
        for (let d = 0; d < distances.length; d++) {

            // ignore missing data values. they do not participate in the average
            if (kDistanceUndefined === distances[ d ]) {
                // do nothing
            } else {

                // keep track of how many samples we have at this array index
                ++counters[ d ];

                if (kDistanceUndefined === averages[ d ]) {

                    // If this is the first data value at this array index copy it to average.
                    averages[ d ] = distances[ d ];
                } else {

                    // when there is data AND a pre-existing average value at this array index
                    // use an incremental averaging approach.

                    // Incremental averaging: avg_k = avg_k-1 + (distance_k - avg_k-1) / k
                    // https://math.stackexchange.com/questions/106700/incremental-averageing
                    averages[ d ] = averages[ d ] + (distances[ d ] - averages[ d ]) / counters[ d ];
                }

            }
        }

    }

    let maxAverageDistance = Number.NEGATIVE_INFINITY;
    for (let avg of averages) {
        maxAverageDistance = Math.max(maxAverageDistance, avg)
    }

    return { maxAverageDistance, averages }
}

