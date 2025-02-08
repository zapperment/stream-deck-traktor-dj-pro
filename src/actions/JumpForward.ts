import streamDeck from "@elgato/streamdeck";
import { Jump } from "./Jump";

/**
 * Jump forward button; base class for JumpForwardA and JumpForwardB
 */
export class JumpForward extends Jump {
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

  updateKey({ isPressed }: { isPressed: boolean }) {
    const image = `imgs/actions/jump-forward/jump-forward-${isPressed ? "pressed" : "normal"}-${this.isHot ? "hot" : "cold"}.svg`;
    streamDeck.logger.info(`[JumpForward] setting key image to ${image}!`);
    return Promise.all(this.actions.map((action) => action.setImage(image)));
  }
}
