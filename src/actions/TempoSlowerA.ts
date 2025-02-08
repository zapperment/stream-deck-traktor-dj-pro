import { action } from "@elgato/streamdeck";
import { TempoSlower } from "./TempoSlower";

/**
 * Make tempo of deck A slower
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.tempo-slower-a" })
export class TempoSlowerA extends TempoSlower {
  override async onKeyDown(): Promise<void> {
    this.updateKey({
      isPressed: true,
    });
    this.handleKeyDown("tempoSlowerA");
  }

  override async onKeyUp(): Promise<void> {
    this.updateKey({
      isPressed: false,
    });
    this.handleKeyUp("tempoSlowerA");
  }
}
