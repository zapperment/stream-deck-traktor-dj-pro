type MidiMessageType = "note-on" | "note-off" | "cc" | "at" | "pb" | "pgm";
type Deck = "a" | "b";
type Key =
  | "playA"
  | "playB"
  | "cueA"
  | "cueB"
  | "jumpForwardA"
  | "jumpForwardB"
  | "jumpBackA"
  | "jumpBackB"
  | "loadA"
  | "loadB"
  | "loopControl8A"
  | "loopControl16A"
  | "loopControl32A"
  | "loopControl8B"
  | "loopControl16B"
  | "loopControl32B"
  | "loopA"
  | "loopB"
  | "tempoFasterA"
  | "tempoFasterB"
  | "tempoSlowerA"
  | "tempoSlowerB";

type Controller =
  | "isPlaying"
  | "isCueing"
  | "isLooping"
  | "loopSetTo8"
  | "loopSetTo16"
  | "loopSetTo32";

type Keys = Record<
  Key,
  {
    action: SingletonAction;
    hasChanged: boolean;
    controller?: Controller;
    blockHot: boolean;
    deck: Deck;
  }
>;

type KeyDirection = "down" | "up";

interface Img {
  onCold: string;
  onHot: string;
  offCold: string;
  offHot: string;
}

interface State {
  decks: {
    a: DeckState;
    b: DeckState;
  };
}

interface DeckState {
  isPlaying: boolean;
  isCueing: boolean;
  isLooping: boolean;
  loopSetTo8: boolean;
  loopSetTo16: boolean;
  loopSetTo32: boolean;
  isHot: boolean;
  currentLoopSize: number | null;
}

interface Action {
  hasChanged: boolean;
  updateKey: (state?: { isOn: boolean; isHot?: boolean }) => Promise<void[]>;
  controller?: Controller;
  deck: Deck;
}
