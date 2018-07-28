import { shallowMount } from '@vue/test-utils';
import FooterComponent from '../index';

const renderer = require('vue-server-renderer').createRenderer();

describe('Footer Component', () => {
  FooterComponent.i18n.locale = 'en';

  const ClonedComponent = shallowMount(FooterComponent);
  const { vm } = ClonedComponent;

  it('renders to a nice snapshot', () => {
    renderer.renderToString(vm, (err, str) => {
      expect(str).toMatchSnapshot();
    });
  });
});
