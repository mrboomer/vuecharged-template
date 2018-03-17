/**
 * ExampleContainer Store Module
 *
 * Usage:
 *
 * 1. Add any new variables to the state. (./state.js)
 * 2. Create a new mutation type. (./constants.js)
 * 3. Create a new action. (./actions.js)
 * 4. Create a new mutation. (./mutations.js)
 */

import state from './state';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const namespaced = true;

export default {
  namespaced,
  state,
  actions,
  mutations,
  getters,
};
