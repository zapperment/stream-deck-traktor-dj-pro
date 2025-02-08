import { MidiMessage } from "@julusian/midi";
import { midiControl } from "../config";
import { isControlChange } from "../midi/isControlChange";
import { getMidiChannel } from "../midi/getMidiChannel";
import streamDeck from "@elgato/streamdeck";
import { midiChannel } from "../config";

export class MidiMessageHandler {
  private state = {
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

  private keys: Keys;

  constructor(keys: Keys) {
    this.keys = keys;
  }

  handleMidiMessage(message: MidiMessage) {
    if (!isControlChange(message)) {
      return;
    }
    const channel = getMidiChannel(message);
    const [, control, value] = message;
    streamDeck.logger.info(
      `[handleMidiMessage] received MIDI: channel ${channel}, CC ${control}, value ${value}`,
    );

    // Handle deck A play
    if (channel === midiChannel.receiveDeckA && control === midiControl.play) {
      const isPlaying = value === 127;

      if (this.state.decks.a.isPlaying !== isPlaying) {
        this.keys.playA.hasChanged = true;
        streamDeck.logger.info(
          `[handleMidiMessage] hasChanged: ${this.keys.playA.hasChanged}`,
        );
        this.state.decks.a.isPlaying = isPlaying;
      }
      streamDeck.logger.info(
        `[handleMidiMessage] received MIDI: play A ${isPlaying ? "on" : "off"}`,
      );
    }

    // Handle deck B play
    if (channel === midiChannel.receiveDeckB && control === midiControl.play) {
      const isPlaying = value === 127;

      if (this.state.decks.b.isPlaying !== isPlaying) {
        this.keys.playB.hasChanged = true;
        streamDeck.logger.info(
          `[handleMidiMessage] hasChanged: ${this.keys.playB.hasChanged}`,
        );
        this.state.decks.b.isPlaying = isPlaying;
      }
      streamDeck.logger.info(
        `[handleMidiMessage] received MIDI: play B ${isPlaying ? "on" : "off"}`,
      );
    }

    // Handle deck A cue
    if (channel === midiChannel.receiveDeckA && control === midiControl.cue) {
      const isQueing = value === 127;
      if (this.state.decks.a.isCueing !== isQueing) {
        this.keys.cueA.hasChanged = true;
        streamDeck.logger.info(
          `[handleMidiMessage] hasChanged: ${this.keys.cueA.hasChanged}`,
        );
        this.state.decks.a.isCueing = isQueing;
      }
      streamDeck.logger.info(
        `[handleMidiMessage] received MIDI: cue A ${isQueing ? "pressed" : "released"}`,
      );
    }

    // Handle deck B cue
    if (channel === midiChannel.receiveDeckB && control === midiControl.cue) {
      const isQueing = value === 127;
      if (this.state.decks.b.isCueing !== isQueing) {
        this.keys.cueB.hasChanged = true;
        streamDeck.logger.info(
          `[handleMidiMessage] hasChanged: ${this.keys.cueB.hasChanged}`,
        );
        this.state.decks.b.isCueing = isQueing;
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
          if (this.state.decks.a.isHot) {
            this.state.decks.a.isHot = false;
            this.keys.playA.hasChanged = true;
            this.keys.cueA.hasChanged = true;
            this.keys.jumpForwardA.hasChanged = true;
            this.keys.jumpBackA.hasChanged = true;
            this.keys.loadA.hasChanged = true;
            this.keys.tempoFasterA.hasChanged = true;
            this.keys.tempoSlowerA.hasChanged = true;
            streamDeck.logger.info(
              `[handleMidiMessage] fader all the way to the right: deck A is now cold`,
            );
          }
          if (!this.state.decks.b.isHot) {
            this.state.decks.b.isHot = true;
            this.keys.playB.hasChanged = true;
            this.keys.cueB.hasChanged = true;
            this.keys.jumpForwardB.hasChanged = true;
            this.keys.jumpBackB.hasChanged = true;
            this.keys.loadB.hasChanged = true;
            this.keys.tempoFasterB.hasChanged = true;
            this.keys.tempoSlowerB.hasChanged = true;
            streamDeck.logger.info(
              `[handleMidiMessage] fader all the way to the right: deck B is now hot`,
            );
          }
          break;

        // fader all the way to the left,
        // deck A is hot, deck B is cold
        case value === 0:
          if (!this.state.decks.a.isHot) {
            this.state.decks.a.isHot = true;
            this.keys.playA.hasChanged = true;
            this.keys.cueA.hasChanged = true;
            this.keys.jumpForwardA.hasChanged = true;
            this.keys.jumpBackA.hasChanged = true;
            this.keys.loadA.hasChanged = true;
            this.keys.tempoFasterA.hasChanged = true;
            this.keys.tempoSlowerA.hasChanged = true;
            streamDeck.logger.info(
              `[handleMidiMessage] fader all the way to the left: deck A is now hot`,
            );
          }
          if (this.state.decks.b.isHot) {
            this.state.decks.b.isHot = false;
            this.keys.playB.hasChanged = true;
            this.keys.cueB.hasChanged = true;
            this.keys.jumpForwardB.hasChanged = true;
            this.keys.jumpBackB.hasChanged = true;
            this.keys.loadB.hasChanged = true;
            this.keys.tempoFasterB.hasChanged = true;
            this.keys.tempoSlowerB.hasChanged = true;
            streamDeck.logger.info(
              `[handleMidiMessage] fader all the way to the left: deck B is now cold`,
            );
          }
          break;

        // fader is in the middle,
        // both decks are hot
        default:
          if (!this.state.decks.a.isHot) {
            this.state.decks.a.isHot = true;
            this.keys.playA.hasChanged = true;
            this.keys.cueA.hasChanged = true;
            this.keys.jumpForwardA.hasChanged = true;
            this.keys.jumpBackA.hasChanged = true;
            this.keys.loadA.hasChanged = true;
            this.keys.tempoFasterA.hasChanged = true;
            this.keys.tempoSlowerA.hasChanged = true;
            streamDeck.logger.info(
              `[handleMidiMessage] fader is in the middle: deck A is now hot`,
            );
          }
          if (!this.state.decks.b.isHot) {
            this.state.decks.b.isHot = true;
            this.keys.playB.hasChanged = true;
            this.keys.cueB.hasChanged = true;
            this.keys.jumpForwardB.hasChanged = true;
            this.keys.jumpBackB.hasChanged = true;
            this.keys.loadB.hasChanged = true;
            this.keys.tempoFasterB.hasChanged = true;
            this.keys.tempoSlowerB.hasChanged = true;
            streamDeck.logger.info(
              `[handleMidiMessage] fader is in the middle: deck B is now hot`,
            );
          }
      }
    }

    // Update key is there is a change
    for (const key of Object.values(this.keys)) {
      if (key.hasChanged) {
        streamDeck.logger.info(
          `[handleMidiMessage] updating key ${JSON.stringify(this.state.decks[key.deck as Deck])}`,
        );
        key.action.updateKey(this.state.decks[key.deck as Deck]);
        key.hasChanged = false;
      }
    }
  }

  isHot(deck: Deck) {
    return this.state.decks[deck].isHot;
  }
}
