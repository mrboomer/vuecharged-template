import Vuex from 'vuex';
import store from '../index';

describe('Store', () => {
  it('configured correctly', () => {
    expect(store).toBeInstanceOf(Vuex.Store);
  });
});
