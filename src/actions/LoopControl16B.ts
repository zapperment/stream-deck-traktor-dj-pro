import { action } from "@elgato/streamdeck";
import { TraktorControlledAction } from "./TraktorControlledAction";
import { controller, deck } from "../config";

/**
 * Selects loop size 16 beats and sets the loop on deck B
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.loop-control-16-b" })
export class LoopControl16B extends TraktorControlledAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      key: "loopControl16B",
      img: {
        onCold: "imgs/actions/loop-control-16/loop-control-16-active-cold.svg",
        onHot: "imgs/actions/loop-control-16/loop-control-16-active-hot.svg",
        offCold:
          "imgs/actions/loop-control-16/loop-control-16-inactive-cold.svg",
        offHot: "imgs/actions/loop-control-16/loop-control-16-inactive-hot.svg",
      },
      handleKeyDown,
      controller: controller.loopSetTo16,
      blockHot: false,
      deck: deck.b,
    });
  }
}
