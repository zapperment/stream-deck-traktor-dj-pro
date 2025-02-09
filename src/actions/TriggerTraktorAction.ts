import { TraktorAction } from "./TraktorAction";

/**
 * A trigger action is for keys on the Stream Deck that send a MIDI message to Traktor when pressed down,
 * but not when released. When released, the key image is updated to show that it is not pressed down.
 * A “handleKeyUp" function is not necessary, because not MIDI message is sent when the key is released.
 * Examples for this type of key: jump, load, tempo.
 */
export class TriggerTraktorAction extends TraktorAction {
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
      updateKeyWhenReleased: true,
      updateKeyWhenPressed: true,
    });
  }
}
