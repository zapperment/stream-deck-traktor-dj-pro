import { action } from "@elgato/streamdeck";
import { TempoFaster } from "./TempoFaster";
import { deck } from "../config";

/**
 * Make tempo of deck A faster
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.tempo-faster-a" })
export class TempoFasterA extends TempoFaster {
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
    this.handleKeyDown("tempoFasterA");
  }

  override async onKeyUp(): Promise<void> {
    this.updateKey({
      isOn: false,
    });
    this.handleKeyUp("tempoFasterA");
  }
}
