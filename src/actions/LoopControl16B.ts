import { action } from "@elgato/streamdeck";
import { ToggleTraktorAction } from "./ToggleTraktorAction";
import { controller, deck } from "../config";

/**
 * Loop control 16 deck B
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.loop-control-16-b" })
export class LoopControl16B extends ToggleTraktorAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      controller: controller.loopSetTo16,
      deck: deck.b,
      key: "loopControl16B",
      img: {
        onCold: "imgs/actions/loop-control-16/loop-control-16-active-cold.svg",
        onHot: "imgs/actions/loop-control-16/loop-control-16-active-hot.svg",
        offCold:
          "imgs/actions/loop-control-16/loop-control-16-inactive-cold.svg",
        offHot: "imgs/actions/loop-control-16/loop-control-16-inactive-hot.svg",
      },
      handleKeyDown,
    });
  }
}
