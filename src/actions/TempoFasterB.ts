import { action } from "@elgato/streamdeck";
import { TempoFaster } from "./TempoFaster";

/**
 * Make tempo of deck B faster
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.tempo-faster-b" })
export class TempoFasterB extends TempoFaster {
  override async onKeyDown(): Promise<void> {
    this.updateKey({
      isOn: true,
    });
    this.handleKeyDown("tempoFasterB");
  }

  override async onKeyUp(): Promise<void> {
    this.updateKey({
      isOn: false,
    });
    this.handleKeyUp("tempoFasterB");
  }
}
