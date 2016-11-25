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
    const actionName = this.constructor.$inject[0];

    this.state = {};

    this.unsubscribe =
      this.$ngRedux.connect(this.mapStateToThis, this[actionName])(this.state);
  }

  $onDestroy() {
    this.unsubscribe();
  }

  mapStateToThis() {}
}

export default AngularContainer;