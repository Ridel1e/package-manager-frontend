/**
 * Created by ridel1e on 13/11/2016.
 */

import angular from 'angular';

/* vendors */
import uiRouter from 'angular-ui-router';
import 'restangular';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import ngMaterial from 'angular-material';
import ngRedux from 'ng-redux';
import ngReduxRouter from 'redux-ui-router';

/* root component */
import AppConfig from './app.config';
import StoreConfig from './app-store.config';
import AppComponent from './app.component'; 

/* app modules */
import AppConfigModule from './config';
import AppActions from './actions';
import CommonModule from './common';
import ComponentsModule from './components';
import ResourcesModule from './resources';

const module = angular
  .module('app', [
    uiRouter,
    'restangular',
    ngRedux,
    ngReduxRouter,
    ngAnimate,
    ngAria,
    ngMaterial,
    AppConfigModule,
    AppActions,
    CommonModule,
    ComponentsModule,
    ResourcesModule
  ]);

module
  .component('spmApp', AppComponent)
  .config(AppConfig)
  .config(StoreConfig);

export default module.name;
 