import { action } from "@elgato/streamdeck";
import { TriggerTraktorAction } from "./TriggerTraktorAction";
import { deck } from "../config";

/**
 * Load deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.load-a" })
export class LoadA extends TriggerTraktorAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      deck: deck.a,
      key: "loadA",
      img: {
        onCold: "imgs/actions/load-pressed-cold.svg",
        onHot: "imgs/actions/load-pressed-hot.svg",
        offCold: "imgs/actions/load-normal-cold.svg",
        offHot: "imgs/actions/load-normal-hot.svg",
      },
      handleKeyDown,
      blockHot: true,
    });
  }
}
