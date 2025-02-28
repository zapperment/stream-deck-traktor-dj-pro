import { action } from "@elgato/streamdeck";
import { ToggleTraktorAction } from "./ToggleTraktorAction";
import { controller, deck } from "../config";

/**
 * Loop control 16 deck A
 */
@action({ UUID: "rocks.zapperment.traktor-pro.loop-control-16-a" })
export class LoopControl16A extends ToggleTraktorAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      controller: controller.loopSetTo16,
      deck: deck.a,
      key: "loopControl16A",
      img: {
        onCold: "imgs/actions/loop-control-16-active-cold.svg",
        onHot: "imgs/actions/loop-control-16-active-hot.svg",
        offCold: "imgs/actions/loop-control-16-inactive-cold.svg",
        offHot: "imgs/actions/loop-control-16-inactive-hot.svg",
      },
      handleKeyDown,
    });
  }
}
