/**
 * Created by ruslansalahov on 25/11/2016.
 */

import AngularObject from './angular-object';


class AngularContainer extends AngularObject {

  /**
   * First element must be an action!
   * @private
   */
  _initialize() {
    this.state = {};

    const actions = this.mapActionsToThis();

    this.unsubscribe =
      this.$ngRedux
        .connect(this.mapStateToThis, actions)(this.state);
  }

  $onDestroy() {
    this.unsubscribe();
  }

  mapStateToThis() {
    return {};
  }

  mapActionsToThis() {
    return {};
  }
}

export default AngularContainer;