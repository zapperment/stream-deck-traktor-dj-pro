import { action } from "@elgato/streamdeck";
import { Load } from "./Load";

/**
 * Load deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.load-a" })
export class LoadA extends Load {
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
