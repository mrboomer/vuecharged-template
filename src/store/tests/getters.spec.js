import getters from '../getters';

describe('Global Getters', () => {
  it('exists', () => {
    expect(getters).toEqual(expect.any(Object));
  });
});
