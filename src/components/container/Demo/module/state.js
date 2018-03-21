/**
 * Demo State
 *
 * This single object contains all the component level state.
 *
 * Further Reading: https://vuex.vuejs.org/en/state.html
 */

const state = {
  name: 'John Doe',
  count: 0,
  loading: false,
  redditPosts: [],
  getRedditPostsError: '',
};

export default state;
