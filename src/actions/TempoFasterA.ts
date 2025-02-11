import { action } from "@elgato/streamdeck";
import { TriggerTraktorAction } from "./TriggerTraktorAction";
import { deck } from "../config";

/**
 * Tempo faster deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.tempo-faster-a" })
export class TempoFasterA extends TriggerTraktorAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      deck: deck.a,
      key: "tempoFasterA",
      img: {
        onCold: "imgs/actions/tempo-faster-pressed-cold.svg",
        onHot: "imgs/actions/tempo-faster-pressed-hot.svg",
        offCold: "imgs/actions/tempo-faster-normal-cold.svg",
        offHot: "imgs/actions/tempo-faster-normal-hot.svg",
      },
      handleKeyDown,
    });
  }
}
