import { action } from "@elgato/streamdeck";
import { JumpForward } from "./JumpForward";
import { deck } from "../config";
/**
 * Jump forward deck B
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.jump-forward-b" })
export class JumpForwardB extends JumpForward {
  constructor(
    handleKeyDown: (key: Key) => void,
    handleKeyUp: (key: Key) => void,
  ) {
    super(handleKeyDown, handleKeyUp, deck.b);
  }
  override async onKeyDown(): Promise<void> {
    this.updateKey({
      isOn: true,
    });
    this.handleKeyDown("jumpForwardB");
  }
  override async onKeyUp(): Promise<void> {
    this.updateKey({
      isOn: false,
    });
    this.handleKeyUp("jumpForwardB");
  }
}
