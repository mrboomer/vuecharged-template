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
    // Generate index.vue and index.spec.js
    const actions = [{
      type: 'add',
      path: '../../src/components/container/{{properCase name}}/index.vue',
      templateFile: './container/index.vue.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../src/components/container/{{properCase name}}/tests/index.spec.js',
      templateFile: './container/tests/index.spec.js.hbs',
      abortOnFail: true,
    }];

    // If component wants actions and mutations, generate actions.js, constants.js,
    // getters.js, mutations.js, and accompanying tests
    if (data.wantActionsAndMutations) {
      // Entry
      actions.push({
        type: 'add',
        path: '../../src/components/container/{{properCase name}}/module/index.js',
        templateFile: './container/module/index.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../src/components/container/{{properCase name}}/module/tests/index.spec.js',
        templateFile: './container/module/tests/index.spec.js.hbs',
        abortOnFail: true,
      });

      // State
      actions.push({
        type: 'add',
        path: '../../src/components/container/{{properCase name}}/module/state.js',
        templateFile: './container/module/state.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../src/components/container/{{properCase name}}/module/tests/state.spec.js',
        templateFile: './container/module/tests/state.spec.js.hbs',
        abortOnFail: true,
      });

      // Constants
      actions.push({
        type: 'add',
        path: '../../src/components/container/{{properCase name}}/module/constants.js',
        templateFile: './container/module/constants.js.hbs',
        abortOnFail: true,
      });

      // Actions
      actions.push({
        type: 'add',
        path: '../../src/components/container/{{properCase name}}/module/actions.js',
        templateFile: './container/module/actions.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../src/components/container/{{properCase name}}/module/tests/actions.spec.js',
        templateFile: './container/module/tests/actions.spec.js.hbs',
        abortOnFail: true,
      });

      // Mutations
      actions.push({
        type: 'add',
        path: '../../src/components/container/{{properCase name}}/module/mutations.js',
        templateFile: './container/module/mutations.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../src/components/container/{{properCase name}}/module/tests/mutations.spec.js',
        templateFile: './container/module/tests/mutations.spec.js.hbs',
        abortOnFail: true,
      });

      // Getters
      actions.push({
        type: 'add',
        path: '../../src/components/container/{{properCase name}}/module/getters.js',
        templateFile: './container/module/getters.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: '../../src/components/container/{{properCase name}}/module/tests/getters.spec.js',
        templateFile: './container/module/tests/getters.spec.js.hbs',
        abortOnFail: true,
      });
    }

    // If component wants to add module to store
    if (data.addToStore) {
      actions.push({
        type: 'modify',
        path: '../../src/store/index.js',
        pattern: /(\/\/\sModules[\s\S]*module')(;\s\nVue[\s\S]*Module,)/,
        template: helpers.trimTemplateFile('./container/store.hbs'),
      });
    }

    return actions;
  },
};
