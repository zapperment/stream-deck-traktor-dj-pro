import { action } from "@elgato/streamdeck";
import { ToggleTraktorAction } from "./ToggleTraktorAction";
import { controller, deck } from "../config";

/**
 * Loop control 8 deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.loop-control-8-a" })
export class LoopControl8A extends ToggleTraktorAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      controller: controller.loopSetTo8,
      deck: deck.a,
      key: "loopControl8A",
      img: {
        onCold: "imgs/actions/loop-control-8/loop-control-8-active-cold.svg",
        onHot: "imgs/actions/loop-control-8/loop-control-8-active-hot.svg",
        offCold: "imgs/actions/loop-control-8/loop-control-8-inactive-cold.svg",
        offHot: "imgs/actions/loop-control-8/loop-control-8-inactive-hot.svg",
      },
      handleKeyDown,
    });
  }
}
