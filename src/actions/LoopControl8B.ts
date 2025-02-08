import { action } from "@elgato/streamdeck";
import { TraktorControlledAction } from "./TraktorControlledAction";
import { controller, deck } from "../config";

/**
 * Selects loop size 8 beats and sets the loop on deck B
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.loop-control-8-b" })
export class LoopControl8B extends TraktorControlledAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      key: "loopControl8B",
      img: {
        onCold: "imgs/actions/loop-control-8/loop-control-8-active-cold.svg",
        onHot: "imgs/actions/loop-control-8/loop-control-8-active-hot.svg",
        offCold: "imgs/actions/loop-control-8/loop-control-8-inactive-cold.svg",
        offHot: "imgs/actions/loop-control-8/loop-control-8-inactive-hot.svg",
      },
      handleKeyDown,
      controller: controller.loopSetTo8,
      blockHot: false,
      deck: deck.b,
    });
  }
}
