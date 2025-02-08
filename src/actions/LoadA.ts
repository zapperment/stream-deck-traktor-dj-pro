import { action } from "@elgato/streamdeck";
import { Load } from "./Load";
import { deck } from "../config";
/**
 * Load deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.load-a" })
export class LoadA extends Load {
  constructor(
    handleKeyDown: (key: Key) => void,
    handleKeyUp: (key: Key) => void,
  ) {
    super(handleKeyDown, handleKeyUp, deck.a);
  }

  override async onKeyDown(): Promise<void> {
    this.updateKey({
      isOn: true,
    });
    this.handleKeyDown("loadA");
  }

  override async onKeyUp(): Promise<void> {
    this.updateKey({
      isOn: false,
    });
    this.handleKeyUp("loadA");
  }
}
