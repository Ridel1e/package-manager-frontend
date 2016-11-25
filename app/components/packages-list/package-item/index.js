/**
 * Created by ruslansalahov on 16/11/2016.
 */

import angular from 'angular';

/* components */
import PackageItemComponent from './package-item.component';


const module = angular
  .module('app.components.packagesList.item', []);

module
  .component('spmPackageItem', PackageItemComponent);

export default module.name;