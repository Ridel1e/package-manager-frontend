/**
 * Created by ruslansalahov on 24/11/2016.
 */

import angular from 'angular';

/* actions */
import PackageActions from './package.action';
import SearchActions from './search.action';

const module = angular
  .module('app.actions', []);

module
  .service('packageActions', PackageActions)
  .service('searchActions', SearchActions);

export default module.name; 