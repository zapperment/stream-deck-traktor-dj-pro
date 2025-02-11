import { SingletonAction } from "@elgato/streamdeck";

export class BaseTraktorAction extends SingletonAction {
  private readonly _controller: Controller | null;
  private readonly _deck: Deck;

  protected readonly blockHot: boolean;
  protected readonly key: Key;

  hasChanged: boolean = false;

  protected _isHot: boolean = false;

  constructor({
    controller,
    deck,
    key,
    blockHot,
  }: {
    controller?: Controller;
    deck: Deck;
    key: Key;
    blockHot?: boolean;
  }) {
    super();
    this._controller = controller || null;
    this._deck = deck;
    this.key = key;
    this.blockHot = blockHot || false;
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

}
