import { shallow } from '@vue/test-utils';
import HeaderComponent from '../index';

const renderer = require('vue-server-renderer').createRenderer();

describe('Header Component', () => {
  HeaderComponent.i18n.locale = 'en';

  const ClonedComponent = shallow(HeaderComponent);
  const { vm } = ClonedComponent;

  it('renders to a nice snapshot', () => {
    renderer.renderToString(vm, (err, str) => {
      expect(str).toMatchSnapshot();
    });
  });
});
