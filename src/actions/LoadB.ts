import { action } from "@elgato/streamdeck";
import { TriggerTraktorAction } from "./TriggerTraktorAction";
import { deck } from "../config";

/**
 * Load deck B
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.load-b" })
export class LoadB extends TriggerTraktorAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      deck: deck.b,
      key: "loadB",
      img: {
        onCold: "imgs/actions/load/load-pressed-cold.svg",
        onHot: "imgs/actions/load/load-pressed-hot.svg",
        offCold: "imgs/actions/load/load-normal-cold.svg",
        offHot: "imgs/actions/load/load-normal-hot.svg",
      },
      handleKeyDown,
      blockHot: true,
    });
  }
}
