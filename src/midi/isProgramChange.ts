import type { MidiMessage } from "@julusian/midi";

export function isProgramChange(message: MidiMessage) {
  return (message[0] & 0xf0) === 0xc0;
}
