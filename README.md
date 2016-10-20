# Game Of Life

Based on
[Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)

## Features

- On load, a randomly generated board will start playing
- Generations: counts how many generations have elapsed
- Start/Stop simulation
  - Next: manually advance 1 generation (used best in pause mode)
  - Run: automatically play simulation (time steps are determined by simulation speed controls); will stop automatically if board is empty
  - Pause: pauses simulation
  - Clear: clears board (for manual set up); also resets generations count
- Set up board
  - Players can click on a cell to toggle its state (alive/dead)
- Adjust grid size
  - Players can choose from 3 grid sizes
- Adjust simulation speed
  - Players can choose from 3 simulation speeds

## Code

The game logic is in Javascript.

Raw Javascript files are in the `app` directory. Compiled Javascript files are in the `dist` directory.

Javascript files will compile using babel/webpack by running:
```
$ npm run production
```
or in watch mode
```
$ npm run watch
```

### Javascript
- [ES6 Syntax](http://es6-features.org/#Constants)
- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [Webpack](http://webpack.github.io/)

To install JS dev dependencies (listed in [package.json](package.json)):
```
npm install
```

If you install any new JS dev dependencies, use the `--save-dev` option to list
in [package.json](package.json):
```
npm install <package-name> --save-dev
```

## View

To view, open the following in your browser:
```
./dist/index.html
```
