/**
 * File Transformer for Jest
 *
 * Further Reading: https://facebook.github.io/jest/docs/en/webpack.html
 */

const path = require('path');

module.exports = {
  process(src, filename, config, options) { // eslint-disable-line no-unused-vars
    return `module.exports = ${JSON.stringify(path.basename(filename))};`;
  },
};
