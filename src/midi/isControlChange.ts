import type { MidiMessage } from "@julusian/midi";

export function isControlChange(message: MidiMessage) {
  return (message[0] & 0xf0) === 0xb0;
}
