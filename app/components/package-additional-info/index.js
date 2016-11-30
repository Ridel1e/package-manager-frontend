import angular from 'angular';

import PackageAdditionalInfoComponent from './package-additional-info.component';

const module = angular
  .module('app.components.packageAdditionalInfo', []);

module
  .component('spmPackageAdditionalInfo', PackageAdditionalInfoComponent);

export default module.name;
