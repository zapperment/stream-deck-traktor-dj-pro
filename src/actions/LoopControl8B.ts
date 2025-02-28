import { action } from "@elgato/streamdeck";
import { ToggleTraktorAction } from "./ToggleTraktorAction";
import { controller, deck } from "../config";

/**
 * Loop control 8 deck B
 */
@action({ UUID: "rocks.zapperment.traktor-pro.loop-control-8-b" })
export class LoopControl8B extends ToggleTraktorAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      controller: controller.loopSetTo8,
      deck: deck.b,
      key: "loopControl8B",
      img: {
        onCold: "imgs/actions/loop-control-8-active-cold.svg",
        onHot: "imgs/actions/loop-control-8-active-hot.svg",
        offCold: "imgs/actions/loop-control-8-inactive-cold.svg",
        offHot: "imgs/actions/loop-control-8-inactive-hot.svg",
      },
      handleKeyDown,
    });
  }
}
