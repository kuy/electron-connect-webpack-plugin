[![NPM Package][npm_img]][npm_site]

# electron-connect-webpack-plugin

[electron-connect](https://github.com/Quramy/electron-connect) integration for [webpack](https://webpack.github.io).

## Installation

```
npm install --save-dev electron-connect-webpack-plugin
```

## Usage

### 1. Add plugin to `webpack.config.js`

```
var ElectronConnectWebpackPlugin = require('electron-connect-webpack-plugin');
var path = require("path");

module.exports = {
  // ...

  plugins: [
    // ...
    new ElectronConnectWebpackPlugin({
      path:path.join(__dirname, "dist"),
      logLevel: 0
    }),
  ]

  // ...
};
```

### 2. Start webpack with watch option

```
$ webpack --watch
```

## Changelog

See the [Releases](https://github.com/kuy/electron-connect-webpack-plugin/releases) page on GitHub.

## License

MIT

## Author

Yuki Kodama / [@kuy](https://twitter.com/kuy)

[npm_img]: https://img.shields.io/npm/v/electron-connect-webpack-plugin.svg
[npm_site]: https://www.npmjs.org/package/electron-connect-webpack-plugin
