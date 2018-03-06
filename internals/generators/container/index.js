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
  }, {
    type: 'confirm',
    name: 'wantActionsAndMutations',
    default: true,
    message: 'Do you want actions/constants/getters/mutations module for this container?',
  }, {
    when(response) {
      return response.wantActionsAndMutations;
    },
    type: 'confirm',
    name: 'addToStore',
    message: 'Do you want to automatically add this module to the store?',
    default: true,
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

    // If they want actions and mutations, generate actions.js, constants.js,
    // getters.js, and mutations.js
    if (data.wantActionsAndMutations) {
      // Entry
      actions.push({
        type: 'add',
        path: '../../src/components/container/{{properCase name}}/storeModule/index.js',
        templateFile: './container/storeModule/index.js.hbs',
        abortOnFail: true,
      });

      // Actions
      actions.push({
        type: 'add',
        path: '../../src/components/container/{{properCase name}}/storeModule/actions.js',
        templateFile: './container/storeModule/actions.js.hbs',
        abortOnFail: true,
      });

      // Constants
      actions.push({
        type: 'add',
        path: '../../src/components/container/{{properCase name}}/storeModule/constants.js',
        templateFile: './container/storeModule/constants.js.hbs',
        abortOnFail: true,
      });

      // Getters
      actions.push({
        type: 'add',
        path: '../../src/components/container/{{properCase name}}/storeModule/getters.js',
        templateFile: './container/storeModule/getters.js.hbs',
        abortOnFail: true,
      });

      // Mutations
      actions.push({
        type: 'add',
        path: '../../src/components/container/{{properCase name}}/storeModule/mutations.js',
        templateFile: './container/storeModule/mutations.js.hbs',
        abortOnFail: true,
      });

      // State
      actions.push({
        type: 'add',
        path: '../../src/components/container/{{properCase name}}/storeModule/state.js',
        templateFile: './container/storeModule/state.js.hbs',
        abortOnFail: true,
      });
    }

    // If component wants to add module to store
    if (data.addToStore) {
      actions.push({
        type: 'modify',
        path: '../../src/store/index.js',
        pattern: /(\/\/\sModules[\s\S]*Module')(;\s\nVue[\s\S]*Module,)/,
        template: helpers.trimTemplateFile('./container/store.hbs'),
      });
    }

    return actions;
  },
};
