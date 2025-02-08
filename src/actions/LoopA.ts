import { action } from "@elgato/streamdeck";
import { TraktorControlledAction } from "./TraktorControlledAction";

/**
 * Turns loop on deck A on and off
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.loop-a" })
export class LoopA extends TraktorControlledAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      key: "loopA",
      img: {
        onCold: "imgs/actions/loop/loop-active-cold.svg",
        onHot: "imgs/actions/loop/loop-active-hot.svg",
        offCold: "imgs/actions/loop/loop-inactive-cold.svg",
        offHot: "imgs/actions/loop/loop-inactive-hot.svg",
      },
      handleKeyDown,
    });
  }
}
