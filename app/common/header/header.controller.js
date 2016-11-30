/**
 * Created by ruslansalahov on 23/11/2016.
 */

import AngularObject from 'helpers/angular-object';
import * as Helpers from 'helpers/common-helpers';

class HeaderController extends AngularObject {
  constructor($state, $ngRedux) {
    'ngInject';
    super($state, $ngRedux);
  }
  
  search(value) {
    if(Helpers.isEmpty(value)) { return; }

    this.$state.go('packages', { query: value });
  }
}

export default HeaderController;