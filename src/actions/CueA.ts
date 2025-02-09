import { action } from "@elgato/streamdeck";
import { GateTraktorAction } from "./GateTraktorAction";
import { deck, controller } from "../config";

/**
 * Cue deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.cue-a" })
export class CueA extends GateTraktorAction {
  constructor(
    handleKeyDown: (key: Key) => void,
    handleKeyUp: (key: Key) => void,
  ) {
    super({
      controller: controller.isCueing,
      deck: deck.a,
      key: "cueA",
      img: {
        onCold: "imgs/actions/cue/cue-pressed-cold.svg",
        onHot: "imgs/actions/cue/cue-pressed-hot.svg",
        offCold: "imgs/actions/cue/cue-normal-cold.svg",
        offHot: "imgs/actions/cue/cue-normal-hot.svg",
      },
      handleKeyDown,
      handleKeyUp,
      blockHot: true,
    });
  }
}
