import { action } from "@elgato/streamdeck";
import { JumpBack } from "./JumpBack";

/**
 * Jump back deck B
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.jump-back-b" })
export class JumpBackB extends JumpBack {
  override async onKeyDown(): Promise<void> {
    this.updateKey({
      isOn: true,
    });
    this.handleKeyDown("jumpBackB");
  }

  override async onKeyUp(): Promise<void> {
    this.updateKey({
      isOn: false,
    });
    this.handleKeyUp("jumpBackB");
  }
}
