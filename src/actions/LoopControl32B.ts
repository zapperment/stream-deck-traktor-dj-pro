import { action } from "@elgato/streamdeck";
import { TraktorControlledAction } from "./TraktorControlledAction";
import { controller, deck } from "../config";

/**
 * Selects loop size 32 beats and sets the loop on deck B
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.loop-control-32-b" })
export class LoopControl32B extends TraktorControlledAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      key: "loopControl32B",
      img: {
        onCold: "imgs/actions/loop-control-32/loop-control-32-active-cold.svg",
        onHot: "imgs/actions/loop-control-32/loop-control-32-active-hot.svg",
        offCold:
          "imgs/actions/loop-control-32/loop-control-32-inactive-cold.svg",
        offHot: "imgs/actions/loop-control-32/loop-control-32-inactive-hot.svg",
      },
      handleKeyDown,
      controller: controller.loopSetTo32,
      blockHot: false,
      deck: deck.b,
    });
  }
}
