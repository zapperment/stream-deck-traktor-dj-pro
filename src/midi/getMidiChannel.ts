import type { MidiMessage } from "@julusian/midi";

export function getMidiChannel(message: MidiMessage) {
  return message[0] & 0x0f;
}
