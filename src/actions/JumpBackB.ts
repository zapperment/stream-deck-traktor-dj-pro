import { action } from "@elgato/streamdeck";
import { TriggerTraktorAction } from "./TriggerTraktorAction";
import { deck } from "../config";

/**
 * Jump back deck B
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.jump-back-b" })
export class JumpBackB extends TriggerTraktorAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      deck: deck.b,
      key: "jumpBackB",
      img: {
        onCold: "imgs/actions/jump-back-pressed-cold.svg",
        onHot: "imgs/actions/jump-back-pressed-hot.svg",
        offCold: "imgs/actions/jump-back-normal-cold.svg",
        offHot: "imgs/actions/jump-back-normal-hot.svg",
      },
      handleKeyDown,
    });
  }
}
