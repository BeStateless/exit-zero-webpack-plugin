function ExitZeroWebpackPlugin () {

};

ExitZeroWebpackPlugin.prototype.apply = function (compiler) {
  compiler.plugin('done', (stats, callback) => {
    if (stats.compilation.errors && stats.compilation.errors.length) {
      console.log('There were ' + stats.compilation.errors.length - 1 + ' errors.');
      process.exit(0);
    }
    callback();
  });
};

module.exports = ExitZeroWebpackPlugin;
