/**
 * Demo Mutations
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
 */

import {
  UPDATE_NAME,
  INCREMENT,
  DECREMENT,
  GET_REDDIT_POSTS,
  UPDATE_LOCALE,
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
  [GET_REDDIT_POSTS.REQUEST](state) {
    state.loading = true;
  },
  [GET_REDDIT_POSTS.SUCCESS](state, payload) {
    state.loading = false;
    state.redditPosts = payload.posts;
  },
  [GET_REDDIT_POSTS.FAILURE](state, payload) {
    state.loading = false;
    state.getRedditPostsError = payload.error;
  },
  [UPDATE_LOCALE](state, payload) {
    state.locale = payload.locale;
  },
};

export default mutations;
