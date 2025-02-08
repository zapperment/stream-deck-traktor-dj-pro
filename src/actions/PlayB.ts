import { action } from "@elgato/streamdeck";
import { TraktorControlledAction } from "./TraktorControlledAction";
import { controller, deck } from "../config";

/**
 * Starts/stops playing deck B
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.play-b" })
export class PlayB extends TraktorControlledAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      key: "playB",
      img: {
        onCold: "imgs/actions/play/play-playing-cold.svg",
        onHot: "imgs/actions/play/play-playing-hot.svg",
        offCold: "imgs/actions/play/play-stopped-cold.svg",
        offHot: "imgs/actions/play/play-stopped-hot.svg",
      },
      handleKeyDown,
      controller: controller.isPlaying,
      blockHot: true,
      deck: deck.b,
    });
  }
}
