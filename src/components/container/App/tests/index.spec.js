import { shallowMount } from '@vue/test-utils';
import AppComponent from '../index';

const renderer = require('vue-server-renderer').createRenderer();

describe('App Component', () => {
  const ClonedComponent = shallowMount(AppComponent);
  const { vm } = ClonedComponent;

  it('renders to a nice snapshot', () => {
    renderer.renderToString(vm, (err, str) => {
      expect(str).toMatchSnapshot();
    });
  });
});
