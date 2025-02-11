import streamDeck from "@elgato/streamdeck";
import { BaseTraktorAction } from "./BaseTraktorAction";

export class TraktorAction extends BaseTraktorAction {
  private readonly updateKeyWhenReleased: boolean;
  private readonly updateKeyWhenPressed: boolean;
  private readonly img: Img;

  private readonly handleKeyDown: (key: Key) => void;
  private readonly handleKeyUp: ((key: Key) => void) | null;

  constructor({
    controller,
    deck,
    key,
    img,
    handleKeyDown,
    handleKeyUp,
    updateKeyWhenReleased,
    updateKeyWhenPressed,
    blockHot,
  }: {
    controller?: Controller;
    deck: Deck;
    key: Key;
    img: Img;
    updateKeyWhenReleased?: boolean;
    updateKeyWhenPressed?: boolean;
    blockHot?: boolean;
    handleKeyDown: (key: Key) => void;
    handleKeyUp?: (key: Key) => void;
  }) {
    super({
      controller,
      deck,
      key,
      blockHot,
    });
    this.img = img;
    this.updateKeyWhenReleased = updateKeyWhenReleased || false;
    this.updateKeyWhenPressed = updateKeyWhenPressed || false;
    this.handleKeyDown = handleKeyDown;
    this.handleKeyUp = handleKeyUp || null;
  }

  override async onKeyDown(): Promise<void> {
    if (this.blockHot && this._isHot) {
      streamDeck.logger.warn(
        `[TraktorAction] onKeyDown blocked because deck is hot!`,
      );
      return;
    }
    this.handleKeyDown(this.key);
    if (this.updateKeyWhenPressed) {
      this.updateKey();
    }
  }

  override async onKeyUp(): Promise<void> {
    // actions that send a MIDI message to Traktor when key is released
    if (this.handleKeyUp) {
      this.handleKeyUp(this.key);
      return;
    }
    if (this.updateKeyWhenReleased) {
      this.updateKey(false);
    }
  }

  updateKey(isOn: boolean = true) {
    const image = isOn
      ? this._isHot
        ? this.img.onHot
        : this.img.onCold
      : this._isHot
        ? this.img.offHot
        : this.img.offCold;
    streamDeck.logger.info(`[TraktorAction] setting key image to ${image}!`);
    return Promise.all(this.actions.map((action) => action.setImage(image)));
  }
}
