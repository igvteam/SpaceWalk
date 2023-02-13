import SpacewalkEventBus from "./spacewalkEventBus.js"
import {ensembleManager} from "./app.js"
import {clamp} from "./math.js"
import {StringUtils} from "igv-utils";

let numberForDisplay = undefined

class TraceSelect {

  constructor() {

      this.input = document.querySelector('#spacewalk_trace_select_input')
      this.input.addEventListener('keyup', async e => {

          // enter (return) key pressed
          if (13 === e.keyCode) {
              const total = await ensembleManager.getTraceCount()
              const number = parseInt(this.input.value, 10)
              await broadcastTraceSelection(this.input, getBroadcastValue(number, total, undefined), total)
          }

      })

      const button_minus = document.querySelector('#spacewalk_trace_select_button_minus')
      button_minus.addEventListener('click', async () => {
          const total = await ensembleManager.getTraceCount()
          await broadcastTraceSelection(this.input, getBroadcastValue(numberForDisplay, total, '-'), total)
      })

      const button_plus = document.querySelector('#spacewalk_trace_select_button_plus')
      button_plus.addEventListener('click', async () => {
          const total = await ensembleManager.getTraceCount()
          await broadcastTraceSelection(this.input, getBroadcastValue(numberForDisplay, total, '+'), total)
      });


      SpacewalkEventBus.globalBus.subscribe('DidLoadEnsembleFile', this)

  }

    receiveEvent({ type, data }) {
        if ("DidLoadEnsembleFile" === type) {

            (async () => {
                const total = await ensembleManager.getTraceCount()
                numberForDisplay = 1 + data.initialIndex
                this.input.value = getDisplayString(numberForDisplay, total)
            })()

        }
    }
}

function getDisplayString(number, total) {
    const str = `${ StringUtils.numberFormatter(number) } of ${ StringUtils.numberFormatter(total) }`
    return str
}

function getBroadcastValue(number, total, incrementOrDecrement) {

    if ('-' === incrementOrDecrement) {
        return clamp(number - 1, 1, total)
    } else if ('+' === incrementOrDecrement) {
        return clamp(number + 1, 1, total)
    } else {
        return clamp(number, 1, total)
    }

}
async function broadcastTraceSelection(input, number, total) {

    numberForDisplay = number

    input.value = getDisplayString(numberForDisplay, total)

    const index = numberForDisplay - 1

    ensembleManager.currentTrace = await ensembleManager.createTrace(index)
    ensembleManager.currentIndex = index

    SpacewalkEventBus.globalBus.post({ type: "DidSelectTrace", data: { trace: ensembleManager.currentTrace } })
}

export default TraceSelect
