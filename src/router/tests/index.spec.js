import Router from 'vue-router';
import router from '../index';

describe('Router', () => {
  it('configured correctly', () => {
    expect(router).toBeInstanceOf(Router);
  });
});
