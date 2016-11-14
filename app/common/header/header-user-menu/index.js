/**
 * Created by ridel1e on 13/11/2016.
 */

import angular from 'angular';

/* components */
import HeaderUserMenu from './header-user-menu.component';

const module = angular
  .module('app.common.header.userMenu', []);

module
  .component('spmHeaderUserMenu', HeaderUserMenu);

export default module.name;