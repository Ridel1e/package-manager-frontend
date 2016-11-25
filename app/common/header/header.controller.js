/**
 * Created by ruslansalahov on 23/11/2016.
 */

import AngularObject from 'helpers/angular-object.js';

class HeaderController extends AngularObject {
  constructor($state) {
    'ngInject';
    super($state)
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