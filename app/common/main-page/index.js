/**
 * Created by ridel1e on 13/11/2016.
 */

import angular from 'angular';

/* vendors */
import uiRouter from 'angular-ui-router';

/* components */
import MainPageComponent from './main-page.component';

/* modules */

const module = angular
  .module('app.common.mainPage', [
    uiRouter
  ]);

module
  .component('spmMainPage', MainPageComponent)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('main', {
        url: '/',
        component: 'spmMainPage'
      })
  });


export default module.name;