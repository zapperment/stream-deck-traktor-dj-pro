import { action } from "@elgato/streamdeck";
import { JumpForward } from "./JumpForward";

/**
 * Jump forward deck B
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.jump-forward-b" })
export class JumpForwardB extends JumpForward {
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
