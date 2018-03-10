import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ExampleContainerComponent from '../index';

const localVue = createLocalVue();
localVue.use(Vuex);


describe('ExampleContainer Component', () => {
  let store;
  let state;
  let actions;
  let getters;

  beforeEach(() => {
    state = {
      name: 'John Doe',
      count: 2,
    };

    actions = {
      updateName: jest.fn(),
      incrementCounter: jest.fn(),
      decrementCounter: jest.fn(),
    };

    getters = {
      fibonacciNumber: () => 1,
    };

    store = new Vuex.Store({
      modules: {
        exampleContainer: {
          namespaced: true,
          state,
          actions,
          getters,
        },
      },
    });
  });

  it('renders name value from store state', () => {
    const wrapper = shallow(ExampleContainerComponent, { store, localVue });

    // Rendered Location
    const h1Span = wrapper.find('h1 span');

    // Assert Result
    expect(h1Span.text()).toBe(state.name);
  });

  it('dispatches "UPDATE_NAME" action when input is changed', () => {
    const wrapper = shallow(ExampleContainerComponent, { store, localVue });

    // Simulate Text Input
    const input = wrapper.find('input');
    input.element.value = 'test';
    input.trigger('input');

    // Assert Result
    expect(actions.updateName.mock.calls).toHaveLength(1);
  });

  it('renders count value from store state', () => {
    const wrapper = shallow(ExampleContainerComponent, { store, localVue });

    // Rendered Locations
    const h2Span = wrapper.find('h2 span');
    const h3SpanFirst = wrapper.find('h3 span:first-of-type');

    // Assert Results
    expect(h2Span.text()).toBe(state.count.toString());
    expect(h3SpanFirst.text()).toBe(state.count.toString());
  });

  it('dispatches "DECREMENT" action when button is clicked', () => {
    const wrapper = shallow(ExampleContainerComponent, { store, localVue });

    // Simulate Click
    wrapper.find('button:first-of-type').trigger('click');

    // Assert Result
    expect(actions.decrementCounter.mock.calls).toHaveLength(1);
  });

  it('dispatches "INCREMENT" action when button is clicked', () => {
    const wrapper = shallow(ExampleContainerComponent, { store, localVue });

    // Simulate Click
    wrapper.find('button:last-of-type').trigger('click');

    // Assert Result
    expect(actions.incrementCounter.mock.calls).toHaveLength(1);
  });

  it('renders fibonacci value from store getter', () => {
    const wrapper = shallow(ExampleContainerComponent, { store, localVue });

    // Rendered Location
    const h3SpanLast = wrapper.find('h3 span:last-of-type');

    // Assert Result
    expect(h3SpanLast.text()).toBe(getters.fibonacciNumber().toString());
  });
});
