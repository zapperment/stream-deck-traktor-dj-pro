import { action } from "@elgato/streamdeck";
import { JumpBack } from "./JumpBack";
import { deck } from "../config";

/**
 * Jump back deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.jump-back-a" })
export class JumpBackA extends JumpBack {
  override async onKeyDown(): Promise<void> {
    this.updateKey({
      isPressed: true,
    });
    this.handleKeyDown("jumpBackA");
  }

  override async onKeyUp(): Promise<void> {
    this.updateKey({
      isPressed: false,
    });
    this.handleKeyUp("jumpBackA");
  }
}
