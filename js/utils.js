import { quantize } from "./math.js";
import { globals } from "./app.js";

const zIndexPanelSelected = 1124;
const zIndexPanelUnselected = 1024;

const setMaterialProvider = materialProvider => {
    globals.noodle.updateMaterialProvider(materialProvider);
    globals.ballAndStick.updateMaterialProvider(materialProvider);
};

let fitToContainer = (canvas, devicePixelRatio) => {

    canvas.style.width ='100%';
    canvas.style.height ='100%';

    canvas.width  = devicePixelRatio ? devicePixelRatio * canvas.offsetWidth : canvas.offsetWidth;
    canvas.height = devicePixelRatio ? devicePixelRatio * canvas.offsetHeight : canvas.offsetHeight;
};

let getMouseXY = (domElement, { clientX, clientY }) => {

    // a DOMRect object with eight properties: left, top, right, bottom, x, y, width, height
    const { left, top, width, height } = domElement.getBoundingClientRect();

    return { x: clientX - left,  y: clientY - top, xNormalized: (clientX - left)/width, yNormalized: (clientY - top)/height };

};

let throttle = (fn, threshhold, scope) => {

    threshhold || (threshhold = 200);

    let last;
    let deferTimer;
    return function () {

        let [ context, now, args ] = [ scope || this, +new Date, arguments ];

        if (last && now < last + threshhold) {
            clearTimeout(deferTimer);
            deferTimer = setTimeout(() => { last = now; fn.apply(context, args); }, threshhold);
        } else {
            last = now;
            fn.apply(context, args);
        }
    }
};

let numberFormatter = (rawNumber) => {

    const [ dec, sep, decsep ] = [ String(rawNumber).split(/[.,]/), ',', '.' ];

    return dec[ 0 ]
        .split('')
        .reverse()
        .reduce((accumulator, value, index) => {
            return 0 === index % 3 ? accumulator + sep + value : accumulator + value;
        })
        .split('')
        .reverse()
        .join('') + (dec[1] ? decsep + dec[1] : '');
};

const readFileAsText = file => {

    const reader = new FileReader();

    return new Promise((resolve, reject) => {
        reader.onerror = () => {
            reader.abort();
            reject(new DOMException("Problem parsing input file."));
        };

        reader.onload = () => {
            resolve(reader.result);
        };

        reader.readAsText(file);
    });
};

const readFileAsDataURL = async blob => {

    const fileReader = new FileReader();

    return new Promise((resolve, reject) => {
        fileReader.onerror = () => {
            fileReader.abort();
            reject(new DOMException("Problem parsing input file."));
        };

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.readAsDataURL(blob);
    });
};

const createImage = imageSource => {

    return new Promise((resolve, reject) => {
        let img = new Image();
        img.addEventListener('load', e => resolve(img));
        img.addEventListener('error', () => { reject(new Error(`Failed to load image's URL: ${imageSource}`)); });
        img.src = imageSource;
    });

};

const drawWithSharedUint8ClampedArray = async (ctx, size, array) => {

    const { width, height } = size;

    const imageData = new ImageData(array, globals.ensembleManager.maximumSegmentID, globals.ensembleManager.maximumSegmentID);

    // const str = `draw With Shared Uint8 Clamped Array. src ${globals.ensembleManager.maximumSegmentID} x ${globals.ensembleManager.maximumSegmentID}. dst ${width} x ${height}.`;
    // console.time(str);

    const config =
        {
            resizeWidth: width,
            resizeHeight: height
        };

    // const imageBitmap = await createImageBitmap(imageData, config);
    const imageBitmap = await createImageBitmap(imageData);
    ctx.transferFromImageBitmap(imageBitmap);

    // console.timeEnd(str)
};

export {
    zIndexPanelSelected,
    zIndexPanelUnselected,
    setMaterialProvider,
    createImage,
    drawWithSharedUint8ClampedArray,
    readFileAsDataURL,
    readFileAsText,
    fitToContainer,
    getMouseXY,
    throttle,
    numberFormatter
};
