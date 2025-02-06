import { getPitchBendValue } from "./getPitchBendValue";

describe("The getPitchBendValue function", () => {
  describe.each`
    midiMessage           | value
    ${[0xe0, 0x00, 0x00]} | ${-8192}
    ${[0xe0, 0x00, 0x40]} | ${0}
    ${[0xe0, 0x7f, 0x7f]} | ${8191}
  `("when it receives MIDI message $midiMessage", ({ midiMessage, value }) => {
    it(`returns ${value}`, () => {
      expect(getPitchBendValue(midiMessage)).toBe(value);
    });
  });
});
