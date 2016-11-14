/**
 * Created by ridel1e on 13/11/2016.
 */

import angular from 'angular';

/* components */
import HeaderSearchComponent from './header-search.component';

const module = angular
  .module('app.common.header.search', []);

module
  .component('spmHeaderSearch', HeaderSearchComponent);

export default module.name;