import { action } from "@elgato/streamdeck";
import { HotcueTraktorAction } from "./HotcueTraktorAction";
import { deck } from "../config";

/**
 * Hotcue 4 on deck B
 */
@action({ UUID: "rocks.zapperment.traktor-pro.hotcue-4-b" })
export class Hotcue4B extends HotcueTraktorAction {
  constructor(
    handleKeyDown: (key: Key) => void,
    handleKeyUp: (key: Key) => void,
  ) {
    super({
      deck: deck.b,
      key: "hotcue4B",
      img: {
        unassignedCold: "imgs/actions/hotcue-4-unassigned-cold.svg",
        unassignedHot: "imgs/actions/hotcue-4-unassigned-hot.svg",
        floatingCold: "imgs/actions/hotcue-4-floating-cold.svg",
        floatingHot: "imgs/actions/hotcue-4-floating-hot.svg",
        cuepointCold: "imgs/actions/hotcue-4-cuepoint-cold.svg",
        cuepointHot: "imgs/actions/hotcue-4-cuepoint-hot.svg",
        loadCold: "imgs/actions/hotcue-4-load-cold.svg",
        loadHot: "imgs/actions/hotcue-4-load-hot.svg",
        fadeCold: "imgs/actions/hotcue-4-fade-cold.svg",
        fadeHot: "imgs/actions/hotcue-4-fade-hot.svg",
        loopCold: "imgs/actions/hotcue-4-loop-cold.svg",
        loopHot: "imgs/actions/hotcue-4-loop-hot.svg",
      },
      handleKeyDown,
      handleKeyUp,
    });
  }
}
