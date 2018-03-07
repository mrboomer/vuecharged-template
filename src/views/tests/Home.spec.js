import { shallow } from '@vue/test-utils';
import HomeComponent from '../Home';

const renderer = require('vue-server-renderer').createRenderer();

describe('Home.vue Component', () => {
  const ClonedComponent = shallow(HomeComponent);
  const { vm } = ClonedComponent;

  it('renders to a nice snapshot', () => {
    renderer.renderToString(vm, (err, str) => {
      expect(str).toMatchSnapshot();
    });
  });
});
