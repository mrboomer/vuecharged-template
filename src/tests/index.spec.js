import Vue from 'vue';
import app from '../index';

describe('App', () => {
  it('configured correctly', () => {
    expect(app).toBeInstanceOf(Vue);
  });
});
