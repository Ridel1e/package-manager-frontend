/**
 * Created by ridel1e on 13/11/2016.
 */

import angular from 'angular';
import uiRouter from 'angular-ui-router';

/* components */
import NavComponent from './nav.component';

const module = angular
  .module('app.common.nav', [
    uiRouter
  ]);

module
  .component('spmNav', NavComponent);

export default module.name;