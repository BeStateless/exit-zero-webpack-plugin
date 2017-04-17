function ExitZeroWebpackPlugin (options) {
  this.active = options.active == null ? true : options.active;
  this.activationFunction = options.activationFunction == null ? () => true : options.activationFunction;
};

ExitZeroWebpackPlugin.prototype.apply = function (compiler) {
  compiler.plugin('done', (stats, callback) => {
    if (stats.compilation.errors && stats.compilation.errors.length) {
      if (this.active) {
        process.exit(0);
      }
    }
    return callback;
  });
};

module.exports = ExitZeroWebpackPlugin;
