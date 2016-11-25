/**
 * Created by ruslansalahov on 24/11/2016.
 */

import angular from 'angular';

/* actions */
import PackageActions from './package.action';

const module = angular
  .module('app.actions', []);

module
  .service('packageActions', PackageActions);

export default module.name; 