import { action } from "@elgato/streamdeck";
import { HotcueTraktorAction } from "./HotcueTraktorAction";
import { deck } from "../config";

/**
 * Hotcue 1 on deck B
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.hotcue-1-b" })
export class Hotcue1B extends HotcueTraktorAction {
  constructor(
    handleKeyDown: (key: Key) => void,
    handleKeyUp: (key: Key) => void,
  ) {
    super({
      deck: deck.b,
      key: "hotcue1B",
      img: {
        unassignedCold: "hotcue-1-unassigned-cold.png",
        unassignedHot: "hotcue-1-unassigned-hot.png",
        floatingCold: "hotcue-1-floating-cold.png",
        floatingHot: "hotcue-1-floating-hot.png",
        cuepointCold: "hotcue-1-cuepoint-cold.png",
        cuepointHot: "hotcue-1-cuepoint-hot.png",
        loadCold: "hotcue-1-load-cold.png",
        loadHot: "hotcue-1-load-hot.png",
        fadeCold: "hotcue-1-fade-cold.png",
        fadeHot: "hotcue-1-fade-hot.png",
        loopCold: "hotcue-1-loop-cold.png",
        loopHot: "hotcue-1-loop-hot.png",
      },
      handleKeyDown,
      handleKeyUp,
    });
  }
}
