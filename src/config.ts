export const midiChannel = {
  sendDeckA: 0,
  sendDeckB: 1,
  receiveDeckA: 2,
  receiveDeckB: 3,
  receiveGlobal: 4,
};

export const midiControl = {
  play: 0,
  cue: 1,
  crossfader: 0,
  jumpForward: 10,
  jumpBack: 11,
};

export const keyDirection = {
  down: "down" as KeyDirection,
  up: "up" as KeyDirection,
};

export const deck = {
  a: "a" as Deck,
  b: "b" as Deck,
};
