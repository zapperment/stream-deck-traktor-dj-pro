import { action } from "@elgato/streamdeck";
import { TempoSlower } from "./TempoSlower";
import { deck } from "../config";
/**
 * Make tempo of deck A slower
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.tempo-slower-a" })
export class TempoSlowerA extends TempoSlower {
  constructor(
    handleKeyDown: (key: Key) => void,
    handleKeyUp: (key: Key) => void,
  ) {
    super(handleKeyDown, handleKeyUp, deck.a);
  }

  override async onKeyDown(): Promise<void> {
    this.updateKey({
      isOn: true,
    });
    this.handleKeyDown("tempoSlowerA");
  }

  override async onKeyUp(): Promise<void> {
    this.updateKey({
      isOn: false,
    });
    this.handleKeyUp("tempoSlowerA");
  }
}
