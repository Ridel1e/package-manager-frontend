/**
 * Created by ridel1e on 13/11/2016.
 */

import angular from 'angular';

/* modules */
import DirectivesModule from 'directives';

/* components */
import SearchService from './search.service';
import SearchAutoCompleteDirective from './directives/search-autocomplete.directives';
import SearchComponent from './search.component';

const module = angular
  .module('app.common.header.search', [
    DirectivesModule
  ]);

module
  .component('spmSearch', SearchComponent)
  .service('searchService', SearchService)
  .directive('spmAutoComplete', SearchAutoCompleteDirective);

export default module.name;