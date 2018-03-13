import state from '../state';

describe('Global State', () => {
  it('exists', () => {
    expect(state).toEqual(expect.any(Object));
  });
});
