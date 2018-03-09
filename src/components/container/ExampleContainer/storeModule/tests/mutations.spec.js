import mutations from '../mutations';
import {
  INCREMENT,
  DECREMENT,
  UPDATE_NAME,
} from '../constants';

describe('ExampleContainer Mutations', () => {
  it(INCREMENT, () => {
    // Mock State
    const state = { count: 0 };

    // Apply Mutation
    mutations[INCREMENT](state);

    // Assert Result
    expect(state.count).toBe(1);
  });

  it(DECREMENT, () => {
    // Mock State
    const state = { count: 0 };

    // Apply Mutation
    mutations[DECREMENT](state);

    // Assert Result
    expect(state.count).toBe(-1);
  });

  it(UPDATE_NAME, () => {
    // Mock State/payload
    const state = { name: '' };
    const payload = { name: 'John Doe' };

    // Apply Mutation
    mutations[UPDATE_NAME](state, payload);

    // Assert Result
    expect(state.name).toBe('John Doe');
  });
});
