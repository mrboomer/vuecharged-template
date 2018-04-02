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
    name: 'wantI18n',
    default: true,
    message: 'Do you want i18n messages (i.e. will this component use text)?',
  }],
  actions: (data) => {
    // Generate index.vue and index.spec.js
    const actions = [{
      type: 'add',
      path: '../../src/components/presentational/{{properCase name}}/index.vue',
      templateFile: './presentational/index.vue.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/components/presentational/{{properCase name}}/tests/index.spec.js',
      templateFile: './presentational/tests/index.spec.js.hbs',
      abortOnFail: true,
    }];

    // If component wants i18n
    if (data.wantI18n) {
      actions.push({
        type: 'add',
        path: '../../src/components/presentational/{{properCase name}}/messages.js',
        templateFile: './presentational/messages.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
