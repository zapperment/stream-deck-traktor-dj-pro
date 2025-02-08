import { action } from "@elgato/streamdeck";
import { TraktorControlledAction } from "./TraktorControlledAction";

/**
 * Starts/stops playing deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.play-a" })
export class PlayA extends TraktorControlledAction {
  constructor(handleKeyDown: (key: Key) => void) {
    super({
      key: "playA",
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
