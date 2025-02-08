import streamDeck, { SingletonAction } from "@elgato/streamdeck";

export class TraktorControlledAction extends SingletonAction {
  private readonly key: Key;
  protected readonly handleKeyDown: (key: Key) => void;
  protected readonly handleKeyUp: (key: Key) => void;
  private readonly img: {
    onCold: string;
    onHot: string;
    offCold: string;
    offHot: string;
  };

  constructor({
    key,
    img,
    handleKeyDown,
    handleKeyUp,
  }: {
    key: Key;
    img: Img;
    handleKeyDown: (key: Key) => void;
    handleKeyUp?: (key: Key) => void;
  }) {
    super();
    this.key = key;
    this.img = img;
    this.handleKeyDown = handleKeyDown;
    this.handleKeyUp = handleKeyUp || ((key) => {});
  }

  override async onKeyDown(): Promise<void> {
    this.handleKeyDown(this.key);
  }

  override async onKeyUp(): Promise<void> {
    this.handleKeyUp(this.key);
  }

  updateKey({ isOn, isHot }: { isOn: boolean; isHot: boolean }) {
    const image = isOn
      ? isHot
        ? this.img.onHot
        : this.img.onCold
      : isHot
        ? this.img.offHot
        : this.img.offCold;
    streamDeck.logger.info(
      `[TraktorControlledAction] setting key image to ${image}!`,
    );
    return Promise.all(this.actions.map((action) => action.setImage(image)));
  }
}
