/**
 * Created by ridel1e on 13/11/2016.
 */

import angular from 'angular';

/* vendors */
import uiRouter from 'angular-ui-router';

/* components */
import SupportPageComponent from './support-page.component';

/* modules */


const module = angular
  .module('app.common.supportPage', [
    uiRouter
  ]);

module
  .component('spmSupportPage', SupportPageComponent)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('support', {
        url: '/support',
        component: 'spmSupportPage'
      })
  });

export default module.name;