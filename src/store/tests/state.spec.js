import state from '../state';

describe('Global State', () => {
  it('exists', () => {
    expect(typeof state).toBe('object');
  });
});
