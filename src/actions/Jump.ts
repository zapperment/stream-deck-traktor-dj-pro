import streamDeck, { SingletonAction } from "@elgato/streamdeck";
import { MidiMessageHandler } from "../eventHandlers";

/**
 * Jump button; base class for JumpBack and JumpForward
 */
export class Jump extends SingletonAction {
  protected _isHot: () => boolean = () => false;

  set isHot(value: () => boolean) {
    this._isHot = value;
  }

  get isHot(): boolean {
    return this._isHot();
  }
}
