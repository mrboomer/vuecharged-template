/**
 * Route Generator
 */

const helpers = require('../helpers.js');

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
      pattern: /(;\n\sexport\sdefault\s\[\n\s\s\{)/,
    };

    if (helpers.viewImportExists(data.view)) {
      action.template = helpers.trimTemplateFile('./route/routeOnly.hbs');
    } else {
      action.template = helpers.trimTemplateFile('./route/route.hbs');
    }

    actions.push(action);

    return actions;
  },
};
