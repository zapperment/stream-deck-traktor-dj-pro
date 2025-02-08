import type { Input, Output } from "@julusian/midi";

import streamDeck, { LogLevel } from "@elgato/streamdeck";

import { PlayA, PlayB, CueA, CueB } from "./actions";
import { initPort } from "./midi";
import { keyDirection } from "./config";
import { createMidiMessageHandler, createKeyHandler } from "./eventHandlers";

streamDeck.logger.setLevel(LogLevel.INFO);

const input = initPort<Input>("IAC Traktor to Stream Deck", "input");
const output = initPort<Output>("IAC Stream Deck to Traktor", "output");

const handleKeyDown = createKeyHandler(keyDirection.down, output);
const handleKeyUp = createKeyHandler(keyDirection.up, output);

const playA = new PlayA(handleKeyDown);
const playB = new PlayB(handleKeyDown);
const cueA = new CueA(handleKeyDown, handleKeyUp);
const cueB = new CueB(handleKeyDown, handleKeyUp);

streamDeck.actions.registerAction(playA);
streamDeck.actions.registerAction(playB);
streamDeck.actions.registerAction(cueA);
streamDeck.actions.registerAction(cueB);

streamDeck.connect();

const keys: Keys = {
  playA: {
    action: playA,
    hasChanged: false,
    deck: "a",
  },
  playB: {
    action: playB,
    hasChanged: false,
    deck: "b",
  },
  cueA: {
    action: cueA,
    hasChanged: false,
    deck: "a",
  },
  cueB: {
    action: cueB,
    hasChanged: false,
    deck: "b",
  },
};

const handleMidiMessage = createMidiMessageHandler(keys);

input.on("message", handleMidiMessage);
