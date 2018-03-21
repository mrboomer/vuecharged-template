import getters from '../getters';

describe('Demo Getters', () => {
  it('positiveCount', () => {
    // Mock State
    const stateCountPositive = { count: 10 };
    const stateCountNegative = { count: -10 };

    // Process Getter
    const resultCountPositive = getters.positiveCount(stateCountPositive);
    const resultCountNegative = getters.positiveCount(stateCountNegative);

    // Assert Results
    expect(resultCountPositive).toBe(10);
    expect(resultCountNegative).toBe(0);
  });

  it('fibonacciNumber', () => {
    // Mock State
    const stateCountZero = { count: 0 };
    const stateCountTwo = { count: 2 };
    const stateCountFour = { count: 4 };

    // Process Getter
    const resultCountZero = getters.fibonacciNumber(stateCountZero);
    const resultCountTwo = getters.fibonacciNumber(stateCountTwo);
    const resultCountFour = getters.fibonacciNumber(stateCountFour);

    // Assert Results
    expect(resultCountZero).toBe(0);
    expect(resultCountTwo).toBe(1);
    expect(resultCountFour).toBe(3);
  });

  it('redditTopPostTitle', () => {
    // Mock State
    const stateRedditPostsNone = { redditPosts: [] };
    const stateRedditPostsFull = {
      redditPosts: [{
        data: {
          title: 'Reddit',
        },
      }],
    };

    // Process Getter
    const resultRedditPostsNone = getters.redditTopPostTitle(stateRedditPostsNone);
    const resultRedditPostsFull = getters.redditTopPostTitle(stateRedditPostsFull);

    // Assert Results
    expect(resultRedditPostsNone).toBe('Loading...');
    expect(resultRedditPostsFull).toBe('Reddit');
  });

  it('redditTopPostUrl', () => {
    // Mock State
    const stateRedditPostsNone = { redditPosts: [] };
    const stateRedditPostsFull = {
      redditPosts: [{
        data: {
          permalink: '/',
        },
      }],
    };

    // Process Getter
    const resultRedditPostsNone = getters.redditTopPostUrl(stateRedditPostsNone);
    const resultRedditPostsFull = getters.redditTopPostUrl(stateRedditPostsFull);

    // Assert Results
    expect(resultRedditPostsNone).toBe('#');
    expect(resultRedditPostsFull).toBe('https://www.reddit.com/');
  });
});
