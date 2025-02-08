import type { Input, Output } from "@julusian/midi";

import streamDeck, { LogLevel } from "@elgato/streamdeck";

import {
  PlayA,
  PlayB,
  CueA,
  CueB,
  JumpForwardA,
  JumpForwardB,
  JumpBackA,
  JumpBackB,
} from "./actions";
import { initPort } from "./midi";
import { deck, keyDirection } from "./config";
import { MidiMessageHandler, createKeyHandler } from "./eventHandlers";

streamDeck.logger.setLevel(LogLevel.INFO);

const input = initPort<Input>("IAC Traktor to Stream Deck", "input");
const output = initPort<Output>("IAC Stream Deck to Traktor", "output");

const handleKeyDown = createKeyHandler(keyDirection.down, output);
const handleKeyUp = createKeyHandler(keyDirection.up, output);

const playA = new PlayA(handleKeyDown);
const playB = new PlayB(handleKeyDown);
const cueA = new CueA(handleKeyDown, handleKeyUp);
const cueB = new CueB(handleKeyDown, handleKeyUp);
const jumpForwardA = new JumpForwardA(handleKeyDown, handleKeyUp);
const jumpForwardB = new JumpForwardB(handleKeyDown, handleKeyUp);
const jumpBackA = new JumpBackA(handleKeyDown, handleKeyUp);
const jumpBackB = new JumpBackB(handleKeyDown, handleKeyUp);

streamDeck.actions.registerAction(playA);
streamDeck.actions.registerAction(playB);
streamDeck.actions.registerAction(cueA);
streamDeck.actions.registerAction(cueB);
streamDeck.actions.registerAction(jumpForwardA);
streamDeck.actions.registerAction(jumpForwardB);
streamDeck.actions.registerAction(jumpBackA);
streamDeck.actions.registerAction(jumpBackB);

streamDeck.connect();

const keys: Keys = {
  playA: {
    action: playA,
    hasChanged: false,
    deck: deck.a,
  },
  playB: {
    action: playB,
    hasChanged: false,
    deck: deck.b,
  },

  cueA: {
    action: cueA,
    hasChanged: false,
    deck: deck.a,
  },
  cueB: {
    action: cueB,
    hasChanged: false,
    deck: deck.b,
  },

  jumpForwardA: {
    action: jumpForwardA,
    hasChanged: false,
    deck: deck.a,
  },
  jumpForwardB: {
    action: jumpForwardB,
    hasChanged: false,
    deck: deck.b,
  },

  jumpBackA: {
    action: jumpBackA,
    hasChanged: false,
    deck: deck.a,
  },
  jumpBackB: {
    action: jumpBackB,
    hasChanged: false,
    deck: deck.b,
  },
};

const midiMessageHandler = new MidiMessageHandler(keys);

jumpBackA.isHot = () => midiMessageHandler.isHot(deck.a);
jumpBackB.isHot = () => midiMessageHandler.isHot(deck.b);
jumpForwardA.isHot = () => midiMessageHandler.isHot(deck.a);
jumpForwardB.isHot = () => midiMessageHandler.isHot(deck.b);

input.on("message", (_, message) =>
  midiMessageHandler.handleMidiMessage(message),
);
