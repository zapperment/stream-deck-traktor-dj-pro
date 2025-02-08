import { action } from "@elgato/streamdeck";
import { Cue } from "./Cue";

/**
 * Cue deck B
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.cue-b" })
export class CueB extends Cue {
  override async onKeyDown(): Promise<void> {
    this.handleKeyDown("cueB");
  }
  override async onKeyUp(): Promise<void> {
    this.handleKeyUp("cueB");
  }
}
