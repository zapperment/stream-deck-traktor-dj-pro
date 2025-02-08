import { action } from "@elgato/streamdeck";
import { TraktorControlledAction } from "./TraktorControlledAction";

/**
 * Selects loop size 16 beats and sets the loop on deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.loop-control-16-a" })
export class LoopControl16A extends TraktorControlledAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      key: "loopControl16A",
      img: {
        onCold: "imgs/actions/loop-control-16/loop-control-16-active-cold.svg",
        onHot: "imgs/actions/loop-control-16/loop-control-16-active-hot.svg",
        offCold:
          "imgs/actions/loop-control-16/loop-control-16-inactive-cold.svg",
        offHot: "imgs/actions/loop-control-16/loop-control-16-inactive-hot.svg",
      },
      handleKeyDown,
    });
  }
}
