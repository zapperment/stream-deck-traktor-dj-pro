import { action } from "@elgato/streamdeck";
import { TraktorControlledAction } from "./TraktorControlledAction";
import { controller, deck } from "../config";
/**
 * Cue deck B
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.cue-b" })
export class CueB extends TraktorControlledAction {
  constructor(
    handleKeyDown: (key: Key) => void,
    handleKeyUp: (key: Key) => void,
  ) {
    super({
      key: "cueB",
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
      deck: deck.b,
    });
  }
}
