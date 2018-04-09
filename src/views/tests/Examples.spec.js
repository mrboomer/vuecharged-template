import { shallow } from '@vue/test-utils';
import ExamplesComponent from '../Examples';

const renderer = require('vue-server-renderer').createRenderer();

describe('Examples.vue Component', () => {
  it('renders to a nice snapshot', () => {
    // Mock Messages
    const messages = {
      en: {
        title: 'Title',
      },
    };

    const wrapper = shallow(ExamplesComponent, {
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
