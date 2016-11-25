/**
 * Created by ridel1e on 13/11/2016.
 */

import angular from 'angular';

/* components */
import UserMenu from './user-menu.component';

const module = angular
  .module('app.common.header.userMenu', []);

module
  .component('spmUserMenu', UserMenu);

export default module.name;