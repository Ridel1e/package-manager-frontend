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
import PackagePageModule from './package-page';
import LoginPageModule from './login-page';

/* modules */

const module  = angular
  .module('app.common', [
    HeaderModule,
    NavModule,
    MainPageModule,
    SupportPageModule,
    DocumentationPageModule,
    PackagesPageModule,
    PackagePageModule,
    LoginPageModule
  ]);

export default module.name;
