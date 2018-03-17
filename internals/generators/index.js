/**
 * Generators
 *
 * Further Reading: https://github.com/amwmedia/plop
 */

const presentationalGenerator = require('./presentational/index.js');
const containerGenerator = require('./container/index.js');
const viewGenerator = require('./view/index.js');
const routeGenerator = require('./route/index.js');
const helpers = require('./helpers.js');

module.exports = (plop) => {
  plop.setHelper('prependSlashToPath', helpers.prependSlashToPath);
  plop.setGenerator('presentational', presentationalGenerator);
  plop.setGenerator('container', containerGenerator);
  plop.setGenerator('view', viewGenerator);
  plop.setGenerator('route', routeGenerator);
};
