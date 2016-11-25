/**
 * Created by ridel1e on 13/11/2016.
 */

import angular from 'angular';

/* modules */

import SearchModule from './search';
import PackagesListModule from './packages-list';

const module = angular
  .module('app.components', [
    SearchModule,
    PackagesListModule
  ]);

export default module.name;