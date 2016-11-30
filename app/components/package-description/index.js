import angular from 'angular';

import PackageDescriptionComponent from './package-description.component';

const module = angular
  .module('app.components.packageDescription', [

  ]);

module
  .component('spmPackageDescription', PackageDescriptionComponent);

export default module.name;