/**
 * Created by ridel1e on 13/11/2016.
 */

import angular from 'angular';

/* vendors */
import uiRouter from 'angular-ui-router';

/* components */
import DocumentationPageComponent from './documentation-page.component';

/* modules */

const module = angular
  .module('app.common.documentationPage', [
    uiRouter
  ]);

module
  .component('spmDocumentationPage', DocumentationPageComponent)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('documentation', {
        url: '/documentation',
        component: 'spmDocumentationPage'
      })
  });

export default module.name;