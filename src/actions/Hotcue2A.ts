import { action } from "@elgato/streamdeck";
import { HotcueTraktorAction } from "./HotcueTraktorAction";
import { deck } from "../config";

/**
 * Hotcue 2 on deck A
 */
@action({ UUID: "rocks.zapperment.traktor-pro.hotcue-2-a" })
export class Hotcue2A extends HotcueTraktorAction {
  constructor(
    handleKeyDown: (key: Key) => void,
    handleKeyUp: (key: Key) => void,
  ) {
    super({
      deck: deck.a,
      key: "hotcue2A",
      img: {
        unassignedCold: "imgs/actions/hotcue-2-unassigned-cold.svg",
        unassignedHot: "imgs/actions/hotcue-2-unassigned-hot.svg",
        floatingCold: "imgs/actions/hotcue-2-floating-cold.svg",
        floatingHot: "imgs/actions/hotcue-2-floating-hot.svg",
        cuepointCold: "imgs/actions/hotcue-2-cuepoint-cold.svg",
        cuepointHot: "imgs/actions/hotcue-2-cuepoint-hot.svg",
        loadCold: "imgs/actions/hotcue-2-load-cold.svg",
        loadHot: "imgs/actions/hotcue-2-load-hot.svg",
        fadeCold: "imgs/actions/hotcue-2-fade-cold.svg",
        fadeHot: "imgs/actions/hotcue-2-fade-hot.svg",
        loopCold: "imgs/actions/hotcue-2-loop-cold.svg",
        loopHot: "imgs/actions/hotcue-2-loop-hot.svg",
      },
      handleKeyDown,
      handleKeyUp,
    });
  }
}
