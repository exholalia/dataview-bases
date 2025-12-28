# Obsidian Dataview Bases Plugin

The eventual goal is to run Dataview queries as formulae in Bases, the current iteration adds a Bases View to show tasks for filtered files.

### TODO

 - [X] Toggle to only show uncompleted tasks.
 - [ ] Group by file.
 - [ ] Group by Obsidian Bases grouping.
 - [ ] CSS magic, maybe?
 - [ ] How can I create a formula?
 - [ ] How can I add my own type of formula that returns tasks rather than pages?

## Acknowledgements

[Obsidian Dataview](https://github.com/blacksmithgu/obsidian-dataview) was created by Michael "Tres" Brenan. 

## Installation

### BRAT (Recommended)

Until this plugin is made official, it can be installed via BRAT:

1. Install the BRAT plugin from "Community plugins" page.
2. Go to the BRAT settings.
3. Click the `Add beta plugin` button.
4. Add this repository (https://github.com/exholalia/dataview-bases) as a beta plugin.
5. Select the latest release (or another release, if you wish).
6. Click the `Add plugin` button.
7. Enable the plugin.

### Manually

1. Clone this repo.
2. Make sure your NodeJS is at least v16 (`node --version`).
3. `npm i` or `yarn` to install dependencies.
4. `npm run dev` to start compilation in watch mode.
5. Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/dataview-bases/`.
