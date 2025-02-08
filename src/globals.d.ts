type MidiMessageType = "note-on" | "note-off" | "cc" | "at" | "pb" | "pgm";
type Deck = "a" | "b";
type Key = "playA" | "playB" | "cueA" | "cueB";
type Keys = Record<
  Key,
  {
    action: SingletonAction;
    hasChanged: boolean;
    deck: Deck;
  }
>;

type KeyDirection = "down" | "up";
