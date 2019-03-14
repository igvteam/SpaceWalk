import { makeDraggable } from "./draggable.js";
import {globalEventBus} from "./eventBus.js";
import { clamp } from './math.js'

let currentStructureKey = undefined;
class StructureSelect {

    constructor({ container, palette }) {

        this.$header = $('#trace3d_structure_select_header');

        this.$input = $('#trace3d_structure_select_input');

        this.$button_minus = $('#trace3d_structure_select_button_minus');
        this.$button_plus = $('#trace3d_structure_select_button_plus');

        this.keys = undefined;

        layout(container, palette);

        makeDraggable(palette, this.$header.get(0));

        $(window).on('resize.trace3d.structure_select', () => { this.onWindowResize(container, palette) });

        $(palette).on('mouseenter.trace3d.structure_select', (event) => {
            event.stopPropagation();
            globalEventBus.post({ type: "DidEnterGUI" });
        });

        $(palette).on('mouseleave.trace3d.structure_select', (event) => {
            event.stopPropagation();
            globalEventBus.post({ type: "DidLeaveGUI" });
        });

        this.$button_minus.on('click.trace3d_structure_select_button_minus', (e) => {

            let number = parseInt(currentStructureKey);
            number = clamp(number - 1, 0, (this.keys.length - 1));
            currentStructureKey = number.toString();

            this.$input.val(currentStructureKey);

            globalEventBus.post({ type: "DidSelectStructure", data: currentStructureKey });
        });

        this.$button_plus.on('click.trace3d_structure_select_button_plus', (e) => {

            let number = parseInt(currentStructureKey);
            number = clamp(number + 1, 0, (this.keys.length - 1));
            currentStructureKey = number.toString();

            this.$input.val(currentStructureKey);

            globalEventBus.post({ type: "DidSelectStructure", data: currentStructureKey });
        });

        this.$input.on('keyup.trace3d_structure_select_input', (e) => {

            // enter (return) key pressed
            if (13 === e.keyCode) {

                let number = parseInt( this.$input.val() );
                number = clamp(number, 0, (this.keys.length - 1));

                currentStructureKey = number.toString();
                this.$input.val(currentStructureKey);

                globalEventBus.post({ type: "DidSelectStructure", data: currentStructureKey });
            }

        });

    }

    configure({ structures, initialStructureKey }) {

        this.keys = Object.keys(structures);
        this.$header.text(this.keys.length + ' structures');

        currentStructureKey = initialStructureKey;
        this.$input.val(currentStructureKey);

    }

    onWindowResize(container, palette) {
        layout(container, palette);
    };

}

let layout = (container, element) => {

    // const { left, top, right, bottom, x, y, width, height } = container.getBoundingClientRect();
    const rectContainer = container.getBoundingClientRect();
    const rectElement = element.getBoundingClientRect();

    const left = 0.125 * rectElement.width;
    const top = (rectContainer.height - rectElement.height)/2;
    $(element).offset( { left, top } );

};

export default StructureSelect;
