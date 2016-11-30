import angular from 'angular';
import uiRouter from 'angular-ui-router';

import LoginPageComponent from './login-page.component';

const module = angular
  .module('app.common.loginPage', [
    uiRouter
  ]);

module
  .component('spmLoginPage', LoginPageComponent)
  .config(($stateProvider) => {
    $stateProvider
      .state('login', {
        url: '/login',
        component: 'spmLoginPage'
      })
  });

export default module.name;

