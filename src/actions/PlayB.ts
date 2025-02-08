import { action } from "@elgato/streamdeck";
import { Play } from "./Play";
import { TraktorControlledAction } from "./TraktorControlledAction";

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
    });
  }
}
