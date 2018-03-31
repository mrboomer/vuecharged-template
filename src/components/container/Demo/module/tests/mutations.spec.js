import mutations from '../mutations';
import {
  UPDATE_NAME,
  INCREMENT,
  DECREMENT,
  GET_REDDIT_POSTS,
} from '../constants';

describe('Demo Mutations', () => {
  it(UPDATE_NAME, () => {
    // Mock State/payload
    const state = { name: '' };
    const payload = { name: 'John Doe' };

    // Apply Mutation
    mutations[UPDATE_NAME](state, payload);

    // Assert Result
    expect(state.name).toBe('John Doe');
  });

  it(INCREMENT, () => {
    // Mock State
    const state = { count: 0 };

    // Apply Mutation
    mutations[INCREMENT](state);

    // Assert Result
    expect(state.count).toBe(1);
  });

  it(DECREMENT, () => {
    // Mock State
    const state = { count: 0 };

    // Apply Mutation
    mutations[DECREMENT](state);

    // Assert Result
    expect(state.count).toBe(-1);
  });

  it(GET_REDDIT_POSTS.REQUEST, () => {
    // Mock State
    const state = { loading: false };

    // Apply Mutation
    mutations[GET_REDDIT_POSTS.REQUEST](state);

    // Assert Result
    expect(state.loading).toBe(true);
  });

  it(GET_REDDIT_POSTS.SUCCESS, () => {
    // Mock State/payload
    const state = {
      loading: true,
      redditPosts: [],
    };
    const payload = {
      posts: [{
        data: {},
      }],
    };

    // Apply Mutation
    mutations[GET_REDDIT_POSTS.SUCCESS](state, payload);

    // Assert Results
    expect(state.loading).toBe(false);
    expect(state.redditPosts).toEqual([{
      data: {},
    }]);
  });

  it(GET_REDDIT_POSTS.FAILURE, () => {
    // Mock State/payload
    const state = {
      loading: true,
      getRedditPostsError: [],
    };
    const payload = {
      error: [{
        code: 0,
      }],
    };

    // Apply Mutation
    mutations[GET_REDDIT_POSTS.FAILURE](state, payload);

    // Assert Results
    expect(state.loading).toBe(false);
    expect(state.getRedditPostsError).toEqual([{
      code: 0,
    }]);
  });
});
