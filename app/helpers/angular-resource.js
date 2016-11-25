/**
 * Created by ridel1e on 03/11/2016.
 */

import AngularObject from './angular-object';

class AngularResource extends AngularObject {
  constructor(...args) {
    super.apply(this, ...args);
    this._repository = this.Restangular.all();
  }
}

export default AngularResource;