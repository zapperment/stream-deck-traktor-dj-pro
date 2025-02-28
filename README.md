# Stream Deck Traktor Pro

A plugin for using the Elgato Stream Deck with the software Native Instruments
Traktor Pro.

This is a work in progress, use at your own risk. The installation instructions
are for Mac computers. It may be possible to use the plugin on Windows, but this
has not been tested.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/download/), version 20
- [Native Instruments Traktor Pro](https://www.native-instruments.com/products/traktor/dj-software/traktor-pro-4/),
  version 4
- [Elgato Stream Deck](https://www.elgato.com/en/stream-deck) — the project was
  tested with the Stream Deck XL, it may or may not work with other models

### Prepare MIDI ports

This plugin uses MIDI to control Traktor Pro. You need to prepare two MIDI
ports:

- One for the Stream Deck to send MIDI commands to Traktor Pro
- One for Traktor Pro to receive MIDI commands from the Stream Deck

Open up the MIDI Setup app and create two virtual MIDI ports with the IAC
driver.

Name them as follows:

- `Traktor to Stream Deck`
- `Stream Deck to Traktor`

### Prepare Traktor Pro

Go to _Preferences_ → _Controller Manager_.

Under _Device Setup_, click _Add_ and select _Import from disk_.

Select the
[traktor-pro-controller-settings.tsi](traktor-pro-controller-settings.tsi) file
in the root directory of this project.

Configure the _In-Port_ to be the `IAC-Driver (Stream Deck to Traktor)` port you
created in the previous step.

Configure the _Out-Port_ to be the `IAC-Driver (Traktor to Stream Deck)` port
you created in the previous step.

Close the _Preferences_ window.

### Install dependencies

On the command line, navigate to the root directory of this project and run:

```bash
npm install
```

### Create a symbolic link to the plugin

On the command line, navigate to the root directory of this project and run:

```bash
ln -s ./stream-deck-traktor-pro.sdPlugin ~/Library/Application\ Support/StreamDeck/Plugins/
```

### Run the plugin

On the command line, navigate to the root directory of this project and run:

```bash
npm run watch
```

This will start the plugin in watch mode (for development purposes). You should
see a message in the terminal window indicating that the plugin is running.

### Use the plugin

Open the Elgato Stream Deck application and you should see the plugin _Traktor
Pro_ on the menu on the right, at the bottom, below other plugins.

Create a new profile for Traktor Pro.

Drag and drop the actions from the plugin to the profile.

Each action has a version for Deck A and Deck B. More than two decks are not
supported currently.

It makes sense to arrange the actions on your Stream Deck so that the left half
of the keys are for deck A and the keys on the right half are for deck B.
