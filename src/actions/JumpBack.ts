import streamDeck from "@elgato/streamdeck";
import { DeckStateAwareAction } from "./DeckStateAwareAction";

/**
 * Jump back button; base class for JumpBackA and JumpBackB
 */
export class JumpBack extends DeckStateAwareAction {
  protected readonly handleKeyDown: (key: "jumpBackA" | "jumpBackB") => void;
  protected readonly handleKeyUp: (key: "jumpBackA" | "jumpBackB") => void;

  constructor(
    handleKeyDown: (key: "jumpBackA" | "jumpBackB") => void,
    handleKeyUp: (key: "jumpBackA" | "jumpBackB") => void,
  ) {
    super();
    this.handleKeyDown = handleKeyDown;
    this.handleKeyUp = handleKeyUp;
  }

  updateKey({ isOn }: { isOn: boolean } = { isOn: false }) {
    const image = `imgs/actions/jump-back/jump-back-${isOn ? "pressed" : "normal"}-${this.isHot ? "hot" : "cold"}.svg`;
    streamDeck.logger.info(`[JumpBack] setting key image to ${image}!`);
    return Promise.all(this.actions.map((action) => action.setImage(image)));
  }
}
