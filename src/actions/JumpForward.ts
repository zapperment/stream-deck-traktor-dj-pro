import streamDeck from "@elgato/streamdeck";
import { DeckStateAwareAction } from "./DeckStateAwareAction";

/**
 * Jump forward button; base class for JumpForwardA and JumpForwardB
 */
export class JumpForward extends DeckStateAwareAction {
  protected readonly handleKeyDown: (
    key: "jumpForwardA" | "jumpForwardB",
  ) => void;
  protected readonly handleKeyUp: (
    key: "jumpForwardA" | "jumpForwardB",
  ) => void;

  constructor(
    handleKeyDown: (key: "jumpForwardA" | "jumpForwardB") => void,
    handleKeyUp: (key: "jumpForwardA" | "jumpForwardB") => void,
  ) {
    super();
    this.handleKeyDown = handleKeyDown;
    this.handleKeyUp = handleKeyUp;
  }

  updateKey({ isOn }: { isOn: boolean } = { isOn: false }) {
    const image = `imgs/actions/jump-forward/jump-forward-${isOn ? "pressed" : "normal"}-${this.isHot ? "hot" : "cold"}.svg`;
    streamDeck.logger.info(`[JumpForward] setting key image to ${image}!`);
    return Promise.all(this.actions.map((action) => action.setImage(image)));
  }
}
