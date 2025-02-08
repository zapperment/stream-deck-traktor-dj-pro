import { action } from "@elgato/streamdeck";
import { JumpForward } from "./JumpForward";

/**
 * Jump forward deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.jump-forward-a" })
export class JumpForwardA extends JumpForward {
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
