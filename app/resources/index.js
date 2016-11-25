/**
 * Created by ruslansalahov on 16/11/2016.
 */

import angular from 'angular';

import PackageResource from './package.resource';

const module = angular
  .module('app.resources', []);

module
  .service('packageResource', PackageResource);

export default module.name;