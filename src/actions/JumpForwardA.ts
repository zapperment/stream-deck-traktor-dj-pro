import { action } from "@elgato/streamdeck";
import { JumpForward } from "./JumpForward";

/**
 * Jump forward deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.jump-forward-a" })
export class JumpForwardA extends JumpForward {
  override async onKeyDown(): Promise<void> {
    this.updateKey({
      isPressed: true,
    });
    this.handleKeyDown("jumpForwardA");
  }
  override async onKeyUp(): Promise<void> {
    this.updateKey({
      isPressed: false,
    });
    this.handleKeyUp("jumpForwardA");
  }
}
