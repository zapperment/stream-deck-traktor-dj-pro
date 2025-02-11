import { action } from "@elgato/streamdeck";
import { GateTraktorAction } from "./GateTraktorAction";
import { controller, deck } from "../config";

/**
 * Cue deck B
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.cue-b" })
export class CueB extends GateTraktorAction {
  constructor(
    handleKeyDown: (key: Key) => void,
    handleKeyUp: (key: Key) => void,
  ) {
    super({
      controller: controller.isCueing,
      deck: deck.b,
      key: "cueB",
      img: {
        onCold: "imgs/actions/cue-pressed-cold.svg",
        onHot: "imgs/actions/cue-pressed-hot.svg",
        offCold: "imgs/actions/cue-normal-cold.svg",
        offHot: "imgs/actions/cue-normal-hot.svg",
      },
      handleKeyDown,
      handleKeyUp,
      blockHot: true,
    });
  }
}
