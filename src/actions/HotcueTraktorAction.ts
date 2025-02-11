import { BaseTraktorAction } from "./BaseTraktorAction";
import { hotcueState } from "../config";
import streamDeck from "@elgato/streamdeck";

/**
 * This type of action is a special kind of gate action that sends a MIDI message to Traktor when pressed down,
 * and another MIDI message when released. Unlike the GateTraktorAction, keys of this kind have more than two states
 * (on/off) — they have the states unassigned, floating, cuepoint, load, fade, and loop. Setting the image for these
 * states is handled entirely by Traktor via MIDI messages. Example for this type of key: hotcue
 */
export class HotcueTraktorAction extends BaseTraktorAction {
  private readonly img: HotcueImg;
  private _hotcueState: HotcueState = hotcueState.unassigned;

  private readonly handleKeyDown: (key: Key) => void;
  private readonly handleKeyUp: (key: Key) => void;

  constructor({
    deck,
    key,
    img,
    handleKeyDown,
    handleKeyUp,
  }: {
    deck: Deck;
    key: Key;
    img: HotcueImg;
    handleKeyDown: (key: Key) => void;
    handleKeyUp: (key: Key) => void;
  }) {
    super({
      deck,
      key,
    });
    this.img = img;
    this.handleKeyDown = handleKeyDown;
    this.handleKeyUp = handleKeyUp;
  }

  set hotcueState(state: HotcueState) {
    this._hotcueState = state;
  }

  override async onKeyDown(): Promise<void> {
    this.handleKeyDown(this.key);
  }

  override async onKeyUp(): Promise<void> {
      this.handleKeyUp(this.key);
  }

  updateKey() {
    const image = `${this.img[`${this._hotcueState}${this._isHot ? "Hot" : "Cold"}`]}`;
    streamDeck.logger.info(`[HotcueTraktorAction] setting key image to ${image}!`);
    return Promise.all(this.actions.map((action) => action.setImage(image)));
  }
}