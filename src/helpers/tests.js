/* eslint import/prefer-default-export: 0 */

// Helper for testing actions with expected mutations
export const testAction = (action, payload, state, expectedMutations, done) => {
  let count = 0;

  // Mock commit
  const commit = (typeMutationArg, payloadArg) => {
    const mutation = expectedMutations[count];

    // Support Object-Style Commits
    const isTypeObjectStyle =
      typeMutationArg !== null && typeof typeMutationArg === 'object';
    const type = isTypeObjectStyle ? typeMutationArg.type : typeMutationArg;
    let payloadReceived = payloadArg;

    if (isTypeObjectStyle) {
      delete typeMutationArg.type; // eslint-disable-line no-param-reassign
      const hasPayload =
        Object.keys(typeMutationArg).length !== 0 &&
        typeMutationArg.constructor === Object;

      if (hasPayload) {
        payloadReceived = hasPayload && typeMutationArg;
      }
    }

    // Assert Results
    try {
      expect(mutation.type).toBe(type);
      if (payloadReceived) {
        expect(mutation.payload).toEqual(payloadReceived);
      }
    } catch (error) {
      done(error);
    }

    count += 1;
    if (count >= expectedMutations.length) {
      done();
    }
  };

  // Call the action with mocked store and arguments
  action({ commit, state }, payload);

  // Check if no mutations should have been dispatched
  if (expectedMutations.length === 0) {
    expect(count).toEqual(0);
    done();
  }
};
