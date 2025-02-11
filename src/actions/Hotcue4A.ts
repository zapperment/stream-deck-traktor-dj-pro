import { action } from "@elgato/streamdeck";
import { HotcueTraktorAction } from "./HotcueTraktorAction";
import { deck } from "../config";

/**
 * Hotcue 4 on deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.hotcue-4-a" })
export class Hotcue4A extends HotcueTraktorAction {
  constructor(
    handleKeyDown: (key: Key) => void,
    handleKeyUp: (key: Key) => void,
  ) {
    super({
      deck: deck.a,
      key: "hotcue4A",
      img: {
        unassignedCold: "hotcue-4-unassigned-cold.png",
        unassignedHot: "hotcue-4-unassigned-hot.png",
        floatingCold: "hotcue-4-floating-cold.png",
        floatingHot: "hotcue-4-floating-hot.png",
        cuepointCold: "hotcue-4-cuepoint-cold.png",
        cuepointHot: "hotcue-4-cuepoint-hot.png",
        loadCold: "hotcue-4-load-cold.png",
        loadHot: "hotcue-4-load-hot.png",
        fadeCold: "hotcue-4-fade-cold.png",
        fadeHot: "hotcue-4-fade-hot.png",
        loopCold: "hotcue-4-loop-cold.png",
        loopHot: "hotcue-4-loop-hot.png",
      },
      handleKeyDown,
      handleKeyUp,
    });
  }
}
