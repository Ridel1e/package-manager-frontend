/**
 * Created by ridel1e on 14/11/2016.
 */

import angular from 'angular';

/* components */
import ContentComponent from './content.component';

const module = angular
  .module('app.common.content', []);

module
  .component('spmContent', ContentComponent);

export default module.name;