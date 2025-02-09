import { action } from "@elgato/streamdeck";
import { TriggerTraktorAction } from "./TriggerTraktorAction";
import { deck } from "../config";

/**
 * Jump forward deck B
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.jump-forward-b" })
export class JumpForwardB extends TriggerTraktorAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      deck: deck.b,
      key: "jumpForwardB",
      img: {
        onCold: "imgs/actions/jump-forward/jump-forward-pressed-cold.svg",
        onHot: "imgs/actions/jump-forward/jump-forward-pressed-hot.svg",
        offCold: "imgs/actions/jump-forward/jump-forward-normal-cold.svg",
        offHot: "imgs/actions/jump-forward/jump-forward-normal-hot.svg",
      },
      handleKeyDown,
    });
  }
}
