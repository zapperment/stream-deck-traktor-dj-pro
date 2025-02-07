import type { Input, Output } from "@julusian/midi";

import streamDeck, { LogLevel } from "@elgato/streamdeck";

import { PlayA } from "./actions/PlayA";
import { PlayB } from "./actions/PlayB";
import { initPort, isControlChange, getMidiChannel } from "./midi";

// We can enable "trace" logging so that all messages between the Stream Deck, and the plugin are recorded. When storing sensitive information
streamDeck.logger.setLevel(LogLevel.TRACE);

const input = initPort<Input>("IAC Traktor to Stream Deck", "input");
const output = initPort<Output>("IAC Stream Deck to Traktor", "output");

function handleKeyDown(key: "playA" | "playB") {
  streamDeck.logger.info(`plugin:handleKeyDown: ${key}`);
  switch (key) {
    case "playA":
      output.send([0xb0, 0x00, 0x7f]);
      break;
    case "playB":
      output.send([0xb1, 0x00, 0x7f]);

      break;
    default:
      streamDeck.logger.error(`plugin:handleKeyDown: unknown key: ${key}`);
  }
}

// Register the increment action.
const playA = new PlayA(handleKeyDown);
streamDeck.actions.registerAction(playA);
const playB = new PlayB(handleKeyDown);

streamDeck.actions.registerAction(playB);

// Finally, connect to the Stream Deck.
streamDeck.connect();

const state = {
  decks: {
    a: {
      isPlaying: false,
      isHot: false,
    },
    b: {
      isPlaying: false,
      isHot: false,
    },
  },
};

const keys = {
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
};

input.on("message", async (_, message) => {
  if (!isControlChange(message)) {
    return;
  }
  const channel = getMidiChannel(message);
  const [, control, value] = message;

  if (channel === 2 && control === 0) {
    const isPlaying = value === 127;

    if (state.decks.a.isPlaying !== isPlaying) {
      keys.playA.hasChanged = true;
      streamDeck.logger.info(`hasChanged: ${keys.playA.hasChanged}`);
      state.decks.a.isPlaying = isPlaying;
    }
    streamDeck.logger.info(
      `received MIDI: play A ${value === 127 ? "on" : "off"}`,
    );
  }

  if (channel === 3 && control === 0) {
    const isPlaying = value === 127;

    if (state.decks.b.isPlaying !== isPlaying) {
      keys.playB.hasChanged = true;
      streamDeck.logger.info(`hasChanged: ${keys.playB.hasChanged}`);
      state.decks.b.isPlaying = isPlaying;
    }
    streamDeck.logger.info(
      `received MIDI: play B ${value === 127 ? "on" : "off"}`,
    );
  }

  if (channel === 4 && control === 0) {
    streamDeck.logger.info(`received MIDI: crossfader value ${value}`);
    switch (true) {
      // fader all the way to the right,
      // deck A is cold, deck B is hot
      case value === 127:
        if (state.decks.a.isHot) {
          state.decks.a.isHot = false;
          keys.playA.hasChanged = true;
          streamDeck.logger.info(
            "fader all the way to the right: deck A is now cold",
          );
        }
        if (!state.decks.b.isHot) {
          state.decks.b.isHot = true;
          keys.playB.hasChanged = true;
          streamDeck.logger.info(
            "fader all the way to the right: deck B is now hot",
          );
        }
        break;

      // fader all the way to the left,
      // deck A is hot, deck B is cold
      case value === 0:
        if (!state.decks.a.isHot) {
          state.decks.a.isHot = true;
          keys.playA.hasChanged = true;
          streamDeck.logger.info(
            "fader all the way to the left: deck A is now hot",
          );
        }
        if (state.decks.b.isHot) {
          state.decks.b.isHot = false;
          keys.playB.hasChanged = true;
          streamDeck.logger.info(
            "fader all the way to the left: deck B is now cold",
          );
        }
        break;

      // fader is in the middle,
      // both decks are hot
      default:
        if (!state.decks.a.isHot) {
          state.decks.a.isHot = true;
          keys.playA.hasChanged = true;
          streamDeck.logger.info("fader is in the middle: deck A is now hot");
        }
        if (!state.decks.b.isHot) {
          state.decks.b.isHot = true;
          keys.playB.hasChanged = true;
          streamDeck.logger.info("fader is in the middle: deck B is now hot");
        }
    }
  }

  for (const key of Object.values(keys)) {
    if (key.hasChanged) {
      streamDeck.logger.info("updating key");
      await key.action.updateKey(state.decks[key.deck as "a" | "b"]);
      key.hasChanged = false;
    }
  }
});
