import { isControlChange } from "./isControlChange";

describe("The isControlChange function", () => {
  describe.each`
    midiMessage           | value
    ${[0xb0, 0x01, 0x64]} | ${true}
    ${[0xb4, 0x77, 0x24]} | ${true}
    ${[0x90, 0x3c, 0x40]} | ${false}
  `("when it receives MIDI message $midiMessage", ({ midiMessage, value }) => {
    it(`returns ${value}`, () => {
      expect(isControlChange(midiMessage)).toBe(value);
    });
  });
});
