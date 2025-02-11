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
        unassignedCold: "imgs/actions/hotcue-1-unassigned-cold.svg",
        unassignedHot: "imgs/actions/hotcue-1-unassigned-hot.svg",
        floatingCold: "imgs/actions/hotcue-1-floating-cold.svg",
        floatingHot: "imgs/actions/hotcue-1-floating-hot.svg",
        cuepointCold: "imgs/actions/hotcue-1-cuepoint-cold.svg",
        cuepointHot: "imgs/actions/hotcue-1-cuepoint-hot.svg",
        loadCold: "imgs/actions/hotcue-1-load-cold.svg",
        loadHot: "imgs/actions/hotcue-1-load-hot.svg",
        fadeCold: "imgs/actions/hotcue-1-fade-cold.svg",
        fadeHot: "imgs/actions/hotcue-1-fade-hot.svg",
        loopCold: "imgs/actions/hotcue-1-loop-cold.svg",
        loopHot: "imgs/actions/hotcue-1-loop-hot.svg",
      },
      handleKeyDown,
      handleKeyUp,
    });
  }
}
