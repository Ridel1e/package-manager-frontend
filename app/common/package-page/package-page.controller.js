
import AngularContainer from 'helpers/angular-container';

class PackagePageController extends AngularContainer {
  constructor ($ngRedux) {
    'ngInject';
    super($ngRedux);
  }

  mapStateToThis(state) {
    return {
      'package': state.package 
    }
  }
}

export default PackagePageController;