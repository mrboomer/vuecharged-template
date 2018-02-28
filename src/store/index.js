import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

/**
 * Store
 *
 * This store holds the entire state. The store’s state can only be changed by
 * committing mutations.
 *
 * Usage:
 *
 * 1. Create a new mutation type. - "What do you want to do?" (constants.js)
 * 2. Create a new action. - "Tell the store what you want to do." (actions.js)
 * 3. Add any new variables to the state. - "What variable will be updated?" (state.js)
 * 4. Create a new mutation. - "Tell the store to update your variable" (mutations.js)
 *
 */

const store = new Vuex.Store({
  state,
  mutations,
  actions,
});

export default store;
