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
  }],
  actions: () => {
    // Generate index.js
    const actions = [{
      type: 'add',
      path: '../../src/views/{{properCase name}}.vue',
      templateFile: './view/index.vue.hbs',
      abortOnFail: true,
    }];

    return actions;
  },
};
