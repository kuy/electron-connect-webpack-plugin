'use strict';

var electron = require('electron-connect').server;

function ElectronConnectWebpackPlugin(options) {
  ElectronConnectWebpackPlugin.prototype.options = options;
}

ElectronConnectWebpackPlugin.prototype.apply = function(compiler) {
  var server;
  var self = this;

  function restart() {
    if (typeof server === 'undefined') {
      server = electron.create(self.options);
      server.start();
    } else {
      server.restart();
    }
  }

  compiler.plugin('done', restart);
};

module.exports = ElectronConnectWebpackPlugin;
