import streamDeck, { SingletonAction } from "@elgato/streamdeck";

export class TraktorAction extends SingletonAction {
  private readonly _controller: Controller | null;
  private readonly _deck: Deck;

  private readonly updateKeyWhenReleased: boolean;
  private readonly updateKeyWhenPressed: boolean;
  private readonly blockHot: boolean;
  private readonly key: Key;
  private readonly img: Img;

  hasChanged: boolean = false;

  private _isHot: boolean = false;

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
    super();
    this._controller = controller || null;
    this._deck = deck;
    this.key = key;
    this.img = img;
    this.updateKeyWhenReleased = updateKeyWhenReleased || false;
    this.updateKeyWhenPressed = updateKeyWhenPressed || false;
    this.blockHot = blockHot || false;
    this.handleKeyDown = handleKeyDown;
    this.handleKeyUp = handleKeyUp || null;
  }

  set isHot(value: boolean) {
    this._isHot = value;
  }

  get controller(): Controller | null {
    return this._controller;
  }

  get deck(): Deck {
    return this._deck;
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
