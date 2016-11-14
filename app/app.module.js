/**
 * Created by ridel1e on 13/11/2016.
 */

import angular from 'angular';

/* vendors */
import uiRouter from 'angular-ui-router';

/* root component */
import AppConfig from './app.config';
import AppComponent from './app.component'; 

/* app modules */
import AppConfigModule from './config';
import CommonModule from './common';
import ComponentsModule from './components';

const module = angular
  .module('app', [
    uiRouter,
    AppConfigModule,
    CommonModule,
    ComponentsModule
  ]);

module
  .component('spmApp', AppComponent)
  .config(AppConfig);

export default module.name;
 