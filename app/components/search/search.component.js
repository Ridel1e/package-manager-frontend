/**
 * Created by ridel1e on 13/11/2016.
 */

import template from './search.html';
import controller from './search.controller';
import './search.less';

const component = {
  bindings: {
    search: '&onSearchActivate'
  },
  template,
  controller
};

export default component;