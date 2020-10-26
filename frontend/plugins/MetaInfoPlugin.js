const fs = require('fs');

class MetaInfoPlugin {
  constructor(options) {
    this.options = { filename: 'meta.json', ...options };
  }

  apply(compiler) {
    compiler.hooks.done.tap(this.constructor.name, stats => {
      const metaInfo = stats.toJson();
      const json = JSON.stringify(metaInfo, null, 4);
      return new Promise((resolve, reject) => {
        fs.writeFile(this.options.filename, json, 'utf8', error => {
          if (error) {
            reject(error);
            return;
          }
          resolve();
        });
      });
    });
  }
}

module.exports = MetaInfoPlugin;