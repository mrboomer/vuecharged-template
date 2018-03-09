import Vuex from 'vuex';
import { shallow, createLocalVue } from '@vue/test-utils';
import ExampleContainerComponent from '../index';

const localVue = createLocalVue();
localVue.use(Vuex);


describe('ExampleContainer Component', () => {
  let store;
  let actions;
  let getters;

  beforeEach(() => {
    actions = {
      'exampleContainer/updateName': jest.fn(),
      'exampleContainer/incrementCounter': jest.fn(),
      'exampleContainer/decrementCounter': jest.fn(),
    };

    getters = {
      fibonacciNumber: () => '0',
    };

    store = new Vuex.Store({
      actions,
      getters,
    });
  });

  it('dispatches an action when the "Update Name" input is changed', () => {
    const wrapper = shallow(ExampleContainerComponent, {
      store,
      localVue,
    });

    // Simulate Text Input
    const input = wrapper.find('input');
    input.element.value = 100;
    input.trigger('input');

    // Assert Result
    expect(actions['exampleContainer/updateName'].mock.calls).toHaveLength(1);
  });

  it('dispatches an action when the "Decrement" button is clicked', () => {
    const wrapper = shallow(ExampleContainerComponent, {
      store,
      localVue,
      data: {
        count: 2,
      },
    });

    // Simulate Click
    wrapper.find('button:first-of-type').trigger('click');

    // Assert Result
    expect(actions['exampleContainer/decrementCounter'].mock.calls).toHaveLength(1);
  });

  it('dispatches an action when the "Increment" button is clicked', () => {
    const wrapper = shallow(ExampleContainerComponent, {
      store,
      localVue,
    });

    // Simulate Click
    wrapper.find('button:last-of-type').trigger('click');

    // Assert Result
    expect(actions['exampleContainer/incrementCounter'].mock.calls).toHaveLength(1);
  });
});
