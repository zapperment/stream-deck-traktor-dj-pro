import streamDeck from "@elgato/streamdeck";
import { DeckStateAwareAction } from "./DeckStateAwareAction";

/**
 * Tempo faster button; base class for TempoFasterA and TempoFasterB
 */
export class TempoFaster extends DeckStateAwareAction {
  protected readonly handleKeyDown: (
    key: "tempoFasterA" | "tempoFasterB",
  ) => void;
  protected readonly handleKeyUp: (
    key: "tempoFasterA" | "tempoFasterB",
  ) => void;

  constructor(
    handleKeyDown: (key: "tempoFasterA" | "tempoFasterB") => void,
    handleKeyUp: (key: "tempoFasterA" | "tempoFasterB") => void,
    deck: Deck,
  ) {
    super({
      blockHot: false,
      deck,
    });
    this.handleKeyDown = handleKeyDown;
    this.handleKeyUp = handleKeyUp;
  }

  updateKey({ isOn }: { isOn: boolean } = { isOn: false }) {
    const image = `imgs/actions/tempo-faster/tempo-faster-${isOn ? "pressed" : "normal"}-${this.isHot ? "hot" : "cold"}.svg`;
    streamDeck.logger.info(`[TempoFaster] setting key image to ${image}!`);
    return Promise.all(this.actions.map((action) => action.setImage(image)));
  }
}
