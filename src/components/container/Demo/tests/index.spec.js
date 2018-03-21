import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import DemoComponent from '../index';

const renderer = require('vue-server-renderer').createRenderer();

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Demo Component', () => {
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
      getRedditPosts: jest.fn(),
    };

    getters = {
      positiveCount: () => 2,
      fibonacciNumber: () => 1,
      redditTopPostTitle: () => 'Reddit',
      redditTopPostUrl: () => 'https://www.reddit.com/',
    };

    store = new Vuex.Store({
      modules: {
        demo: {
          namespaced: true,
          state,
          actions,
          getters,
        },
      },
    });
  });

  it('dispatches "UPDATE_NAME" action when input is changed', () => {
    const wrapper = shallow(DemoComponent, { store, localVue });
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
    const wrapper = shallow(DemoComponent, { store, localVue });

    // Simulate Click
    wrapper.find('button:first-of-type').trigger('click');

    // Assert Result
    expect(actions.decrementCounter.mock.calls).toHaveLength(1);
  });

  it('dispatches "INCREMENT" action when button is clicked', () => {
    const wrapper = shallow(DemoComponent, { store, localVue });

    // Simulate Click
    wrapper.find('button:last-of-type').trigger('click');

    // Assert Result
    expect(actions.incrementCounter.mock.calls).toHaveLength(1);
  });

  it('renders values from store state', () => {
    const wrapper = shallow(DemoComponent, { store, localVue });

    // Rendered Locations
    const h2Span = wrapper.find('h2 span');
    const h3Span = wrapper.find('h3 span');

    // Assert Result
    expect(h2Span.text()).toBe(state.name);
    expect(h3Span.text()).toBe(state.count.toString());
  });

  it('renders values from getters', () => {
    const wrapper = shallow(DemoComponent, { store, localVue });

    // Rendered Locations
    const h4SpanFirst = wrapper.find('h4 span:first-of-type');
    const h4SpanLast = wrapper.find('h4 span:last-of-type');

    // Assert Results
    expect(h4SpanFirst.text()).toBe(getters.positiveCount().toString());
    expect(h4SpanLast.text()).toBe(getters.fibonacciNumber().toString());
  });

  it('renders to a nice snapshot', () => {
    const wrapper = shallow(DemoComponent, { store, localVue });
    const { vm } = wrapper;

    renderer.renderToString(vm, (err, str) => {
      expect(str).toMatchSnapshot();
    });
  });
});
