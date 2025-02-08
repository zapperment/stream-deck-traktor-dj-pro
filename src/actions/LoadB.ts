import { action } from "@elgato/streamdeck";
import { Load } from "./Load";

/**
 * Load deck B
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.load-b" })
export class LoadB extends Load {
  override async onKeyDown(): Promise<void> {
    this.updateKey({
      isPressed: true,
    });
    this.handleKeyDown("loadB");
  }

  override async onKeyUp(): Promise<void> {
    this.updateKey({
      isPressed: false,
    });
    this.handleKeyUp("loadB");
  }
}
