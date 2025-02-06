import type { MidiMessage } from "@julusian/midi";

export function getPitchBendValue(midiMessage: MidiMessage) {
  const [, lsb, msb] = midiMessage;
  return ((msb << 7) | lsb) - 8192;
}
