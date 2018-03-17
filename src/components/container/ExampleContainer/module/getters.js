/**
 * ExampleContainer Global Getters
 *
 * These are functions that take the module state object and returns a value from it.
 * You can think of getters as computed properties for data in this module.
 *
 * Further Reading: https://vuex.vuejs.org/en/getters.html
 */

const getters = {
  positiveCount(state) {
    return state.count > -1 ? state.count : 0;
  },
  fibonacciNumber(state) {
    const fibonacci = (number) => {
      if (number < 1) return 0;
      if (number <= 2) return 1;
      return fibonacci(number - 1) + fibonacci(number - 2);
    };

    return fibonacci(state.count);
  },
};

export default getters;
