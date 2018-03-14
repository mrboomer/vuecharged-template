import { shallow } from '@vue/test-utils';
import FooterComponent from '../index';

const renderer = require('vue-server-renderer').createRenderer();

describe('Footer Component', () => {
  const ClonedComponent = shallow(FooterComponent);
  const { vm } = ClonedComponent;

  it('renders to a nice snapshot', () => {
    renderer.renderToString(vm, (err, str) => {
      expect(str).toMatchSnapshot();
    });
  });
});
