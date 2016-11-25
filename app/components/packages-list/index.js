/**
 * Created by ruslansalahov on 22/11/2016.
 */

import angular from 'angular';

/* components */
import PackagesListComponent from './packages-list.component';

/* component modules */
import PackageItemModule from './package-item';

const module = angular
  .module('app.components.packagesList', [
    PackageItemModule
  ]);

module
  .component('spmPackagesList', PackagesListComponent);

export default module.name;