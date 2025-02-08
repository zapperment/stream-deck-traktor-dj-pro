import type { MidiMessage } from "@julusian/midi";
import { isControlChange } from "../midi/isControlChange";
import { getMidiChannel } from "../midi/getMidiChannel";
import streamDeck from "@elgato/streamdeck";
import { midiChannel, midiControl } from "../config";

export function createMidiMessageHandler(keys: Keys) {
  const state = {
    decks: {
      a: {
        isPlaying: false,
        isCueing: false,
        isHot: false,
      },
      b: {
        isPlaying: false,
        isCueing: false,
        isHot: false,
      },
    },
  };

  return async (timestamp: number, message: MidiMessage) => {
    if (!isControlChange(message)) {
      return;
    }
    const channel = getMidiChannel(message);
    const [, control, value] = message;

    // Handle deck A play
    if (channel === midiChannel.receiveDeckA && control === midiControl.play) {
      const isPlaying = value === 127;

      if (state.decks.a.isPlaying !== isPlaying) {
        keys.playA.hasChanged = true;
        streamDeck.logger.info(
          `[handleMidiMessage] hasChanged: ${keys.playA.hasChanged}`,
        );
        state.decks.a.isPlaying = isPlaying;
      }
      streamDeck.logger.info(
        `[handleMidiMessage] received MIDI: play A ${isPlaying ? "on" : "off"}`,
      );
    }

    // Handle deck B play
    if (channel === midiChannel.receiveDeckB && control === midiControl.play) {
      const isPlaying = value === 127;

      if (state.decks.b.isPlaying !== isPlaying) {
        keys.playB.hasChanged = true;
        streamDeck.logger.info(
          `[handleMidiMessage] hasChanged: ${keys.playB.hasChanged}`,
        );
        state.decks.b.isPlaying = isPlaying;
      }
      streamDeck.logger.info(
        `[handleMidiMessage] received MIDI: play B ${isPlaying ? "on" : "off"}`,
      );
    }

    // Handle deck A cue
    if (channel === midiChannel.receiveDeckA && control === midiControl.cue) {
      const isQueing = value === 127;
      if (state.decks.a.isCueing !== isQueing) {
        keys.cueA.hasChanged = true;
        streamDeck.logger.info(
          `[handleMidiMessage] hasChanged: ${keys.cueA.hasChanged}`,
        );
        state.decks.a.isCueing = isQueing;
      }
      streamDeck.logger.info(
        `[handleMidiMessage] received MIDI: cue A ${isQueing ? "pressed" : "released"}`,
      );
    }

    // Handle deck B cue
    if (channel === midiChannel.receiveDeckB && control === midiControl.cue) {
      const isQueing = value === 127;
      if (state.decks.b.isCueing !== isQueing) {
        keys.cueB.hasChanged = true;
        streamDeck.logger.info(
          `[handleMidiMessage] hasChanged: ${keys.cueB.hasChanged}`,
        );
        state.decks.b.isCueing = isQueing;
      }
      streamDeck.logger.info(
        `[handleMidiMessage] received MIDI: cue B ${isQueing ? "pressed" : "released"}`,
      );
    }

    // Handle crossfader
    if (
      channel === midiChannel.receiveGlobal &&
      control === midiControl.crossfader
    ) {
      streamDeck.logger.info(
        `[handleMidiMessage] received MIDI: crossfader value ${value}`,
      );
      switch (true) {
        // fader all the way to the right,
        // deck A is cold, deck B is hot
        case value === 127:
          if (state.decks.a.isHot) {
            state.decks.a.isHot = false;
            keys.playA.hasChanged = true;
            keys.cueA.hasChanged = true;
            streamDeck.logger.info(
              `[handleMidiMessage] fader all the way to the right: deck A is now cold`,
            );
          }
          if (!state.decks.b.isHot) {
            state.decks.b.isHot = true;
            keys.playB.hasChanged = true;
            keys.cueB.hasChanged = true;
            streamDeck.logger.info(
              `[handleMidiMessage] fader all the way to the right: deck B is now hot`,
            );
          }
          break;

        // fader all the way to the left,
        // deck A is hot, deck B is cold
        case value === 0:
          if (!state.decks.a.isHot) {
            state.decks.a.isHot = true;
            keys.playA.hasChanged = true;
            keys.cueA.hasChanged = true;
            streamDeck.logger.info(
              `[handleMidiMessage] fader all the way to the left: deck A is now hot`,
            );
          }
          if (state.decks.b.isHot) {
            state.decks.b.isHot = false;
            keys.playB.hasChanged = true;
            keys.cueB.hasChanged = true;
            streamDeck.logger.info(
              `[handleMidiMessage] fader all the way to the left: deck B is now cold`,
            );
          }
          break;

        // fader is in the middle,
        // both decks are hot
        default:
          if (!state.decks.a.isHot) {
            state.decks.a.isHot = true;
            keys.playA.hasChanged = true;
            keys.cueA.hasChanged = true;
            streamDeck.logger.info(
              `[handleMidiMessage] fader is in the middle: deck A is now hot`,
            );
          }
          if (!state.decks.b.isHot) {
            state.decks.b.isHot = true;
            keys.playB.hasChanged = true;
            keys.cueB.hasChanged = true;
            streamDeck.logger.info(
              `[handleMidiMessage] fader is in the middle: deck B is now hot`,
            );
          }
      }
    }

    // Update key is there is a change
    for (const key of Object.values(keys)) {
      if (key.hasChanged) {
        streamDeck.logger.info(
          `[handleMidiMessage] updating key ${JSON.stringify(state.decks[key.deck as Deck])}`,
        );
        await key.action.updateKey(state.decks[key.deck as Deck]);
        key.hasChanged = false;
      }
    }
  };
}
