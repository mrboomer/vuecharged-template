/**
 * Container Generator
 */

const helpers = require('../helpers.js');

module.exports = {
  description: 'Add a Container Component',
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
  }, {
    type: 'confirm',
    name: 'wantStyleSheet',
    default: true,
    message: 'Do you want a stylesheet for this container?',
  }],
  actions: (data) => {
    // Generate index.js
    const actions = [{
      type: 'add',
      path: '../../src/components/container/{{properCase name}}/index.js',
      templateFile: './container/index.js.hbs',
      abortOnFail: true,
    }];

    // If component wants a stylesheet
    if (data.wantStyleSheet) {
      actions.push({
        type: 'add',
        path: '../../src/components/container/{{properCase name}}/style.scss',
        templateFile: './container/style.scss.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
