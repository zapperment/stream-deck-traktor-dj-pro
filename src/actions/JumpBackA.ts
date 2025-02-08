import { action } from "@elgato/streamdeck";
import { JumpBack } from "./JumpBack";
import { deck } from "../config";

/**
 * Jump back deck A
 */
@action({ UUID: "rocks.zapperment.traktor-dj-pro.jump-back-a" })
export class JumpBackA extends JumpBack {
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
    this.handleKeyDown("jumpBackA");
  }

  override async onKeyUp(): Promise<void> {
    this.updateKey({
      isOn: false,
    });
    this.handleKeyUp("jumpBackA");
  }
}
