/**
 * BASE WEBPACK CONFIGURATION
 */

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(process.cwd(), 'src/assets'),
        to: path.resolve(process.cwd(), 'dist/assets'),
        ignore: ['.*'],
      },
    ]),
  ]),
  module: {
    rules: [
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
        // Do not transform vendor's CSS with CSS-modules
        // The point is that they remain in global scope.
        // Since we require these CSS files in our JS or CSS files,
        // they will be a part of our compilation either way.
        // So, no need for ExtractTextPlugin here.
        test: /\.css$/,
        include: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
        ],
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          'file-loader',
        ],
      }, {
        test: /\.(gif|png|jpe?g)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                optimizationLevel: 7,
              },
              gifsicle: {
                interlaced: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
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
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      container: 'components/container',
      presentational: 'components/presentational',
      images: 'assets/images',
    },
    extensions: ['.js', '.vue', '.css', '.scss'],
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  performance: options.performance || {},
});
