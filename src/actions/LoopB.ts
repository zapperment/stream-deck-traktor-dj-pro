import { action } from "@elgato/streamdeck";
import { TraktorControlledAction } from "./TraktorControlledAction";
import { controller, deck } from "../config";
/**
 * Turns loop on deck B on and off
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.loop-b" })
export class LoopB extends TraktorControlledAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      key: "loopB",
      img: {
        onCold: "imgs/actions/loop/loop-active-cold.svg",
        onHot: "imgs/actions/loop/loop-active-hot.svg",
        offCold: "imgs/actions/loop/loop-inactive-cold.svg",
        offHot: "imgs/actions/loop/loop-inactive-hot.svg",
      },
      handleKeyDown,
      controller: controller.isLooping,
      blockHot: false,
      deck: deck.b,
    });
  }
}
