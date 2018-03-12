import actions from '../actions';
import {
  UPDATE_NAME,
  INCREMENT,
  DECREMENT,
} from '../constants';

describe('ExampleContainer Actions', () => {
  it('updateName', () => {
    // Mock Payload
    const mockPayload = { name: 'John Doe' };

    // Mock Commit and Assert Results
    const commit = ({ type, ...payload }) => {
      expect(type).toBe(UPDATE_NAME);
      expect(mockPayload).toEqual(expect.objectContaining(payload));
    };

    // Process Action
    actions.updateName({ commit }, mockPayload);
  });

  it('incrementCounter', () => {
    // Mock Commit and Assert Result
    const commit = ({ type }) => {
      expect(type).toBe(INCREMENT);
    };

    // Process Action
    actions.incrementCounter({ commit });
  });

  it('decrementCounter', () => {
    // Mock Commit and Assert Result
    const commit = ({ type }) => {
      expect(type).toBe(DECREMENT);
    };

    // Process Action
    actions.decrementCounter({ commit });
  });
});
