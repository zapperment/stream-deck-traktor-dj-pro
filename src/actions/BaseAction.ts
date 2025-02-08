import { SingletonAction } from "@elgato/streamdeck";

/**
 * Base class for all actions
 */
export class BaseAction extends SingletonAction {
  controller?: Controller;
  hasChanged: boolean = false;
  blockHot: boolean;
  deck: Deck;

  constructor({
    controller,
    blockHot,
    deck,
  }: {
    controller?: Controller;
    blockHot: boolean;
    deck: Deck;
  }) {
    super();
    this.controller = controller;
    this.blockHot = blockHot;
    this.deck = deck;
  }
}
