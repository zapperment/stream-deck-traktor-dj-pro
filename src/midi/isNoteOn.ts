import type { MidiMessage } from "@julusian/midi";

export function isNoteOn(message: MidiMessage) {
  const [statusByte] = message;
  const isNoteOnMessage = (statusByte & 0xf0) === 0x90;
  if (!isNoteOnMessage) {
    return false;
  }
  // note on with velocity 0 is considered a note off
  return message[2] !== 0x00;
}
