/**
 * View Generator
 */

const helpers = require('../helpers.js');

module.exports = {
  description: 'Add a View Component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'About',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return helpers.viewExists(value) ? 'A view with this name already exists' : true;
      }

      return 'The name is required';
    },
  }, {
    type: 'confirm',
    name: 'createRoute',
    default: true,
    message: 'Do you want to create a route for this view?',
  }, {
    when(response) {
      return response.createRoute;
    },
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
  actions: (data) => {
    // Generate index.js
    const actions = [{
      type: 'add',
      path: '../../src/views/{{properCase name}}.vue',
      templateFile: './view/index.vue.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/views/tests/{{properCase name}}.spec.js',
      templateFile: './view/tests/index.spec.js.hbs',
      abortOnFail: true,
    }];

    // If component wants to add route for view
    if (data.createRoute) {
      actions.push({
        type: 'modify',
        path: '../../src/router/routes.js',
        pattern: /(;\n\nexport[\s\S]*},)/,
        template: helpers.trimTemplateFile('./route/route.hbs'),
        data: {
          view: data.name,
        },
      });
    }

    return actions;
  },
};
