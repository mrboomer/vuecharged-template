import { shallow } from '@vue/test-utils';
import HomeComponent from '../Home';

const renderer = require('vue-server-renderer').createRenderer();

describe('Home.vue Component', () => {
  it('renders to a nice snapshot', () => {
    const wrapper = shallow(HomeComponent);
    const { vm } = wrapper;

    renderer.renderToString(vm, (err, str) => {
      expect(str).toMatchSnapshot();
    });
  });
});
