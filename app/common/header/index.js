/**
 * Created by ridel1e on 13/11/2016.
 */

import angular from 'angular';

/* components */
import HeaderComponent from './header.component';

/* modules */
import HeaderSearchModule from './header-search';
import HeaderUserMenuModule from './header-user-menu';

const module = angular
  .module('app.common.header', [
    HeaderSearchModule,
    HeaderUserMenuModule
  ]);

module
  .component('spmHeader', HeaderComponent);

export default module.name;