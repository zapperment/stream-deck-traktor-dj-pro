import streamDeck, { SingletonAction } from "@elgato/streamdeck";

/**
 * Cue button; base class for CueA and CueB
 */
export class Cue extends SingletonAction {
  protected readonly handleKeyDown: (key: "cueA" | "cueB") => void;
  protected readonly handleKeyUp: (key: "cueA" | "cueB") => void;

  constructor(
    handleKeyDown: (key: "cueA" | "cueB") => void,
    handleKeyUp: (key: "cueA" | "cueB") => void,
  ) {
    super();
    this.handleKeyDown = handleKeyDown;
    this.handleKeyUp = handleKeyUp;
  }

  updateKey({ isCueing, isHot }: { isCueing: boolean; isHot: boolean }) {
    const image = `imgs/actions/cue/cue-${isCueing ? "pressed" : "normal"}-${isHot ? "hot" : "cold"}.svg`;
    streamDeck.logger.info(`[Cue] setting key image to ${image}!`);
    return Promise.all(this.actions.map((action) => action.setImage(image)));
  }
}
