import { shallow } from '@vue/test-utils';
import AppComponent from '../index';

const renderer = require('vue-server-renderer').createRenderer();

describe('App Component', () => {
  const ClonedComponent = shallow(AppComponent);
  const { vm } = ClonedComponent;

  it('renders to a nice snapshot', () => {
    renderer.renderToString(vm, (err, str) => {
      expect(str).toMatchSnapshot();
    });
  });
});
