/**
 * Created by ridel1e on 13/11/2016.
 */

import AngularObject from 'helpers/angular-object';

class AppController extends AngularObject {
  constructor() {
    'ngInject';
    super();
  }

  $onInit() {
    this.routes = [{
      name: 'main',
      state: 'main'
    }, {
      name: 'support',
      state: 'support'
    }, {
      name: 'documentation',
      state: 'documentation'
    }]
  }
}

export default AppController;