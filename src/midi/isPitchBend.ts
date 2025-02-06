import type { MidiMessage } from "@julusian/midi";

export function isPitchBend(midiMessage: MidiMessage) {
  return (midiMessage[0] & 0xf0) === 0xe0;
}
