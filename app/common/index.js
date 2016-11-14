/**
 * Created by ridel1e on 13/11/2016.
 */

import angular from 'angular';

/* component modules */
import HeaderModule from './header';
import NavModule from './nav';
import ContentComponent from './content';

const module  = angular
  .module('app.common', [
    HeaderModule,
    NavModule,
    ContentComponent
  ]);

export default module.name;
