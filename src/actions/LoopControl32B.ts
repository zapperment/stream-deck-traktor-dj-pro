import { action } from "@elgato/streamdeck";
import { ToggleTraktorAction } from "./ToggleTraktorAction";
import { controller, deck } from "../config";

/**
 * Loop control 32 deck B
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.loop-control-32-b" })
export class LoopControl32B extends ToggleTraktorAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      controller: controller.loopSetTo32,
      deck: deck.b,
      key: "loopControl32B",
      img: {
        onCold: "imgs/actions/loop-control-32-active-cold.svg",
        onHot: "imgs/actions/loop-control-32-active-hot.svg",
        offCold: "imgs/actions/loop-control-32-inactive-cold.svg",
        offHot: "imgs/actions/loop-control-32-inactive-hot.svg",
      },
      handleKeyDown,
    });
  }
}
