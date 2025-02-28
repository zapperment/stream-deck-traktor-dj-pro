import { action } from "@elgato/streamdeck";
import { ToggleTraktorAction } from "./ToggleTraktorAction";
import { controller, deck } from "../config";

/**
 * Play deck A
 */
@action({ UUID: "rocks.zapperment.traktor-pro.play-a" })
export class PlayA extends ToggleTraktorAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      controller: controller.isPlaying,
      deck: deck.a,
      key: "playA",
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
