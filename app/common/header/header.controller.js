/**
 * Created by ruslansalahov on 23/11/2016.
 */

import AngularContainer from 'helpers/angular-container';

class HeaderController extends AngularContainer {
  constructor(searchActions, $ngRedux) {
    'ngInject';
    super(searchActions, $ngRedux);
  }
  
  mapActionsToThis() {
    return this.searchActions;
  }

  _isEmpty(value) {
    return value === undefined || value === '' || value === null || value !== value;
  }
}

export default HeaderController;