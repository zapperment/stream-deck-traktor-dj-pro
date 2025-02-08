import { action } from "@elgato/streamdeck";
import { TempoSlower } from "./TempoSlower";
import { deck } from "../config";

/**
 * Make tempo of deck B slower
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.tempo-slower-b" })
export class TempoSlowerB extends TempoSlower {
  constructor(
    handleKeyDown: (key: Key) => void,
    handleKeyUp: (key: Key) => void,
  ) {
    super(handleKeyDown, handleKeyUp, deck.b);
  }

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
