import { action } from "@elgato/streamdeck";
import { Cue } from "./Cue";

/**
 * Cue deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.cue-a" })
export class CueA extends Cue {
  override async onKeyDown(): Promise<void> {
    this.handleKeyDown("cueA");
  }
  override async onKeyUp(): Promise<void> {
    this.handleKeyUp("cueA");
  }
}
