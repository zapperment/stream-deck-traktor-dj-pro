import type { MidiMessage } from "@julusian/midi";

import { isAfterTouch } from "./isAfterTouch";
import { isControlChange } from "./isControlChange";
import { isNoteOff } from "./isNoteOff";
import { isNoteOn } from "./isNoteOn";
import { isPitchBend } from "./isPitchBend";
import { isProgramChange } from "./isProgramChange";

export function getMidiMessageTypeName(midiMessage: MidiMessage, verbose = false) {
  if (isAfterTouch(midiMessage)) {
    return verbose ? "aftertouch" : "AT";
  }
  if (isControlChange(midiMessage)) {
    return verbose ? "control change" : "CC";
  }
  if (isNoteOff(midiMessage)) {
    return verbose ? "note off" : "NF";
  }
  if (isNoteOn(midiMessage)) {
    return verbose ? "note on" : "NO";
  }
  if (isPitchBend(midiMessage)) {
    return verbose ? "pitch bend" : "PB";
  }
  if (isProgramChange(midiMessage)) {
    return verbose ? "program change" : "PG";
  }
  return null;
}
