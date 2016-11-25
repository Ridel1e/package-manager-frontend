/**
 * Created by ruslansalahov on 23/11/2016.
 */

import angular from 'angular';

/* directives */
import InputKeyUpDirective from './input-key-up.directive';

const module = angular
  .module('app.directives', [

  ]);

module
  .directive('spmInputKeyUp', InputKeyUpDirective);

export default module.name;
