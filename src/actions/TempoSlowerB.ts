import { action } from "@elgato/streamdeck";
import { TempoSlower } from "./TempoSlower";

/**
 * Make tempo of deck B slower
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.tempo-slower-b" })
export class TempoSlowerB extends TempoSlower {
  override async onKeyDown(): Promise<void> {
    this.updateKey({
      isOn: true,
    });
    this.handleKeyDown("tempoSlowerB");
  }

  override async onKeyUp(): Promise<void> {
    this.updateKey({
      isOn: false,
    });
    this.handleKeyUp("tempoSlowerB");
  }
}
