/**
 * Route Generator
 */

const fs = require('fs');
const path = require('path');
const helpers = require('../helpers.js');

function trimTemplateFile(template) {
  // Loads the template file and trims the whitespace and then returns the content as a string.
  return fs.readFileSync(path.join(__dirname, `./${template}`), 'utf8').replace(/\s*$/, '');
}

module.exports = {
  description: 'Add a Route',
  prompts: [{
    type: 'input',
    name: 'view',
    message: 'Which view should the route show?',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return helpers.viewExists(value) ? true : `"${value}" doesn't exist.`;
      }

      return 'The view is required';
    },
  }, {
    type: 'input',
    name: 'path',
    message: 'Enter the path of the route.',
    default: '/about',
    validate: (value) => {
      if ((/.+/).test(value)) {
        // Check if path already exists
        if (helpers.pathExists(value)) {
          return 'This path already exists';
        }

        return true;
      }

      return 'The path is required';
    },
  }],

  // Add the route to the routes.js file
  actions: (data) => {
    const actions = [];
    const action = {
      type: 'modify',
      path: '../../src/router/routes.js',
      pattern: /(;\n\sexport\sdefault\s\[\n\s\s\{)/g,
    };

    if (helpers.viewImportExists(data.view)) {
      action.template = trimTemplateFile('routeOnly.hbs');
    } else {
      action.template = trimTemplateFile('route.hbs');
    }

    actions.push(action);

    return actions;
  },
};
