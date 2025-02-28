import { action } from "@elgato/streamdeck";
import { HotcueTraktorAction } from "./HotcueTraktorAction";
import { deck } from "../config";

/**
 * Hotcue 4 on deck A
 */
@action({ UUID: "rocks.zapperment.traktor-pro.hotcue-4-a" })
export class Hotcue4A extends HotcueTraktorAction {
  constructor(
    handleKeyDown: (key: Key) => void,
    handleKeyUp: (key: Key) => void,
  ) {
    super({
      deck: deck.a,
      key: "hotcue4A",
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
