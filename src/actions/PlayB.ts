import { action } from "@elgato/streamdeck";
import { ToggleTraktorAction } from "./ToggleTraktorAction";
import { controller, deck } from "../config";

/**
 * Play deck B
 */
@action({ UUID: "rocks.zapperment.traktor-pro.play-b" })
export class PlayB extends ToggleTraktorAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      controller: controller.isPlaying,
      deck: deck.b,
      key: "playB",
      img: {
        onCold: "imgs/actions/play-playing-cold.svg",
        onHot: "imgs/actions/play-playing-hot.svg",
        offCold: "imgs/actions/play-stopped-cold.svg",
        offHot: "imgs/actions/play-stopped-hot.svg",
      },
      handleKeyDown,
      blockHot: true,
    });
  }
}
