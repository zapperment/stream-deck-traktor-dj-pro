import { action } from "@elgato/streamdeck";
import { TraktorControlledAction } from "./TraktorControlledAction";

/**
 * Selects loop size 8 beats and sets the loop on deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.loop-control-8-a" })
export class LoopControl8A extends TraktorControlledAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
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
