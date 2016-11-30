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
        url: '/package/:id',
        component: 'spmPackagePage',
        resolve: {
          package(packageActions, $ngRedux, $stateParams) {
            'ngInject';

            const actions = {};
            $ngRedux.connect(null, packageActions)(actions);
            
            return actions.fetchPackage($stateParams.id)
          }
        }
      })
  });

export default module.name;