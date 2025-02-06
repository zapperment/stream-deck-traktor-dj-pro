import midi from "@julusian/midi";
import type { Input, Output } from "@julusian/midi";
import { getPortIndex } from "./getPortIndex";

export function initPort<T extends Input | Output>(portName: string, portType: "input" | "output"): T {
  let midiInterface: T;

  if (portType === "input") {
    midiInterface = new midi.Input() as T;
  } else {
    midiInterface = new midi.Output() as T;
  }

  const portIndex = getPortIndex(midiInterface, portName);
  if (portIndex === null) {
    throw new Error(`MIDI ${portType} port ${portName} not found`);
  }

  midiInterface.openPort(portIndex);

  return midiInterface;
}
