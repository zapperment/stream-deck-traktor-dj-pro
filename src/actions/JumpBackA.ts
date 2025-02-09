import { action } from "@elgato/streamdeck";
import { TriggerTraktorAction } from "./TriggerTraktorAction";
import { deck } from "../config";

/**
 * Jump back deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.jump-back-a" })
export class JumpBackA extends TriggerTraktorAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      deck: deck.a,
      key: "jumpBackA",
      img: {
        onCold: "imgs/actions/jump-back/jump-back-pressed-cold.svg",
        onHot: "imgs/actions/jump-back/jump-back-pressed-hot.svg",
        offCold: "imgs/actions/jump-back/jump-back-normal-cold.svg",
        offHot: "imgs/actions/jump-back/jump-back-normal-hot.svg",
      },
      handleKeyDown,
    });
  }
}
