import { action } from "@elgato/streamdeck";
import { TriggerTraktorAction } from "./TriggerTraktorAction";
import { deck } from "../config";

/**
 * Tempo faster deck B
 */
@action({ UUID: "rocks.zapperment.traktor-pro.tempo-faster-b" })
export class TempoFasterB extends TriggerTraktorAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      deck: deck.b,
      key: "tempoFasterB",
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
