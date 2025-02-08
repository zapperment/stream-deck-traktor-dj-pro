import { action } from "@elgato/streamdeck";
import { TraktorControlledAction } from "./TraktorControlledAction";
import { deck, controller } from "../config";

/**
 * Cue deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.cue-a" })
export class CueA extends TraktorControlledAction {
  constructor(
    handleKeyDown: (key: Key) => void,
    handleKeyUp: (key: Key) => void,
  ) {
    super({
      key: "cueA",
      img: {
        onCold: "imgs/actions/cue/cue-pressed-cold.svg",
        onHot: "imgs/actions/cue/cue-pressed-hot.svg",
        offCold: "imgs/actions/cue/cue-normal-cold.svg",
        offHot: "imgs/actions/cue/cue-normal-hot.svg",
      },
      handleKeyDown,
      handleKeyUp,
      controller: controller.isCueing,
      blockHot: true,
      deck: deck.a,
    });
  }
}
