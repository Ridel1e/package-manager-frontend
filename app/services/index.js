/**
 * Created by ruslansalahov on 16/11/2016.
 */

import angular from 'angular';

import BaseApiProvider from './base-api.provider';
import PackageResource from './package.resource';

const module = angular
  .module('app.services', []);

module
  .service('packageResource', PackageResource)
  .provider('baseApi', BaseApiProvider);

export default module.name;