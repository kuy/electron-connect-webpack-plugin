[![NPM Package][npm_img]][npm_site]

# electron-connect-webpack-plugin

[electron-connect](https://github.com/Quramy/electron-connect) integration for [webpack](https://webpack.github.io).

## Installation

```
npm install --save-dev electron-connect-webpack-plugin
```

## Setup

```
var ElectronConnectWebpackPlugin = require('electron-connect-webpack-plugin');

module.exports = {
  // ...

  plugins: [
    // ...
    new ElectronConnectWebpackPlugin(),
  ]

  // ...
};
```

## Changelog

See the [Releases](https://github.com/kuy/electron-connect-webpack-plugin/releases) page on GitHub.

## License

MIT

## Author

Yuki Kodama / [@kuy](https://twitter.com/kuy)

[npm_img]: https://img.shields.io/npm/v/electron-connect-webpack-plugin.svg
[npm_site]: https://www.npmjs.org/package/electron-connect-webpack-plugin
