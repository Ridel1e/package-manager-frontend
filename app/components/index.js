/**
 * Created by ridel1e on 13/11/2016.
 */

import angular from 'angular';

/* modules */

import SearchModule from './search';
import PackagesItemModule from './package-item';
import ListViewModule from './list-view';

const module = angular
  .module('app.components', [
    SearchModule,
    PackagesItemModule,
    ListViewModule
  ]);

export default module.name;