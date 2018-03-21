import state from '../state';

describe('Demo State', () => {
  it('contains required state', () => {
    expect(Object.keys(state)).toEqual(expect.arrayContaining([
      'name',
      'count',
    ]));
  });
});
