/**
 * BASE WEBPACK CONFIGURATION
 */

const webpack = require('webpack');

module.exports = (options) => ({
  entry: options.entry,
  output: options.output,
  plugins: options.plugins.concat([
    new webpack.ProvidePlugin({
      // make fetch available
      fetch: 'exports-loader?self.fetch!whatwg-fetch',
    }),
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.ContextReplacementPlugin(/\.\/locale$/, 'empty-module', false, /js$/),
  ]),
  module: {
    rules: options.moduleRules.concat([
      {
        test: /\.vue$/,
        use: [
          'vue-loader',
          'eslint-loader',
        ],
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          'file-loader',
        ],
      }, {
        test: /\.html$/,
        use: [
          'html-loader',
        ],
      }, {
        test: /\.json$/,
        use: [
          'json-loader',
        ],
      }, {
        test: /\.(mp4|webm)$/,
        use: [{
          loader: 'url-loader',
          query: {
            limit: 10000,
          },
        }],
      },
    ]),
  },
  resolve: {
    modules: ['src', 'node_modules'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      container: 'components/container',
      presentational: 'components/presentational',
    },
    extensions: ['.js', '.vue'],
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  performance: options.performance || {},
});
