/**
 * ExampleContainer Mutations
 *
 * The only way to change the state in Vuex is by committing a mutation. This is
 * also the function that updates the view.
 *
 * Further Reading: https://vuex.vuejs.org/en/mutations.html
 *
 * Usage:
 *
 * 1. Import your constant
 * 2. Add a function inside the mutations object formatted like this:
 *
 *    [YOUR_ACTION_CONSTANT](state, payload) {
 *      state.someVar = payload.var1;
 *      state.anotherVar = payload.var2;
 *    }
 *
 */

import {
  UPDATE_NAME,
  INCREMENT,
  DECREMENT,
} from './constants';

const mutations = {
  [UPDATE_NAME](state, payload) {
    state.name = payload.name;
  },
  [INCREMENT](state) {
    state.count += 1;
  },
  [DECREMENT](state) {
    state.count -= 1;
  },
};

export default mutations;
