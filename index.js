function ExitZeroWebpackPlugin (options) {
  this.active = options.active == null ? true : options.active;
};

ExitZeroWebpackPlugin.prototype.apply = function (compiler) {
  compiler.plugin('done', (stats, callback) => {
    if (stats.compilation.errors && stats.compilation.errors.length) {
      console.log('There were ' + stats.compilation.errors.length - 1 + ' errors.');
      if (this.active) {
        process.exit(0);
      }
    }
    callback();
  });
};

module.exports = ExitZeroWebpackPlugin;
