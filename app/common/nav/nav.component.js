/**
 * Created by ridel1e on 13/11/2016.
 */

import template from './nav.html';
import './styles/importer.less';
import controller from './nav.controller';

const component = {
  bindings: {
    routes: '<'
  },
  
  template,
  controller,
  controllerAs: 'vm'
};

export default component;