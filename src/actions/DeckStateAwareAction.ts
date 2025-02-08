import { SingletonAction } from "@elgato/streamdeck";

/**
 * An action that knows if its deck is hot or cold
 */
export class DeckStateAwareAction extends SingletonAction {
  protected _isHot: () => boolean = () => false;

  set isHot(value: () => boolean) {
    this._isHot = value;
  }

  get isHot(): boolean {
    return this._isHot();
  }
}
