/* eslint import/prefer-default-export: 0 */

export const getRedditData = () => new Promise((resolve, reject) => {
  fetch('https://www.reddit.com/r/all.json')
    .then((res) => res.json())
    .then((response) => {
      const posts = response.data.children;
      resolve(posts);
    })
    .catch(reject);
});
