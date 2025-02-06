import { isNoteOn } from "./isNoteOn";

describe("The isNoteOn function", () => {
  describe("when it receives a note on MIDI message with velocity greater than zero", () => {
    it("returns true", () => {
      expect(isNoteOn([0x90, 0x30, 0x64])).toEqual(true);
    });
  });
  describe("when it receives a note on MIDI message with velocity zero", () => {
    it("returns false", () => {
      expect(isNoteOn([0x90, 0x30, 0x00])).toEqual(false);
    });
  });
  describe("when it receives a note off MIDI message", () => {
    it("returns false", () => {
      expect(isNoteOn([0x80, 0x30, 0x00])).toEqual(false);
    });
  });
  describe("when it receives a control change MIDI message", () => {
    it("returns false", () => {
      expect(isNoteOn([0xb0, 0x40, 0x7f])).toEqual(false);
    });
  });
});
