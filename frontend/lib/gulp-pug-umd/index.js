'use strict';

const through = require('through2');
const defaultPug = require('pug');
const ext = require('replace-ext');
const PluginError = require('plugin-error');
const log = require('fancy-log');
const babel = require("@babel/core");
const UglifyJS = require("uglify-js");

module.exports = function gulpPug(options) {
  const opts = Object.assign({}, options);
  const pug = opts.pug || opts.jade || defaultPug;

  opts.data = Object.assign(opts.data || {}, opts.locals || {});

  return through.obj(function compilePug(file, enc, cb) {
    const data = Object.assign({}, opts.data, file.data || {});

    opts.filename = file.path;
    file.path = ext(file.path, opts.client ? '.js' : '.html');

    if (file.isStream()) {
      return cb(new PluginError('gulp-pug', 'Streaming not supported'));
    }

    if (file.isBuffer()) {
      try {
        let compiled;
        const contents = String(file.contents);
        if (opts.verbose === true) {
          log('compiling file', file.path);
        }
        if (opts.client) {
          compiled = pug.compileClient(contents, opts);
          compiled = babel.transformSync(`${compiled}\n\nexport default template;`, {
            moduleId: "pugTemplate",
            plugins: [
              ["@babel/plugin-transform-modules-umd", {
                exactGlobals: true
              }]
            ]
          }).code + `if(typeof module !== "undefined"){module.exports=exports.default;}`
          // let minifyResult = UglifyJS.minify(compiled);
          // if(minifyResult.error) {
          //   throw minifyResult.error;
          // }else {
          //   compiled = minifyResult.code;
          // }
        } else {
          compiled = pug.compile(contents, opts)(data);
        }
        file.contents = Buffer.from(compiled);
      } catch (e) {
        return cb(new PluginError('gulp-pug', e));
      }
    }
    cb(null, file);
  });
};
