import { fetchRedditPosts } from '../side-effects';

describe('Demo Side-Effects', () => {
  it('fetchRedditPosts resolve', async () => {
    // Mock Response and "json()" Method
    const response = {
      json() {
        return {
          data: {
            children: [{
              data: {
                title: 'Reddit',
                permalink: '/r/all',
              },
            }],
          },
        };
      },
    };

    // Mock Fetch
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve(response));

    // Process Side-Effect
    const posts = await fetchRedditPosts();

    // Assert Result
    expect(posts).toEqual(response.json().data.children);
  });
});
