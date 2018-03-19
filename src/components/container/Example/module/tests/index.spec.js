import store from '../index';

describe('Example Store Module', () => {
  it('contains required store parts', () => {
    expect(Object.keys(store)).toEqual(expect.arrayContaining([
      'namespaced',
      'state',
      'actions',
      'mutations',
      'getters',
    ]));
  });
});
