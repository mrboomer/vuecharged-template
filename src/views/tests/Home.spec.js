import { shallowMount } from '@vue/test-utils';
import HomeComponent from '../Home';

const renderer = require('vue-server-renderer').createRenderer();

describe('Home.vue Component', () => {
  it('renders to a nice snapshot', () => {
    // Mock Messages
    const messages = {
      en: {
        title: 'Title',
        getStarted: 'Get Started',
      },
    };

    const wrapper = shallowMount(HomeComponent, {
      i18n: {
        locale: 'en',
        messages,
      },
    });
    const { vm } = wrapper;

    renderer.renderToString(vm, (err, str) => {
      expect(str).toMatchSnapshot();
    });
  });
});
