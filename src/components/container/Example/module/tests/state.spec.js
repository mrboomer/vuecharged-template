import state from '../state';

describe('Example State', () => {
  it('contains required state', () => {
    expect(Object.keys(state)).toEqual(expect.arrayContaining([
      'name',
      'count',
    ]));
  });
});
