import {ModalTable, GenericDataSource} from 'data-modal'
import {StringUtils} from 'igv-utils'
import Globals from "../globals.js"
import AlertSingleton from "./alertSingleton.js"
import {createURLModalElement} from "./urlModal.js"
import FileLoadManager from "./fileLoadManager.js"
import FileLoadWidget from "./fileLoadWidget.js"
import * as Utils from './utils.js'
import {genarkDatasourceConfigurator} from "./genarkDatasourceConfigurator.js"

const MAX_CUSTOM_GENOMES = 5

let predefinedGenomeIds
let predefinedGenomes
let genarkModalTable
let genomeWidgetModal

function createGenomeWidgets({igvMain, urlModalId, genarkModalId, genomeFileLoad}) {

    const genarkModalTableConfig =
        {
            id: genarkModalId,
            title: 'UCSC GenArk',
            selectionStyle: 'single',
            pageLength: 100,
            okHandler: result => {
                const {accession} = result[0]
                loadGenome(accession)
            }
        }

    genarkModalTable = new ModalTable(genarkModalTableConfig)

    const dataSource = new GenericDataSource(genarkDatasourceConfigurator())
    genarkModalTable.setDatasource(dataSource)

    // URL modal
    const urlModalElement = createURLModalElement(urlModalId, 'Genome URL')
    igvMain.appendChild(urlModalElement)

    // File widget
    const fileLoadWidget = new FileLoadWidget({
        widgetParent: urlModalElement.querySelector('.modal-body'),
        dataTitle: 'Genome',
        indexTitle: 'Index',
        mode: 'url',
        fileLoadManager: new FileLoadManager(),
        dataOnly: false,
        doURL: true
    })

    // Configures both file widget and url modal, a bit confusing
    genomeWidgetModal = new bootstrap.Modal(urlModalElement)
    Utils.configureModal(fileLoadWidget, genomeWidgetModal, async fileLoadWidget => {

        try {
            await genomeFileLoad.loadPaths(fileLoadWidget.retrievePaths())
        } catch (e) {
            console.error(e)
            AlertSingleton.present(e)
        }

    })
}

/**
 * Initialize the genome selection widget with pre-defined and user-defined genomes.  Because of the way these
 * items are added in 'genomeDropdownLayout' they are added in reverse order.
 *
 * @param genomes
 * @returns {Promise<void>}
 */
async function initializeGenomeWidgets(genomes) {
    try {
        predefinedGenomes = (await getAppLaunchGenomes(genomes)).reverse() // Default genome list
        predefinedGenomeIds = new Set(predefinedGenomes.map(g => g.id))
        updateGenomeList()

    } catch (e) {
        AlertSingleton.present(e.message)
    }
}

async function getAppLaunchGenomes(genomes) {

    if (undefined === genomes) {
        return undefined
    }
    if (Array.isArray(genomes)) {
        return genomes
    } else {

        let response = undefined
        try {
            response = await fetch(genomes)
        } catch (e) {
            AlertSingleton.present(e.message)
        }

        if (response) {
            let json = await response.json()
            return json
        }
    }
}

function getRecentGenomes() {
    const customGenomeString = localStorage.getItem("recentGenomes")
    return customGenomeString ? JSON.parse(customGenomeString).reverse() : []
}

function updateGenomeList() {
    const dropdownMenu = document.getElementById('igv-app-genome-dropdown-menu');

    // NOTE:  MUST USE ID HERE, THERE CAN BE MULTIPLE DIVIDERS.  JQUERY DOES WEIRD THINGS IN THE CODE THAT FOLLOWS IF divider IS A COLLECTION
    const divider = dropdownMenu.querySelector('#igv-app-genome-dropdown-divider');

    // discard all buttons following the divider div
    let nextElement = divider.nextElementSibling;
    while (nextElement) {
        const elementToRemove = nextElement;
        nextElement = nextElement.nextElementSibling;
        elementToRemove.removeEventListener('click', elementToRemove._clickHandler);
        elementToRemove.remove();
    }

    const addEntryFor = (genomeJson) => {
        const key = genomeJson.id;
        const value = genomeJson;

        const button = createButton(value.name);
        divider.insertAdjacentElement('afterend', button);

        button.dataset.id = key;

        const str = `click.genome-dropdown.${key}`;

        button._clickHandler = async () => {
            const id = button.dataset.id;
            if (id !== Globals.browser.genome.id) {
                await loadGenome(value);
            }
        };

        button.addEventListener('click', button._clickHandler);
    };

    // TODO -- why do we need to add everything in reverse?

    if (predefinedGenomes && predefinedGenomes.length > 0) {
        for (let genomeJson of predefinedGenomes) {
            addEntryFor(genomeJson);
        }
    }

    const recentGenomes = getRecentGenomes();
    if (recentGenomes && recentGenomes.length > 0) {
        const newDivider = document.createElement('div');
        newDivider.className = 'dropdown-divider';
        divider.insertAdjacentElement('afterend', newDivider);

        for (let genomeJson of recentGenomes) {
            addEntryFor(genomeJson);
        }
    }
}

function createButton(text) {
    const button = document.createElement('button');
    button.className = 'dropdown-item';
    button.type = 'button';
    button.textContent = text;
    return button;
}

async function loadGenome(genomeConfiguration, custom = false) {

    let g = undefined
    try {
        Globals.browser.startSpinner()
        g = await Globals.browser.loadGenome(genomeConfiguration)
        if (g.id) {
            try {

                // Last loaded genome ID, reloaded automatically on next page load
                localStorage.setItem("genomeID", g.id)

                // Update the custom list
                // hub.txt genomes are indirect, record name and id
                if (StringUtils.isString(genomeConfiguration)) {
                    genomeConfiguration = {id: genomeConfiguration}
                } else {
                    if (!genomeConfiguration.id) genomeConfiguration.id = g.id
                }
                if (!genomeConfiguration.name) {
                    genomeConfiguration.name = g.name
                }


                const recentGenomeList = localStorage.getItem("recentGenomes")
                let recentGenomes = recentGenomeList ? JSON.parse(recentGenomeList) : []
                recentGenomes = recentGenomes.filter(r => r.id !== g.id)  // If already present, replace
                recentGenomes.unshift(genomeConfiguration)
                if (recentGenomes.length > MAX_CUSTOM_GENOMES) {
                    recentGenomes = recentGenomes.slice(0, MAX_CUSTOM_GENOMES)
                }
                localStorage.setItem("recentGenomes", JSON.stringify(recentGenomes))
                updateGenomeList()


            } catch (e) {
                console.error(e)
            }
        }

    } catch (e) {
        console.error(e)
        AlertSingleton.present(e)
    } finally {
        Globals.browser.stopSpinner()
    }

    // if (g) {
    //     EventBus.globalBus.post({type: "DidChangeGenome", data: g.id});
    // }
}

export {createGenomeWidgets, loadGenome, initializeGenomeWidgets}

