/**
 * Created by ruslansalahov on 22/11/2016.
 */

import template from './packages-page.html';
import './packages-page.less';
import controller from './packages-page.controller';

const component = {
  bindings: {
    packages: '<'
  },
  template,
  controller
};

export default component;