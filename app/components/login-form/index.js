import angular from 'angular';

import LoginFormComponent from './login-form.component';

const module = angular
  .module('app.components.loginForm', []);

module
  .component('spmLoginForm', LoginFormComponent);

export default module.name;

