import { action } from "@elgato/streamdeck";
import { TriggerTraktorAction } from "./TriggerTraktorAction";
import { deck } from "../config";

/**
 * Tempo slower deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.tempo-slower-a" })
export class TempoSlowerA extends TriggerTraktorAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      deck: deck.a,
      key: "tempoSlowerA",
      img: {
        onCold: "imgs/actions/tempo-slower-pressed-cold.svg",
        onHot: "imgs/actions/tempo-slower-pressed-hot.svg",
        offCold: "imgs/actions/tempo-slower-normal-cold.svg",
        offHot: "imgs/actions/tempo-slower-normal-hot.svg",
      },
      handleKeyDown,
    });
  }
}
