const merge = require('webpack-merge');
const utils = require('../helpers/utils');
const config = require('../config');

const isProduction = process.env.NODE_ENV === 'production';
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap;

module.exports = {
  loaders: merge(
    {
      // you need to specify `i18n` loaders key with `vue-i18n-loader`
      // (https://github.com/kazupon/vue-i18n-loader)
      i18n: '@kazupon/vue-i18n-loader',
    },
    utils.cssLoaders({
      sourceMap: sourceMapEnabled,
      extract: isProduction,
      // you need to specify `i18n` loaders key with `vue-i18n-loader`
      // (https://github.com/kazupon/vue-i18n-loader)
      i18n: 'vue-i18n-loader',
    })
  ),
  cssSourceMap: sourceMapEnabled,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href',
  },
};
