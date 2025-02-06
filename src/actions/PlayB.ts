import { action } from "@elgato/streamdeck";
import { Play } from "./play";

/**
 * Starts/stops playing deck B
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.play-b" })
export class PlayB extends Play {
  override async onKeyDown(): Promise<void> {
    this.handleKeyDown("playB");
  }
}