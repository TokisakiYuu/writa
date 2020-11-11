'use strict';

const through = require('through2');
const defaultPug = require('pug');
const ext = require('replace-ext');
const PluginError = require('plugin-error');
const log = require('fancy-log');
const babel = require("@babel/core");
const babelUmdModulesPlugin = require("@babel/plugin-transform-modules-umd");
const babelMinifyPreset = require("babel-preset-minify");

module.exports = function gulpPug(options) {
  const opts = Object.assign({}, options);
  const pug = opts.pug || opts.jade || defaultPug;

  opts.data = Object.assign(opts.data || {}, opts.locals || {});

  return through.obj(function compilePug(file, enc, cb) {
    const data = Object.assign({}, opts.data, file.data || {});

    opts.filename = file.path;
    file.path = ext(file.path, opts.client ? '.js' : '.html');

    if (file.isStream()) {
      return cb(new PluginError('gulp-pug-umd', 'Streaming not supported'));
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
              babel.createConfigItem(babelUmdModulesPlugin)
            ],
            presets: opts.minify? [babel.createConfigItem(babelMinifyPreset)] : []
          }).code;
        } else {
          compiled = pug.compile(contents, opts)(data);
        }
        file.contents = Buffer.from(compiled);
      } catch (e) {
        return cb(new PluginError('gulp-pug-umd', e));
      }
    }
    cb(null, file);
  });
};
