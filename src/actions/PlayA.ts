import { action } from "@elgato/streamdeck";
import { Play } from "./Play";

/**
 * Starts/stops playing deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.play-a" })
export class PlayA extends Play {
  override async onKeyDown(): Promise<void> {
    this.handleKeyDown("playA");
  }
}
