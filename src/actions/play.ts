import streamDeck, { SingletonAction } from "@elgato/streamdeck";

/**
 * Starts/stops playing; base class for PlayA and PlayB
 */
export class Play extends SingletonAction {
  protected readonly handleKeyDown: (key: "playA" | "playB") => void;

  constructor(handleKeyDown: (key: "playA" | "playB") => void) {
    super();
    this.handleKeyDown = handleKeyDown;
  }

  updateKey({ isPlaying, isHot }: { isPlaying: boolean; isHot: boolean }) {
    const image = `imgs/actions/play/play-${isPlaying ? "playing" : "stopped"}-${isHot ? "hot" : "cold"}.svg`;
    streamDeck.logger.info(`setting key image to ${image}!`);
    return Promise.all(this.actions.map((action) => action.setImage(image)));
  }
}
