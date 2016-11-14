/**
 * Created by ridel1e on 13/11/2016.
 */

import angular from 'angular';

/* vendors */
import uiRouter from 'angular-ui-router';

/* components */
import SupportComponent from './support.component';

/* modules */


const module = angular
  .module('app.components.support', [
    uiRouter
  ]);

module
  .component('spmSupport', SupportComponent)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('support', {
        url: '/support',
        component: 'spmSupport'
      })
  });

export default module.name;