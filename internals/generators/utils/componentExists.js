/**
 * componentExists
 *
 * Check whether the given component exists in either the presentational or component directory
 */

const fs = require('fs');
const path = require('path');

const pageContainers = fs.readdirSync(path.join(__dirname, '../../../src/components/container'));
const pagePresentationals = fs.readdirSync(path.join(__dirname, '../../../src/components/presentational'));
const components = pageContainers.concat(pagePresentationals);

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
