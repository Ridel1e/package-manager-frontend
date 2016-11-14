/**
 * Created by ridel1e on 13/11/2016.
 */

import angular from 'angular';

/* vendors */
import uiRouter from 'angular-ui-router';

/* components */
import DocumentationComponent from './documentation.component';

/* modules */

const module = angular
  .module('app.components.documentation', [
    uiRouter
  ]);

module
  .component('spmDocumentation', DocumentationComponent)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('documentation', {
        url: 'documentation',
        component: 'spmDocumentation'
      })
  });

export default module.name;