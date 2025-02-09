import { action } from "@elgato/streamdeck";
import { ToggleTraktorAction } from "./ToggleTraktorAction";
import { controller, deck } from "../config";

/**
 * Loop control 32 deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.loop-control-32-a" })
export class LoopControl32A extends ToggleTraktorAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      controller: controller.loopSetTo32,
      deck: deck.a,
      key: "loopControl32A",
      img: {
        onCold: "imgs/actions/loop-control-32/loop-control-32-active-cold.svg",
        onHot: "imgs/actions/loop-control-32/loop-control-32-active-hot.svg",
        offCold:
          "imgs/actions/loop-control-32/loop-control-32-inactive-cold.svg",
        offHot: "imgs/actions/loop-control-32/loop-control-32-inactive-hot.svg",
      },
      handleKeyDown,
    });
  }
}
