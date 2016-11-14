/**
 * Created by ridel1e on 13/11/2016.
 */

import angular from 'angular';

/* modules */
import MainModule from './main';
import SupportModule from './support';
import DocumentationModule from './documentation';

const module = angular
  .module('app.components', [
    MainModule,
    SupportModule,
    DocumentationModule
  ]);

export default module.name;