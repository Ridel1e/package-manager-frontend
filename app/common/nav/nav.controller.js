/**
 * Created by ridel1e on 13/11/2016.
 */

import AngularObject from 'helpers/angular-object';

class NavController extends AngularObject {
  constructor($state) {
    'ngInject';
    super($state);
  }

  $onInit () {
    this.routes = [{
      name: 'MAIN',
      state: 'main',
      glyphIcon: 'fa fa-home',
    }, {
      name: 'SUPPORT',
      state: 'support',
      glyphIcon: 'fa fa-question'
    }, {
      name: 'DOCUMENTATION',
      state: 'documentation',
      glyphIcon: 'fa fa-file-text-o'
    }]
  }

  isCurrentState(state) {
    return this.$state.is(state);
  }
}

export default NavController;