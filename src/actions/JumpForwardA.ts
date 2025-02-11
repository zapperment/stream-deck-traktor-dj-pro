import { action } from "@elgato/streamdeck";
import { TriggerTraktorAction } from "./TriggerTraktorAction";
import { deck } from "../config";

/**
 * Jump forward deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.jump-forward-a" })
export class JumpForwardA extends TriggerTraktorAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      deck: deck.a,
      key: "jumpForwardA",
      img: {
        onCold: "imgs/actions/jump-forward-pressed-cold.svg",
        onHot: "imgs/actions/jump-forward-pressed-hot.svg",
        offCold: "imgs/actions/jump-forward-normal-cold.svg",
        offHot: "imgs/actions/jump-forward-normal-hot.svg",
      },
      handleKeyDown,
    });
  }
}
