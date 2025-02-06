import type { MidiMessage } from "@julusian/midi";
import { isNoteOff } from "./isNoteOff";
import { getMidiChannel } from "./getMidiChannel";

export function convertNoteOffToNoteOnZeroVel(midiMessage: MidiMessage) {
  if (!isNoteOff(midiMessage)) {
    return midiMessage;
  }
  const midiChannel = getMidiChannel(midiMessage);
  return [
    0x90 | midiChannel, // Note On status byte for the same channel
    midiMessage[1], // Note number remains the same
    0x00, // Velocity is set to 0
  ];
}
