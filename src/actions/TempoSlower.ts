import streamDeck from "@elgato/streamdeck";
import { DeckStateAwareAction } from "./DeckStateAwareAction";

/**
 * Tempo slower button; base class for TempoSlowerA and TempoSlowerB
 */
export class TempoSlower extends DeckStateAwareAction {
  protected readonly handleKeyDown: (
    key: "tempoSlowerA" | "tempoSlowerB",
  ) => void;
  protected readonly handleKeyUp: (
    key: "tempoSlowerA" | "tempoSlowerB",
  ) => void;

  constructor(
    handleKeyDown: (key: "tempoSlowerA" | "tempoSlowerB") => void,
    handleKeyUp: (key: "tempoSlowerA" | "tempoSlowerB") => void,
  ) {
    super();
    this.handleKeyDown = handleKeyDown;
    this.handleKeyUp = handleKeyUp;
  }

  updateKey({ isOn }: { isOn: boolean } = { isOn: false }) {
    const image = `imgs/actions/tempo-slower/tempo-slower-${isOn ? "pressed" : "normal"}-${this.isHot ? "hot" : "cold"}.svg`;
    streamDeck.logger.info(`[TempoSlower] setting key image to ${image}!`);
    return Promise.all(this.actions.map((action) => action.setImage(image)));
  }
}
