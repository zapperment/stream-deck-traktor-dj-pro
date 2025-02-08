import streamDeck from "@elgato/streamdeck";
import { DeckStateAwareAction } from "./DeckStateAwareAction";

/**
 * Load button; base class for LoadA and LoadB
 */
export class Load extends DeckStateAwareAction {
  protected readonly handleKeyDown: (key: "loadA" | "loadB") => void;
  protected readonly handleKeyUp: (key: "loadA" | "loadB") => void;

  constructor(
    handleKeyDown: (key: "loadA" | "loadB") => void,
    handleKeyUp: (key: "loadA" | "loadB") => void,
  ) {
    super();
    this.handleKeyDown = handleKeyDown;
    this.handleKeyUp = handleKeyUp;
  }

  updateKey({ isOn }: { isOn: boolean } = { isOn: false }) {
    const image = `imgs/actions/load/load-${isOn ? "pressed" : "normal"}-${this.isHot ? "hot" : "cold"}.svg`;
    streamDeck.logger.info(`[Load] setting key image to ${image}!`);
    return Promise.all(this.actions.map((action) => action.setImage(image)));
  }
}
