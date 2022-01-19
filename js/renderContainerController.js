import SpacewalkEventBus from './spacewalkEventBus.js'
import { configureRenderContainerDrag } from './renderContainerDrag.js'
import { traceNavigator } from './app.js'

class RenderContainerController {

    constructor(rootContainer, sceneManager) {

        this.rootContainer = rootContainer
        this.threejsContainer = rootContainer.querySelector('#spacewalk-threejs-container')

        this.setTopLeftPercentages(this.rootContainer, this.threejsContainer)


        const config =
            {
                handles: "w, sw, s, se, e",
                autoHide: true,
                aspectRatio: true,
                helper: "spacewalk-threejs-container-resizable-helper",
                stop: () => {
                    sceneManager.resizeContainer()
                    traceNavigator.resize(sceneManager.container)
                }
            };

        $(sceneManager.container).resizable(config)

        const dragConfig =
            {
                target: this.threejsContainer,
                handle: this.threejsContainer.querySelector('#spacewalk-threejs-drag-container'),
                container: this.rootContainer,
                topConstraint: document.querySelector('.navbar').getBoundingClientRect().height
            }

        configureRenderContainerDrag(dragConfig)

        // SpacewalkEventBus.globalBus.subscribe("AppWindowDidResize", this);
        // SpacewalkEventBus.globalBus.subscribe("DidEndRenderContainerDrag", this);

        this.sceneManager = sceneManager;

    }

    setTopLeftPercentages(rootContainer, threejsContainer) {

        const { width, height } = rootContainer.getBoundingClientRect();
        const { left, top } = threejsContainer.getBoundingClientRect();

        this.leftPercent = left / width;
        this.topPercent = top / height;
    }

    getOffset(rootContainer) {
        const { width, height } = rootContainer.getBoundingClientRect();
        const left = Math.floor(this.leftPercent * width);
        const top = Math.floor(this.topPercent * height);
        return { top, left };
    }

    receiveEvent({ type, data }) {

        if ('AppWindowDidResize' === type) {
            $(this.threejsContainer).offset(this.getOffset(this.rootContainer))
        } else if ('DidEndRenderContainerDrag' === type) {
            this.setTopLeftPercentages(this.rootContainer, this.threejsContainer)
        }
    }

}

export default RenderContainerController
