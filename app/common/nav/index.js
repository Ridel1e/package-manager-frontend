/**
 * Created by ridel1e on 13/11/2016.
 */

import angular from 'angular';

/* components */
import NavComponent from './nav.component';

const module = angular
  .module('app.common.nav', []);

module
  .component('spmNav', NavComponent);

export default module.name;