import { action } from "@elgato/streamdeck";
import { HotcueTraktorAction } from "./HotcueTraktorAction";
import { deck } from "../config";

/**
 * Hotcue 3 on deck B
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.hotcue-3-b" })
export class Hotcue3B extends HotcueTraktorAction {
  constructor(
    handleKeyDown: (key: Key) => void,
    handleKeyUp: (key: Key) => void,
  ) {
    super({
      deck: deck.b,
      key: "hotcue3B",
      img: {
        unassignedCold: "hotcue-3-unassigned-cold.png",
        unassignedHot: "hotcue-3-unassigned-hot.png",
        floatingCold: "hotcue-3-floating-cold.png",
        floatingHot: "hotcue-3-floating-hot.png",
        cuepointCold: "hotcue-3-cuepoint-cold.png",
        cuepointHot: "hotcue-3-cuepoint-hot.png",
        loadCold: "hotcue-3-load-cold.png",
        loadHot: "hotcue-3-load-hot.png",
        fadeCold: "hotcue-3-fade-cold.png",
        fadeHot: "hotcue-3-fade-hot.png",
        loopCold: "hotcue-3-loop-cold.png",
        loopHot: "hotcue-3-loop-hot.png",
      },
      handleKeyDown,
      handleKeyUp,
    });
  }
}
