import { action } from "@elgato/streamdeck";
import { ToggleTraktorAction } from "./ToggleTraktorAction";
import { controller, deck } from "../config";

/**
 * Play deck B
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.play-b" })
export class PlayB extends ToggleTraktorAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      controller: controller.isPlaying,
      deck: deck.b,
      key: "playB",
      img: {
        onCold: "imgs/actions/play/play-playing-cold.svg",
        onHot: "imgs/actions/play/play-playing-hot.svg",
        offCold: "imgs/actions/play/play-stopped-cold.svg",
        offHot: "imgs/actions/play/play-stopped-hot.svg",
      },
      handleKeyDown,
      blockHot: true,
    });
  }
}
