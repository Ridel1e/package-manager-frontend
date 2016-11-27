/**
 * Created by ruslansalahov on 23/11/2016.
 */

import AngularObject from 'helpers/angular-object';

class HeaderController extends AngularObject {
  constructor($state, $ngRedux) {
    'ngInject';
    super($state, $ngRedux);
  }
  
  search(value) {
    if(this._isEmpty(value)) { return; }

    this.$state.go('packages', { query: value });
  }

  _isEmpty(value) {
    return value === undefined || value === '' || value === null || value !== value;
  }
}

export default HeaderController;