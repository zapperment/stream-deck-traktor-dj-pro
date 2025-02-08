import { action } from "@elgato/streamdeck";
import { TempoFaster } from "./TempoFaster";

/**
 * Make tempo of deck A faster
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.tempo-faster-a" })
export class TempoFasterA extends TempoFaster {
  override async onKeyDown(): Promise<void> {
    this.updateKey({
      isOn: true,
    });
    this.handleKeyDown("tempoFasterA");
  }

  override async onKeyUp(): Promise<void> {
    this.updateKey({
      isOn: false,
    });
    this.handleKeyUp("tempoFasterA");
  }
}
