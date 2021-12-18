const spacewalkConfig =
    {
            genomes: "resources/genomes.json",
            trackRegistryFile: "resources/tracks/trackRegistry.json",
            clientId: "661332306814-fmasnut050v7qds33tsa2rtvd5tc06sl.apps.googleusercontent.com",
            apiKey: "AIzaSyCEmqU2lrAgKxJCbnJX87a5F3c9GejCCLA",
            igvConfig:
                {
                        genome: 'hg19',
                        showTrackLabels: false,
                        // showRuler: false,
                        showControls: false,
                        showCursorTrackingGuide: true,
                        queryParametersSupported: false
                },
            contactMapMenu:
                {
                        id: 'contact-map-datalist',
                        items: 'https://aidenlab.org/juicebox/res/hicfiles.json'
                }

    }

export { spacewalkConfig }