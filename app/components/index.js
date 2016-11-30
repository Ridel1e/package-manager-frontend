/**
 * Created by ridel1e on 13/11/2016.
 */

import angular from 'angular';

/* modules */

import SearchModule from './search';
import PackagesItemModule from './package-item';
import ListViewModule from './list-view';
import PackageDescriptionModule from './package-description';
import PackageAdditionalInfoModule from './package-additional-info';
import LoginFormModule from './login-form';

const module = angular
  .module('app.components', [
    SearchModule,
    PackagesItemModule,
    ListViewModule,
    PackageDescriptionModule,
    PackageAdditionalInfoModule,
    LoginFormModule
  ]);

export default module.name;