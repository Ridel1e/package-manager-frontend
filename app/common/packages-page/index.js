/**
 * Created by ruslansalahov on 22/11/2016.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

/* components */
import PackagesPageComponent from './packages-page.component';

const module = angular
  .module('app.common.packagesPage', [
    uiRouter
  ]);

module
  .component('spmPackagesPage', PackagesPageComponent)
  .config(($stateProvider) => {
    $stateProvider
      .state('packages', {
        url: '/packages?query',
        component: 'spmPackagesPage',
        resolve: {
          packages (packageActions, searchActions, $ngRedux, $stateParams) {
            'ngInject';

            const actions = {};
            $ngRedux.connect(null, 
              Object.assign({}, packageActions, searchActions))(actions);

            actions.setSearchString($stateParams.query);
            return actions.fetchPackages($stateParams.query);
          }
        }
      })
  });

export default module.name;

