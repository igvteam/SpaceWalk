import {StringUtils} from "igv-utils"
import {Globals} from "./globals.js"
import { deleteAllBrowsers, syncBrowsers, getAllBrowsers } from './hicMisc.js'
import { createBrowserList } from "./hicBrowserLifecycle.js"


function toJSON() {
    const browserJson = [];
    for (let browser of getAllBrowsers()) {
        if (browser.dataset) {
            browserJson.push(browser.toJSON());
        }
    }

    if (0 === browserJson.length) {
        return undefined
    } else {
        const jsonOBJ = {};
        jsonOBJ.browsers = browserJson;

        if (Globals.selectedGene) {
            jsonOBJ["selectedGene"] = Globals.selectedGene;
        }

        const captionDiv = document.getElementById('hic-caption');
        if (captionDiv) {
            var captionText = captionDiv.textContent;
            if (captionText) {
                captionText = captionText.trim();
                if (captionText) {
                    jsonOBJ.caption = captionText;
                }
            }
        }

        return jsonOBJ;
    }
}

function compressedSession() {
    const jsonString = JSON.stringify(toJSON());
    return `session=blob:${StringUtils.compressString(jsonString)}`
}


async function restoreSession(container, session) {

    deleteAllBrowsers();

    if (session.hasOwnProperty("selectedGene")) {
        Globals.selectedGene = session.selectedGene;
    }
    if (session.hasOwnProperty("caption")) {
        const captionText = session.caption;
        var captionDiv = document.getElementById("hic-caption");
        if (captionDiv) {
            captionDiv.textContent = captionText;
        }
    }

    await createBrowserList(container, session);

    // if (false !== session.syncDatasets) {
    //     syncBrowsers();
    // }

}


export {toJSON, restoreSession, compressedSession}