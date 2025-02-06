import type { MidiMessage } from "@julusian/midi";

export function isAfterTouch(midiMessage: MidiMessage) {
  const [statusByte] = midiMessage;
  // 0xa0 is polyphonic aftertouch, 0xd0 is channel aftertouch
  return (statusByte & 0xf0) === 0xa0 || (statusByte & 0xf0) === 0xd0;
}
