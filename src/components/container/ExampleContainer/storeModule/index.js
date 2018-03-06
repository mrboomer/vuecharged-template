/**
 * Example Container Store Module
 */

import state from './state';
import actions from './actions';
import mutations from './mutations';

const namespaced = true;

export default {
  namespaced,
  state,
  actions,
  mutations,
};
