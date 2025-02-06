import type { Input, Output } from "@julusian/midi";

export function getPortIndex(midiInterface: Input | Output, portName: string) {
  let portIndex = 0;
  for (; portIndex < midiInterface.getPortCount(); portIndex++) {
    if (midiInterface.getPortName(portIndex) === portName) {
      return portIndex;
    }
  }
  return null;
}
