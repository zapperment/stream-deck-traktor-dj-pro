import { TraktorAction } from "./TraktorAction";

/**
 * A gate action is for keys on the Stream Deck that send a MIDI message to Traktor when pressed down,
 * and another MIDI message when released. Updates of the key image are handled by Traktor via MIDI messages.
 * This kind of action needs a “handleKeyUp" function. Example for this type of key: cue
 */
export class GateTraktorAction extends TraktorAction {
  constructor({
    controller,
    deck,
    key,
    img,
    handleKeyDown,
    handleKeyUp,
    blockHot,
  }: {
    controller?: Controller;
    deck: Deck;
    key: Key;
    img: Img;
    handleKeyDown: (key: Key) => void;
    handleKeyUp: (key: Key) => void;
    blockHot?: boolean;
  }) {
    super({
      controller,
      deck,
      key,
      img,
      handleKeyDown,
      handleKeyUp,
      blockHot,
    });
  }
}
