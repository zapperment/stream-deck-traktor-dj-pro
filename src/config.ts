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
  cup: 2,
  loopControl8: 3,
  loopControl16: 4,
  loopControl32: 5,
  loop: 6,
  tempoFaster: 7,
  tempoSlower: 8,
  load: 9,
  jumpForward: 10,
  jumpBack: 11,
  hotcue1: 12,
  hotcue2: 13,
  hotcue3: 14,
  hotcue4: 15,
  setLoop: 16,
  crossfader: 0,
};

export const keyDirection = {
  down: "down" as KeyDirection,
  up: "up" as KeyDirection,
};

export const deck = {
  a: "a" as Deck,
  b: "b" as Deck,
};

export const midiControlValueToLoopControl = [
  "loopSetTo32", // 0
  "loopSetTo16", // 1
  "loopSetTo8", // 2
  "loopSetTo4", // 3
  "loopSetTo2", // 4
  "loopSetTo1", // 5
  "loopSetTo2", // 6
  "loopSetTo4", // 7
  "loopSetTo8", // 8
  "loopSetTo16", // 9
  "loopSetTo32", // 10
];

export const controller = {
  isPlaying: "isPlaying" as Controller,
  isCueing: "isCueing" as Controller,
  isLooping: "isLooping" as Controller,
  loopSetTo8: "loopSetTo8" as Controller,
  loopSetTo16: "loopSetTo16" as Controller,
  loopSetTo32: "loopSetTo32" as Controller,
};
