import Vue from 'vue';
import app from '../main';

describe('App', () => {
  it('configured correctly', () => {
    expect(app).toBeInstanceOf(Vue);
  });
});
