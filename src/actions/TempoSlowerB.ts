import { action } from "@elgato/streamdeck";
import { TriggerTraktorAction } from "./TriggerTraktorAction";
import { deck } from "../config";

/**
 * Tempo slower deck B
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.tempo-slower-b" })
export class TempoSlowerB extends TriggerTraktorAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      deck: deck.b,
      key: "tempoSlowerB",
      img: {
        onCold: "imgs/actions/tempo-slower/tempo-slower-pressed-cold.svg",
        onHot: "imgs/actions/tempo-slower/tempo-slower-pressed-hot.svg",
        offCold: "imgs/actions/tempo-slower/tempo-slower-normal-cold.svg",
        offHot: "imgs/actions/tempo-slower/tempo-slower-normal-hot.svg",
      },
      handleKeyDown,
    });
  }
}
