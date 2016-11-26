/**
 * Created by ruslansalahov on 22/11/2016.
 */

import AngularContainer from 'helpers/angular-container';

class PackagesPageController extends AngularContainer {
  constructor(packageActions, $ngRedux) {
    'ngInject';
    super(packageActions, $ngRedux);
  }

  mapStateToThis(state) {
    return {
      packages: state.packages,
      searchString: state.searchString
    }
  }

  mapActionsToThis() {
    return this.packageActions;
  }
}

export default PackagesPageController;