import { action } from "@elgato/streamdeck";
import { JumpForward } from "./JumpForward";
import { deck } from "../config";

/**
 * Jump forward deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.jump-forward-a" })
export class JumpForwardA extends JumpForward {
  constructor(
    handleKeyDown: (key: Key) => void,
    handleKeyUp: (key: Key) => void,
  ) {
    super(handleKeyDown, handleKeyUp, deck.a);
  }

  override async onKeyDown(): Promise<void> {
    this.updateKey({
      isOn: true,
    });
    this.handleKeyDown("jumpForwardA");
  }
  override async onKeyUp(): Promise<void> {
    this.updateKey({
      isOn: false,
    });
    this.handleKeyUp("jumpForwardA");
  }
}
