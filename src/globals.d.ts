type MidiMessageType = "note-on" | "note-off" | "cc" | "at" | "pb" | "pgm";

type Deck = "a" | "b";

type Key =
  | "playA"
  | "playB"
  | "cueA"
  | "cueB"
  | "hotcue1A"
  | "hotcue1B"
  | "hotcue2A"
  | "hotcue2B"
  | "hotcue3A"
  | "hotcue3B"
  | "hotcue4A"
  | "hotcue4B"
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

type HotcueState =
  | "unassigned"
  | "floating"
  | "cuepoint"
  | "load"
  | "fade"
  | "loop";

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

interface HotcueImg {
  unassignedCold: string;
  unassignedHot: string;
  floatingCold: string;
  floatingHot: string;
  cuepointCold: string;
  cuepointHot: string;
  loadCold: string;
  loadHot: string;
  fadeCold: string;
  fadeHot: string;
  loopCold: string;
  loopHot: string;
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
