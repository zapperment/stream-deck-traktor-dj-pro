import { action } from "@elgato/streamdeck";
import { ToggleTraktorAction } from "./ToggleTraktorAction";
import { controller, deck } from "../config";

/**
 * Loop deck B
 */
@action({ UUID: "rocks.zapperment.traktor-pro.loop-b" })
export class LoopB extends ToggleTraktorAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      controller: controller.isLooping,
      deck: deck.b,
      key: "loopB",
      img: {
        onCold: "imgs/actions/loop-active-cold.svg",
        onHot: "imgs/actions/loop-active-hot.svg",
        offCold: "imgs/actions/loop-inactive-cold.svg",
        offHot: "imgs/actions/loop-inactive-hot.svg",
      },
      handleKeyDown,
    });
  }
}
