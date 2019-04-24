import { makeDraggable } from "./draggable.js";
import {globalEventBus} from "./eventBus.js";
import { clamp } from './math.js'
import { moveOffScreen, moveOnScreen } from './utils.js';

let currentStructureKey = undefined;
class StructureSelectPanel {

    constructor({ container, panel, isHidden }) {

        this.container = container;
        this.$panel = $(panel);
        this.isHidden = isHidden;

        this.$header = $('#trace3d_structure_select_header');

        this.$input = $('#trace3d_structure_select_input');

        this.$button_minus = $('#trace3d_structure_select_button_minus');
        this.$button_plus = $('#trace3d_structure_select_button_plus');

        this.keys = undefined;

        if (isHidden) {
            moveOffScreen(this);
        } else {
            this.layout();
        }

        makeDraggable(panel, $(panel).find('.trace3d_card_drag_container').get(0));

        $(window).on('resize.trace3d.structure_select', () => { this.onWindowResize(container, panel) });

        $(panel).on('mouseenter.trace3d.structure_select', (event) => {
            event.stopPropagation();
            globalEventBus.post({ type: "DidEnterGUI" });
        });

        $(panel).on('mouseleave.trace3d.structure_select', (event) => {
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

        const handleKeyUp = (e) => {

            e.preventDefault();

            const arrowKeyControl =
                {
                    'ArrowLeft': () => { this.updateStructureKey(-1) },
                    'ArrowRight': () => { this.updateStructureKey( 1) },
                };

            if (arrowKeyControl[ e.key ]) {
                arrowKeyControl[ e.key ]();
            }
        };

        $(document).on('keyup.structure_select', handleKeyUp);

        globalEventBus.subscribe("ToggleUIControl", this);

    }

    receiveEvent({ type, data }) {

        if ("ToggleUIControl" === type && data && data.payload === this.$panel.attr('id')) {

            if (this.isHidden) {
                moveOnScreen(this);
            } else {
                moveOffScreen(this);
            }
            this.isHidden = !this.isHidden;
        }
    }

    updateStructureKey(value) {

        let number = parseInt(currentStructureKey);
        number = clamp(number + value, 0, (this.keys.length - 1));

        currentStructureKey = number.toString();

        this.$input.val(currentStructureKey);

        globalEventBus.post({ type: "DidSelectStructure", data: currentStructureKey });
    };

    configure({ structures, initialStructureKey }) {

        this.keys = Object.keys(structures);
        this.$header.text(this.keys.length + ' structures');

        currentStructureKey = initialStructureKey;
        this.$input.val(currentStructureKey);

    }

    onWindowResize() {
        if (false === this.isHidden) {
            this.layout();
        }
    }

    layout() {

        // const { left, top, right, bottom, x, y, width, height } = container.getBoundingClientRect();
        const { height: c_h } = this.container.getBoundingClientRect();
        const { width: w, height: h } = this.$panel.get(0).getBoundingClientRect();

        const left = 0.125 * w;
        // const top = (c_h - h)/2;
        const top = 0.5 * c_h;
        this.$panel.offset( { left, top } );
    }

}

export default StructureSelectPanel;
