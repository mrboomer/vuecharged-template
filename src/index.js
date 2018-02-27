import Vue from 'vue';
import App from './components/App';

const app = new Vue({
  ...App,
});

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}

export default app;
