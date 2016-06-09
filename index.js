'use strict';

var electron = require('electron-connect').server;

function ElectronConnectWebpackPlugin(options) {
}

ElectronConnectWebpackPlugin.prototype.apply = function(compiler) {
  var server;

  function restart() {
    if (typeof server === 'undefined') {
      server = electron.create();
      server.start();
    } else {
      server.restart();
    }
  }

  compiler.plugin('done', restart);
};

module.exports = ElectronConnectWebpackPlugin;
