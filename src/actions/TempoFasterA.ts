import { action } from "@elgato/streamdeck";
import { TempoFaster } from "./TempoFaster";

/**
 * Make tempo of deck A faster
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.tempo-faster-a" })
export class TempoFasterA extends TempoFaster {
  override async onKeyDown(): Promise<void> {
    this.updateKey({
      isPressed: true,
    });
    this.handleKeyDown("tempoFasterA");
  }

  override async onKeyUp(): Promise<void> {
    this.updateKey({
      isPressed: false,
    });
    this.handleKeyUp("tempoFasterA");
  }
}
