import type { Output } from "@julusian/midi";
import streamDeck from "@elgato/streamdeck";
import { createControlChangeMessage } from "../midi";
import { midiChannel, midiControl, keyDirection } from "../config";

export function createKeyHandler(
  keyDirectionValue: KeyDirection,
  output: Output,
) {
  const value = keyDirectionValue === keyDirection.down ? 127 : 0;
  return (key: Key) => {
    streamDeck.logger.info(`[handleKey] ${key} ${keyDirectionValue}`);
    switch (key) {
      case "cueA":
        output.send(
          createControlChangeMessage(
            midiChannel.sendDeckA,
            midiControl.cue,
            value,
          ),
        );
        break;
      case "cueB":
        output.send(
          createControlChangeMessage(
            midiChannel.sendDeckB,
            midiControl.cue,
            value,
          ),
        );
        break;
      case "jumpBackA":
        output.send(
          createControlChangeMessage(
            midiChannel.sendDeckA,
            midiControl.jumpBack,
            value,
          ),
        );
        break;
      case "jumpBackB":
        output.send(
          createControlChangeMessage(
            midiChannel.sendDeckB,
            midiControl.jumpBack,
            value,
          ),
        );
        break;
      case "jumpForwardA":
        output.send(
          createControlChangeMessage(
            midiChannel.sendDeckA,
            midiControl.jumpForward,
            value,
          ),
        );
        break;
      case "jumpForwardB":
        output.send(
          createControlChangeMessage(
            midiChannel.sendDeckB,
            midiControl.jumpForward,
            value,
          ),
        );
        break;
      case "loadA":
        output.send(
          createControlChangeMessage(
            midiChannel.sendDeckA,
            midiControl.load,
            value,
          ),
        );
        break;
      case "loadB":
        output.send(
          createControlChangeMessage(
            midiChannel.sendDeckB,
            midiControl.load,
            value,
          ),
        );
        break;
      case "playA":
        output.send(
          createControlChangeMessage(
            midiChannel.sendDeckA,
            midiControl.play,
            value,
          ),
        );
        break;
      case "playB":
        output.send(
          createControlChangeMessage(
            midiChannel.sendDeckB,
            midiControl.play,
            value,
          ),
        );
        break;

      case "tempoFasterA":
        output.send(
          createControlChangeMessage(
            midiChannel.sendDeckA,
            midiControl.tempoFaster,
            value,
          ),
        );
        break;

      case "tempoFasterB":
        output.send(
          createControlChangeMessage(
            midiChannel.sendDeckB,
            midiControl.tempoFaster,
            value,
          ),
        );
        break;

      case "tempoSlowerA":
        output.send(
          createControlChangeMessage(
            midiChannel.sendDeckA,
            midiControl.tempoSlower,
            value,
          ),
        );
        break;

      case "tempoSlowerB":
        output.send(
          createControlChangeMessage(
            midiChannel.sendDeckB,
            midiControl.tempoSlower,
            value,
          ),
        );
        break;

      default:
        streamDeck.logger.error(`[handleKey] unknown key: ${key}`);
    }
  };
}
