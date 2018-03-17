/**
 * Generator Helpers
 */

const fs = require('fs');
const path = require('path');

function toTitleCase(str) {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

module.exports = {
  prependSlashToPath(txt) {
    if (txt.charAt(0) !== '/') {
      return `/${txt}`;
    }
    return txt;
  },
  trimTemplateFile(template) {
    // Loads the template file and trims the whitespace and then returns the content as a string.
    return fs.readFileSync(path.join(__dirname, template), 'utf8').replace(/\s*$/, '');
  },
  componentExists(comp) {
    const pageContainers = fs.readdirSync(path.join(__dirname, '../../src/components/container'));
    const pagePresentationals = fs.readdirSync(path.join(__dirname, '../../src/components/presentational'));
    const components = pageContainers.concat(pagePresentationals);
    return components.indexOf(comp) >= 0;
  },
  viewExists(view) {
    const views = fs.readdirSync(path.join(__dirname, '../../src/views'));
    return views.indexOf(`${view}.vue`) >= 0;
  },
  viewImportExists(view) {
    const formattedView = toTitleCase(view);
    const viewImport = `const ${formattedView} = () => import('views/${formattedView}');`;
    const fileData = fs.readFileSync(path.join(__dirname, '../../src/router/routes.js'));
    if (fileData.indexOf(viewImport) >= 0) {
      return true;
    }
    return false;
  },
  pathExists(inputtedPath) {
    const formattedPath = this.prependSlashToPath(inputtedPath);
    const routePath = `path: '${formattedPath}',`;
    const fileData = fs.readFileSync(path.join(__dirname, '../../src/router/routes.js'));
    if (fileData.indexOf(routePath) >= 0) {
      return true;
    }
    return false;
  },
};
