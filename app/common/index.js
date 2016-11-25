/**
 * Created by ridel1e on 13/11/2016.
 */

import angular from 'angular';

/* component modules */
import HeaderModule from './header';
import NavModule from './nav';
import MainPageModule from './main-page';
import SupportPageModule from './support-page';
import DocumentationPageModule from './documentation-page';
import PackagesPageModule from './packages-page';

/* modules */

const module  = angular
  .module('app.common', [
    HeaderModule,
    NavModule,
    MainPageModule,
    SupportPageModule,
    DocumentationPageModule,
    PackagesPageModule
  ]);

export default module.name;
