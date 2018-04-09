import { shallow } from '@vue/test-utils';
import NotFoundComponent from '../NotFound';

const renderer = require('vue-server-renderer').createRenderer();

describe('NotFound.vue Component', () => {
  it('renders to a nice snapshot', () => {
    // Mock Messages
    const messages = {
      en: {
        title: 'Title',
      },
    };

    const wrapper = shallow(NotFoundComponent, {
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
