import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import ExampleContainerComponent from '../index';

const renderer = require('vue-server-renderer').createRenderer();

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
      positiveCount: () => 2,
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

  it('dispatches "UPDATE_NAME" action when input is changed', () => {
    const wrapper = shallow(ExampleContainerComponent, { store, localVue });
    const input = wrapper.find('input');

    // Simulate Add Text
    input.element.value = 'test';
    input.trigger('input');

    // Assert Result
    expect(actions.updateName.mock.calls).toHaveLength(1);

    // Simulate Remove Text
    input.element.value = '';
    input.trigger('input');

    // Assert Result
    expect(actions.updateName.mock.calls).toHaveLength(2);
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

  it('renders values from store state', () => {
    const wrapper = shallow(ExampleContainerComponent, { store, localVue });

    // Rendered Locations
    const h1Span = wrapper.find('h1 span');
    const h2Span = wrapper.find('h2 span');

    // Assert Result
    expect(h1Span.text()).toBe(state.name);
    expect(h2Span.text()).toBe(state.count.toString());
  });

  it('renders values from getters', () => {
    const wrapper = shallow(ExampleContainerComponent, { store, localVue });

    // Rendered Locations
    const h3SpanFirst = wrapper.find('h3 span:first-of-type');
    const h3SpanLast = wrapper.find('h3 span:last-of-type');

    // Assert Results
    expect(h3SpanFirst.text()).toBe(getters.positiveCount().toString());
    expect(h3SpanLast.text()).toBe(getters.fibonacciNumber().toString());
  });

  it('renders to a nice snapshot', () => {
    const wrapper = shallow(ExampleContainerComponent, { store, localVue });
    const { vm } = wrapper;

    renderer.renderToString(vm, (err, str) => {
      expect(str).toMatchSnapshot();
    });
  });
});
