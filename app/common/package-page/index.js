import angular  from 'angular';
import uiRouter from 'angular-ui-router';

import PackagePageComponent from './package-page.component';

const module = angular
  .module('app.common.packagePage', [
    uiRouter
  ]);

module
  .component('spmPackagePage', PackagePageComponent)
  .config(($stateProvider) => {
    $stateProvider
      .state('package', {
        url: '/package/:name',
        component: 'spmPackagePage',
      })
  });

export default module.name;