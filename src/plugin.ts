import type { Input, Output } from "@julusian/midi";

import streamDeck, { LogLevel, SingletonAction } from "@elgato/streamdeck";

import {
  CueA,
  CueB,
  JumpBackA,
  JumpBackB,
  JumpForwardA,
  JumpForwardB,
  LoadA,
  LoadB,
  LoopA,
  LoopB,
  LoopControl8A,
  LoopControl8B,
  LoopControl16A,
  LoopControl16B,
  LoopControl32A,
  LoopControl32B,
  PlayA,
  PlayB,
  TempoFasterA,
  TempoFasterB,
  TempoSlowerA,
  TempoSlowerB,
} from "./actions";
import { initPort } from "./midi";
import { deck, keyDirection } from "./config";
import { MidiMessageHandler, createKeyHandler } from "./eventHandlers";

streamDeck.logger.setLevel(LogLevel.INFO);

const input = initPort<Input>("IAC Traktor to Stream Deck", "input");
const output = initPort<Output>("IAC Stream Deck to Traktor", "output");

const handleKeyDown = createKeyHandler(keyDirection.down, output);
const handleKeyUp = createKeyHandler(keyDirection.up, output);

const cueA = new CueA(handleKeyDown, handleKeyUp);
const cueB = new CueB(handleKeyDown, handleKeyUp);
const jumpBackA = new JumpBackA(handleKeyDown, handleKeyUp);
const jumpBackB = new JumpBackB(handleKeyDown, handleKeyUp);
const jumpForwardA = new JumpForwardA(handleKeyDown, handleKeyUp);
const jumpForwardB = new JumpForwardB(handleKeyDown, handleKeyUp);
const loadA = new LoadA(handleKeyDown, handleKeyUp);
const loadB = new LoadB(handleKeyDown, handleKeyUp);
const loopA = new LoopA(handleKeyDown);
const loopB = new LoopB(handleKeyDown);
const loopControl8A = new LoopControl8A(handleKeyDown);
const loopControl8B = new LoopControl8B(handleKeyDown);
const loopControl16A = new LoopControl16A(handleKeyDown);
const loopControl16B = new LoopControl16B(handleKeyDown);
const loopControl32A = new LoopControl32A(handleKeyDown);
const loopControl32B = new LoopControl32B(handleKeyDown);
const playA = new PlayA(handleKeyDown);
const playB = new PlayB(handleKeyDown);
const tempoFasterA = new TempoFasterA(handleKeyDown, handleKeyUp);
const tempoFasterB = new TempoFasterB(handleKeyDown, handleKeyUp);
const tempoSlowerA = new TempoSlowerA(handleKeyDown, handleKeyUp);
const tempoSlowerB = new TempoSlowerB(handleKeyDown, handleKeyUp);

streamDeck.actions.registerAction(cueA);
streamDeck.actions.registerAction(cueB);
streamDeck.actions.registerAction(jumpBackA);
streamDeck.actions.registerAction(jumpBackB);
streamDeck.actions.registerAction(jumpForwardA);
streamDeck.actions.registerAction(jumpForwardB);
streamDeck.actions.registerAction(loadA);
streamDeck.actions.registerAction(loadB);
streamDeck.actions.registerAction(loopA);
streamDeck.actions.registerAction(loopB);
streamDeck.actions.registerAction(loopControl8A);
streamDeck.actions.registerAction(loopControl8B);
streamDeck.actions.registerAction(loopControl16A);
streamDeck.actions.registerAction(loopControl16B);
streamDeck.actions.registerAction(loopControl32A);
streamDeck.actions.registerAction(loopControl32B);
streamDeck.actions.registerAction(playA);
streamDeck.actions.registerAction(playB);
streamDeck.actions.registerAction(tempoFasterA);
streamDeck.actions.registerAction(tempoFasterB);
streamDeck.actions.registerAction(tempoSlowerA);
streamDeck.actions.registerAction(tempoSlowerB);

streamDeck.connect();

const actions: Record<Key, Action> = {
  cueA,
  cueB,
  jumpBackA,
  jumpBackB,
  jumpForwardA,
  jumpForwardB,
  loadA,
  loadB,
  loopControl8A,
  loopControl8B,
  loopControl16A,
  loopControl16B,
  loopControl32A,
  loopControl32B,
  loopA,
  loopB,
  playA,
  playB,
  tempoFasterA,
  tempoFasterB,
  tempoSlowerA,
  tempoSlowerB,
};

const midiMessageHandler = new MidiMessageHandler(actions);

jumpBackA.isHot = () => midiMessageHandler.isHot(deck.a);
jumpBackB.isHot = () => midiMessageHandler.isHot(deck.b);
jumpForwardA.isHot = () => midiMessageHandler.isHot(deck.a);
jumpForwardB.isHot = () => midiMessageHandler.isHot(deck.b);
loadA.isHot = () => midiMessageHandler.isHot(deck.a);
loadB.isHot = () => midiMessageHandler.isHot(deck.b);
tempoFasterA.isHot = () => midiMessageHandler.isHot(deck.a);
tempoFasterB.isHot = () => midiMessageHandler.isHot(deck.b);
tempoSlowerA.isHot = () => midiMessageHandler.isHot(deck.a);
tempoSlowerB.isHot = () => midiMessageHandler.isHot(deck.b);

input.on("message", (_, message) =>
  midiMessageHandler.handleMidiMessage(message),
);
