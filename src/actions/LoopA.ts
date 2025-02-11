import { action } from "@elgato/streamdeck";
import { ToggleTraktorAction } from "./ToggleTraktorAction";
import { controller, deck } from "../config";

/**
 * Loop deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.loop-a" })
export class LoopA extends ToggleTraktorAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      controller: controller.isLooping,
      deck: deck.a,
      key: "loopA",
      img: {
        onCold: "imgs/actions/loop-active-cold.svg",
        onHot: "imgs/actions/loop-active-hot.svg",
        offCold: "imgs/actions/loop-inactive-cold.svg",
        offHot: "imgs/actions/loop-inactive-hot.svg",
      },
      handleKeyDown,
    });
  }
}
