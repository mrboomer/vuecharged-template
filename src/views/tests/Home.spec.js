import { shallow } from '@vue/test-utils';
import HomeComponent from '../Home';

const renderer = require('vue-server-renderer').createRenderer();

describe('Home.vue Component', () => {
  const wrapper = shallow(HomeComponent);
  const { vm } = wrapper;

  it('renders to a nice snapshot', () => {
    renderer.renderToString(vm, (err, str) => {
      expect(str).toMatchSnapshot();
    });
  });
});
