import { MidiMessage } from "@julusian/midi";
import { deck, midiControl, midiControlValueToLoopControl } from "../config";
import { isControlChange } from "../midi/isControlChange";
import { getMidiChannel } from "../midi/getMidiChannel";
import streamDeck from "@elgato/streamdeck";
import { midiChannel } from "../config";

export class MidiMessageHandler {
  private state: State = {
    decks: {
      a: {
        isPlaying: false,
        isCueing: false,
        isLooping: false,
        loopSetTo8: false,
        loopSetTo16: false,
        loopSetTo32: false,
        isHot: false,
        currentLoopSize: null,
      },
      b: {
        isPlaying: false,
        isCueing: false,
        isLooping: false,
        loopSetTo8: false,
        loopSetTo16: false,
        loopSetTo32: false,
        isHot: false,
        currentLoopSize: null,
      },
    },
  };

  private actions: Record<Key, Action>;

  constructor(actions: Record<Key, Action>) {
    this.actions = actions;
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

    const currentDeck =
      channel === midiChannel.receiveDeckA
        ? deck.a
        : channel === midiChannel.receiveDeckB
          ? deck.b
          : null;

    if (currentDeck) {
      switch (control) {
        case midiControl.play:
          this.handlePlay(value, currentDeck);
          break;
        case midiControl.cue:
          this.handleCue(value, currentDeck);
          break;
        case midiControl.loop:
          this.handleLoop(value, currentDeck);
          break;
        case midiControl.setLoop:
          this.handleSetLoop(value, currentDeck);
          break;
      }
    }

    if (
      channel === midiChannel.receiveGlobal &&
      control === midiControl.crossfader
    ) {
      this.handleCrossfader(value);
    }

    // Update keys if there are changes

    [
      "cueA",
      "cueB",
      "loopA",
      "loopB",
      "loopControl8A",
      "loopControl8B",
      "loopControl16A",
      "loopControl16B",
      "loopControl32A",
      "loopControl32B",
      "playA",
      "playB",
    ].forEach((key) => {
      const action = this.actions[key as keyof Keys];
      if (action.hasChanged) {
        action.updateKey({
          isOn: this.state.decks[action.deck][action.controller as Controller],
          isHot: this.isHot(action.deck),
        });
        action.hasChanged = false;
      }
    });

    [
      "jumpForwardA",
      "jumpForwardB",
      "jumpBackA",
      "jumpBackB",
      "loadA",
      "loadB",
      "tempoFasterA",
      "tempoFasterB",
      "tempoSlowerA",
      "tempoSlowerB",
    ].forEach((key) => {
      const action = this.actions[key as keyof Keys];
      if (action.hasChanged) {
        action.updateKey();
        action.hasChanged = false;
      }
    });
  }

  isHot(deck: Deck) {
    return this.state.decks[deck].isHot;
  }

  private handleCrossfader(value: number) {
    streamDeck.logger.info(
      `[handleMidiMessage] received MIDI: crossfader value ${value}`,
    );
    switch (true) {
      // fader all the way to the right,
      // deck A is cold, deck B is hot
      case value === 127:
        if (this.state.decks.a.isHot) {
          this.state.decks.a.isHot = false;
          this.setDeckChanged(deck.a);
          streamDeck.logger.info(
            `[handleMidiMessage] fader all the way to the right: deck A is now cold`,
          );
        }

        if (!this.state.decks.b.isHot) {
          this.state.decks.b.isHot = true;
          this.setDeckChanged(deck.b);
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
          this.setDeckChanged(deck.a);
          streamDeck.logger.info(
            `[handleMidiMessage] fader all the way to the left: deck A is now hot`,
          );
        }

        if (this.state.decks.b.isHot) {
          this.state.decks.b.isHot = false;
          this.setDeckChanged(deck.b);
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
          this.setDeckChanged(deck.a);
          streamDeck.logger.info(
            `[handleMidiMessage] fader is in the middle: deck A is now hot`,
          );
        }

        if (!this.state.decks.b.isHot) {
          this.state.decks.b.isHot = true;
          this.setDeckChanged(deck.b);
          streamDeck.logger.info(
            `[handleMidiMessage] fader is in the middle: deck B is now hot`,
          );
        }
    }
  }

  private handleTraktorControl({
    value,
    controller,
    deck,
    key,
  }: {
    value: number;
    controller: Controller;
    deck: Deck;
    key: Key;
  }) {
    const isOn = value === 127;
    if (this.state.decks[deck][controller] !== isOn) {
      this.actions[key].hasChanged = true;
      this.state.decks[deck][controller] = isOn;
    }
    streamDeck.logger.info(
      `[handleMidiMessage] received MIDI: ${key} ${isOn ? "on" : "off"}`,
    );
  }

  private handlePlay(value: number, deck: Deck) {
    this.handleTraktorControl({
      value,
      controller: "isPlaying",
      deck,
      key: `play${deck.toUpperCase()}` as Key,
    });
  }

  private handleCue(value: number, deck: Deck) {
    this.handleTraktorControl({
      value,
      controller: "isCueing",
      deck,
      key: `cue${deck.toUpperCase()}` as Key,
    });
  }

  private handleLoop(value: number, deck: Deck) {
    this.handleTraktorControl({
      value,
      controller: "isLooping",
      deck,
      key: `loop${deck.toUpperCase()}` as Key,
    });
    const currentLoopSize = this.state.decks[deck].currentLoopSize;
    if (currentLoopSize !== null) {
      this.handleTraktorControl({
        value,
        controller: `loopSetTo${currentLoopSize}` as Controller,
        deck,
        key: `loopControl${currentLoopSize}${deck.toUpperCase()}` as Key,
      });
    }
  }

  private handleSetLoop(value: number, deck: Deck) {
    const loopControl = midiControlValueToLoopControl[value];
    streamDeck.logger.info(
      `[handleSetLoop] loop set deck ${deck.toUpperCase()}: ${loopControl} (${value})`,
    );

    const loopSetTo8 = loopControl === "loopSetTo8";
    const loopSetTo16 = loopControl === "loopSetTo16";
    const loopSetTo32 = loopControl === "loopSetTo32";

    this.handleTraktorControl({
      value: loopSetTo8 ? 127 : 0,
      controller: "loopSetTo8",
      deck,
      key: `loopControl8${deck.toUpperCase()}` as Key,
    });

    this.handleTraktorControl({
      value: loopSetTo16 ? 127 : 0,
      controller: "loopSetTo16",
      deck,
      key: `loopControl16${deck.toUpperCase()}` as Key,
    });

    this.handleTraktorControl({
      value: loopSetTo32 ? 127 : 0,
      controller: "loopSetTo32",
      deck,
      key: `loopControl32${deck.toUpperCase()}` as Key,
    });

    if (loopSetTo8) {
      this.state.decks[deck].currentLoopSize = 8;
    } else if (loopSetTo16) {
      this.state.decks[deck].currentLoopSize = 16;
    } else if (loopSetTo32) {
      this.state.decks[deck].currentLoopSize = 32;
    } else {
      this.state.decks[deck].currentLoopSize = null;
    }
  }

  private setDeckChanged(...decks: Deck[]) {
    for (const currentDeck of decks) {
      if (currentDeck === deck.a) {
        this.setKeyChanged(
          "playA",
          "cueA",
          "jumpForwardA",
          "jumpBackA",
          "loadA",
          "loopA",
          "loopControl8A",
          "loopControl16A",
          "loopControl32A",
          "tempoFasterA",
          "tempoSlowerA",
        );
      }

      if (currentDeck === deck.b) {
        this.setKeyChanged(
          "playB",
          "cueB",
          "jumpForwardB",
          "jumpBackB",
          "loadB",
          "loopB",
          "loopControl8B",
          "loopControl16B",
          "loopControl32B",
          "tempoFasterB",
          "tempoSlowerB",
        );
      }
    }
  }

  private setKeyChanged(...keys: Key[]) {
    for (const key of keys) {
      this.actions[key].hasChanged = true;
      streamDeck.logger.info(
        `[handleMidiMessage] hasChanged: ${this.actions[key].hasChanged}`,
      );
    }
  }
}
