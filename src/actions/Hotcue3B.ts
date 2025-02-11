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
        unassignedCold: "imgs/actions/hotcue-3-unassigned-cold.svg",
        unassignedHot: "imgs/actions/hotcue-3-unassigned-hot.svg",
        floatingCold: "imgs/actions/hotcue-3-floating-cold.svg",
        floatingHot: "imgs/actions/hotcue-3-floating-hot.svg",
        cuepointCold: "imgs/actions/hotcue-3-cuepoint-cold.svg",
        cuepointHot: "imgs/actions/hotcue-3-cuepoint-hot.svg",
        loadCold: "imgs/actions/hotcue-3-load-cold.svg",
        loadHot: "imgs/actions/hotcue-3-load-hot.svg",
        fadeCold: "imgs/actions/hotcue-3-fade-cold.svg",
        fadeHot: "imgs/actions/hotcue-3-fade-hot.svg",
        loopCold: "imgs/actions/hotcue-3-loop-cold.svg",
        loopHot: "imgs/actions/hotcue-3-loop-hot.svg",
      },
      handleKeyDown,
      handleKeyUp,
    });
  }
}
