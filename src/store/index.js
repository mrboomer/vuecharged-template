/**
 * Store
 *
 * This store holds the entire state. The store’s state can only be changed by
 * committing mutations.
 *
 * Usage:
 *
 * 1. Add any new variables to the state. - "What variable will be updated?"
 *    (state.js)
 *
 * 1. Create a new mutation type. - "What do you want to do?" - like 'git add .'
 *    (constants.js)
 *
 * 2. Create a new action. - "Tell the store what you want to do." - like 'git commit'
 *    (actions.js)
 *
 * 3. Create a new mutation. - "Tell the store to update your variable" - like 'git push'
 *    (mutations.js)
 *
 */

import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions,
});

export default store;
