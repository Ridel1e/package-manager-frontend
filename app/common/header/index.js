/**
 * Created by ridel1e on 13/11/2016.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

/* components */
import HeaderComponent from './header.component';

const module = angular
  .module('app.common.header', [
    uiRouter
  ]);

module
  .component('spmHeader', HeaderComponent);

export default module.name;