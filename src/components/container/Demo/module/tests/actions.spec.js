import { testAction } from '@/helpers/tests';
import actions from '../actions';
import {
  UPDATE_NAME,
  INCREMENT,
  DECREMENT,
  GET_REDDIT_POSTS,
} from '../constants';
import { fetchRedditPosts } from '../side-effects';

jest.mock('../side-effects');

describe('Demo Actions', () => {
  it('updateName', () => {
    // Mock Payload
    const mockPayload = { name: 'John Doe' };

    // Mock Commit and Assert Results
    const commit = ({ type, ...payload }) => {
      expect(type).toBe(UPDATE_NAME);
      expect(mockPayload).toEqual(expect.objectContaining(payload));
    };

    // Process Action
    actions.updateName({ commit }, mockPayload);
  });

  it('incrementCounter', () => {
    // Mock Commit and Assert Result
    const commit = ({ type }) => {
      expect(type).toBe(INCREMENT);
    };

    // Process Action
    actions.incrementCounter({ commit });
  });

  it('decrementCounter', () => {
    // Mock Commit and Assert Result
    const commit = ({ type }) => {
      expect(type).toBe(DECREMENT);
    };

    // Process Action
    actions.decrementCounter({ commit });
  });

  it('getRedditPosts success', (done) => {
    // Mock Response
    const response = [{
      data: {
        title: 'Reddit',
        permalink: '/r/all',
      },
    }];

    // Mock Payload
    const mockPayload = {
      posts: response,
    };

    // Mock Side Effect
    fetchRedditPosts.mockImplementation(() => Promise.resolve(response));

    // Process Action with Helper Function
    testAction(actions.getRedditPosts, null, {}, [
      { type: GET_REDDIT_POSTS.REQUEST },
      { type: GET_REDDIT_POSTS.SUCCESS, payload: mockPayload },
    ], done);
  });

  it('getRedditPosts failure', (done) => {
    // Mock Payload
    const mockPayload = {
      error: new Error('failure'),
    };

    // Mock Side Effect
    fetchRedditPosts.mockImplementation(() => Promise.reject(new Error('failure')));

    // Process Action with Helper Function
    testAction(actions.getRedditPosts, null, {}, [
      { type: GET_REDDIT_POSTS.REQUEST },
      { type: GET_REDDIT_POSTS.FAILURE, payload: mockPayload },
    ], done);
  });
});
