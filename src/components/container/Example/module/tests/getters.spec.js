import getters from '../getters';

describe('Example Getters', () => {
  it('positiveCount', () => {
    // Mock State
    const stateCountPositive = { count: 10 };
    const stateCountNegative = { count: -10 };

    // Process Getter
    const resultCountPositive = getters.positiveCount(stateCountPositive);
    const resultCountNegative = getters.positiveCount(stateCountNegative);

    // Assert Results
    expect(resultCountPositive).toBe(10);
    expect(resultCountNegative).toBe(0);
  });

  it('fibonacciNumber', () => {
    // Mock State
    const stateCountZero = { count: 0 };
    const stateCountTwo = { count: 2 };
    const stateCountFour = { count: 4 };

    // Process Getter
    const resultCountZero = getters.fibonacciNumber(stateCountZero);
    const resultCountTwo = getters.fibonacciNumber(stateCountTwo);
    const resultCountFour = getters.fibonacciNumber(stateCountFour);

    // Assert Results
    expect(resultCountZero).toBe(0);
    expect(resultCountTwo).toBe(1);
    expect(resultCountFour).toBe(3);
  });
});
