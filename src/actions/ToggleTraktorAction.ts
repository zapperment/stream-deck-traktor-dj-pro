import { TraktorAction } from "./TraktorAction";

/**
 * A toggle action is for keys on the Stream Deck that send a MIDI message to Traktor when pressed down,
 * but not when released. The MIDI message sent on key down toggles the state of a Traktor element on or
 * off with each key press. The key image is not updated when the key is released, this is handled by Traktor
 * via MIDI message. A “handleKeyUp" function is not necessary, because not MIDI message is sent when the
 * key is released. Examples for this type of key: loop, loop control, play, stop.
 */
export class ToggleTraktorAction extends TraktorAction {
  constructor({
    controller,
    deck,
    key,
    img,
    handleKeyDown,
    blockHot,
  }: {
    controller?: Controller;
    deck: Deck;
    key: Key;
    img: Img;
    handleKeyDown: (key: Key) => void;
    blockHot?: boolean;
  }) {
    super({
      controller,
      deck,
      key,
      img,
      handleKeyDown,
      blockHot,
    });
  }
}
