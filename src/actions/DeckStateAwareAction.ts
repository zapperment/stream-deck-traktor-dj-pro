import { BaseAction } from "./BaseAction";

/**
 * An action that knows if its deck is hot or cold
 */
export class DeckStateAwareAction extends BaseAction {
  protected _isHot: () => boolean = () => false;

  set isHot(value: () => boolean) {
    this._isHot = value;
  }

  get isHot(): boolean {
    return this._isHot();
  }
}
