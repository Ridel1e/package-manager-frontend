/**
 * Created by ridel1e on 13/11/2016.
 */

import angular from 'angular';

import config from './config.constant';

const module = angular
  .module('app.config', [

  ]);

module
  .constant('APP_CONFIG', config);

export default module.name;