import { action } from "@elgato/streamdeck";
import { HotcueTraktorAction } from "./HotcueTraktorAction";
import { deck } from "../config";

/**
 * Hotcue 2 on deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.hotcue-2-a" })
export class Hotcue2A extends HotcueTraktorAction {
  constructor(
    handleKeyDown: (key: Key) => void,
    handleKeyUp: (key: Key) => void,
  ) {
    super({
      deck: deck.a,
      key: "hotcue2A",
      img: {
        unassignedCold: "hotcue-2-unassigned-cold.png",
        unassignedHot: "hotcue-2-unassigned-hot.png",
        floatingCold: "hotcue-2-floating-cold.png",
        floatingHot: "hotcue-2-floating-hot.png",
        cuepointCold: "hotcue-2-cuepoint-cold.png",
        cuepointHot: "hotcue-2-cuepoint-hot.png",
        loadCold: "hotcue-2-load-cold.png",
        loadHot: "hotcue-2-load-hot.png",
        fadeCold: "hotcue-2-fade-cold.png",
        fadeHot: "hotcue-2-fade-hot.png",
        loopCold: "hotcue-2-loop-cold.png",
        loopHot: "hotcue-2-loop-hot.png",
      },
      handleKeyDown,
      handleKeyUp,
    });
  }
}
