/**
 * Created by ridel1e on 13/11/2016.
 */

import angular from 'angular';

/* vendors */
import uiRouter from 'angular-ui-router';

/* components */
import MainComponent from './main.component';

/* modules */

const module = angular
  .module('app.components.main', [
    uiRouter
  ]);

module
  .component('spmMain', MainComponent)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('main', {
        url: '/',
        component: 'spmMain'
      })
  });


export default module.name;