/**
 * ExampleContainer Actions
 *
 * These are functions that dispatch (communicate changes to the store) our
 * mutations. Actions do not mutate the state directly, but only commit the
 * mutations.
 *
 * Further Reading: https://vuex.vuejs.org/en/actions.html
 *
 * 1. Import your constant
 * 2. Add a function inside the actions object formatted like this:
 *
 *    yourAction({ commit, state }, payload) {
 *      commit({
 *        type: YOUR_ACTION_CONSTANT,
 *        var1: state.someVar1,
 *        var2: payload.var2,
 *      });
 *    },
 *
 */

import {
  UPDATE_NAME,
  INCREMENT,
  DECREMENT,
} from './constants';

const actions = {
  updateName({ commit }, payload) {
    commit({
      type: UPDATE_NAME,
      name: payload.name,
    });
  },
  incrementCounter({ commit }) {
    commit({
      type: INCREMENT,
    });
  },
  decrementCounter({ commit }) {
    commit({
      type: DECREMENT,
    });
  },
};

export default actions;