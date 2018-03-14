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
    default: 'Hero',
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
    // Generate index.js and index.spec.js
    const actions = [{
      type: 'add',
      path: '../../src/components/presentational/{{properCase name}}/index.js',
      templateFile: './presentational/index.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/components/presentational/{{properCase name}}/tests/index.spec.js',
      templateFile: './presentational/tests/index.spec.js.hbs',
      abortOnFail: true,
    }];

    // If component wants a stylesheet
    if (data.wantStyleSheet) {
      actions.push({
        type: 'add',
        path: '../../src/components/presentational/{{properCase name}}/style.scss',
        templateFile: './presentational/style.scss.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
