import { globalEventBus } from "./main.js";
import { makeDraggable } from "./draggable.js";
import RampWidget from "./rampWidget.js";

class ToolPalette {
    constructor(container) {

        const palette = document.createElement('div');
        palette.setAttribute('id', 'trace3d_tool_palette');
        container.appendChild( palette );

        this.genomicRampWidget = new RampWidget( { container: palette, namespace: 'genomicRampWidget', colors: [ 'blue', 'red' ] } );

        this.layout(container, palette);

        this.container = container;
        this.palette = palette;

        makeDraggable(palette, palette);

        $(window).on('resize.trace3d.toolpalette', () => { this.onWindowResize() });

        $(this.palette).on('mouseenter.trace3d.toolpalette', (event) => { globalEventBus.post({type: "DidEnterToolPalette", data: this }); });

        $(this.palette).on('mouseleave.trace3d.toolpalette', (event) => { globalEventBus.post({type: "DidLeaveToolPalette", data: this }); });

        globalEventBus.subscribe("PickerDidHitObject", this);
        globalEventBus.subscribe("DidLoadSegments", this);

    }

    layout(container, element) {

        // const { left, top, right, bottom, x, y, width, height } = container.getBoundingClientRect();
        const { width, height } = container.getBoundingClientRect();
        const domRect = element.getBoundingClientRect();

        const multiple = 5/4;
        $(element).offset( { left: (width - multiple * domRect.width), top: ((height - domRect.height)/2) } );

    }

    onWindowResize() {
        this.layout(this.container, this.element);
    };

    receiveEvent({ type, data }) {

        if ("PickerDidHitObject" === type) {
            console.log("ToolPalette " + type + ' uuid ' + data);
        } else if ("DidLoadSegments" === type) {
            let [ chr, genomicStart, genomicEnd ] = data;
            this.genomicRampWidget.configure({ chr, genomicStart, genomicEnd });
        }

    }

}

export default ToolPalette;
