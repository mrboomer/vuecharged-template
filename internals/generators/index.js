/**
 * Generators
 *
 * Further Reading: https://github.com/amwmedia/plop
 *
 */

const presentationalGenerator = require('./presentational/index.js');
const containerGenerator = require('./container/index.js');

module.exports = (plop) => {
  plop.setGenerator('presentational', presentationalGenerator);
  plop.setGenerator('container', containerGenerator);
};
