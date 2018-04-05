'use strict';

var electron = require('electron-connect').server;
var reload = false;

function ElectronConnectWebpackPlugin(options) {
  if(options.reload){
    reload = true;
    delete options.reload;
  }
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
      if(reload) server.reload(); else server.restart();
    }
  }

  compiler.plugin('done', restart);
};

module.exports = ElectronConnectWebpackPlugin;
