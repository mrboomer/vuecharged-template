/**
 * Presentational Generator
 */

const helpers = require('../helpers.js');

module.exports = {
  description: 'Add a Presentational Component',
  prompts: [{
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Form',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return helpers.componentExists(value) ? 'A component with this name already exists' : true;
      }

      return 'The name is required';
    },
  }],
  actions: () => {
    // Generate index.js
    const actions = [{
      type: 'add',
      path: '../../src/components/presentational/{{properCase name}}/index.js',
      templateFile: './presentational/index.js.hbs',
      abortOnFail: true,
    }];

    return actions;
  },
};
