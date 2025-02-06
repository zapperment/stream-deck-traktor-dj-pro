import type { MidiMessage } from "@julusian/midi";

import { isAfterTouch } from "./isAfterTouch";
import { isControlChange } from "./isControlChange";
import { isNoteOff } from "./isNoteOff";
import { isNoteOn } from "./isNoteOn";
import { isPitchBend } from "./isPitchBend";
import { isProgramChange } from "./isProgramChange";

export function getMidiMessageType(midiMessage: MidiMessage): MidiMessageType | null {
  if (isAfterTouch(midiMessage)) {
    return "at";
  }
  if (isControlChange(midiMessage)) {
    return "cc";
  }
  if (isNoteOff(midiMessage)) {
    return "note-off";
  }
  if (isNoteOn(midiMessage)) {
    return "note-on";
  }
  if (isPitchBend(midiMessage)) {
    return "pb";
  }
  if (isProgramChange(midiMessage)) {
    return "pgm";
  }
  return null;
}
