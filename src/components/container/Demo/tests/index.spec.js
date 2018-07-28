import { shallowMount, createLocalVue } from '@vue/test-utils';
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

  DemoComponent.i18n.locale = 'en';

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
      updateLocale: jest.fn(),
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

  it('dispatches "updateName" action when input is changed', () => {
    const wrapper = shallowMount(DemoComponent, { store, localVue });
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

  it('dispatches "decrementCounter" action when button is clicked', () => {
    const wrapper = shallowMount(DemoComponent, { store, localVue });

    // Simulate Click
    wrapper.find('button:first-of-type').trigger('click');

    // Assert Result
    expect(actions.decrementCounter.mock.calls).toHaveLength(1);
  });

  it('dispatches "incrementCounter" action when button is clicked', () => {
    const wrapper = shallowMount(DemoComponent, { store, localVue });

    // Simulate Click
    wrapper.find('button:last-of-type').trigger('click');

    // Assert Result
    expect(actions.incrementCounter.mock.calls).toHaveLength(1);
  });

  it('dispatches "updateLocale" action when select is changed', () => {
    const wrapper = shallowMount(DemoComponent, { store, localVue });
    const select = wrapper.find('select');

    // Simulate Option Change
    select.element.selectedIndex = 1;
    select.trigger('change');

    // Assert Result
    expect(actions.updateLocale.mock.calls).toHaveLength(1);
  });

  it('renders values from store state', () => {
    const wrapper = shallowMount(DemoComponent, { store, localVue });

    // Rendered Locations
    const nameLocation = wrapper.find('.ex-input h3 span');
    const countLocation = wrapper.find('.ex-counter h4 span');

    // Assert Result
    expect(nameLocation.text()).toBe(state.name);
    expect(countLocation.text()).toBe(state.count.toString());
  });

  it('renders values from getters', () => {
    const wrapper = shallowMount(DemoComponent, { store, localVue });

    // Rendered Locations
    const h4SpanFirst = wrapper.find('.ex-getter h4 span:first-of-type');
    const h4SpanLast = wrapper.find('.ex-getter h4 span:last-of-type');

    // Assert Results
    expect(h4SpanFirst.text()).toBe(getters.positiveCount().toString());
    expect(h4SpanLast.text()).toBe(getters.fibonacciNumber().toString());
  });

  it('renders to a nice snapshot', () => {
    const wrapper = shallowMount(DemoComponent, { store, localVue });
    const { vm } = wrapper;

    renderer.renderToString(vm, (err, str) => {
      expect(str).toMatchSnapshot();
    });
  });
});
