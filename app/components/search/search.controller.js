/**
 * Created by ruslansalahov on 16/11/2016.
 */

import AngularObject from 'helpers/angular-object';

class SearchController extends AngularObject {
  constructor(searchService) {
    'ngInject';
    super(searchService);
  }

}

export default SearchController;