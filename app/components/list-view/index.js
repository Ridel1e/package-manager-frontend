import angular from 'angular';

import ListViewComponent from './list-view.component';

const module = angular
  .module('app.components.listView', []);

module
  .component('spmListView', ListViewComponent);

export default module.name;