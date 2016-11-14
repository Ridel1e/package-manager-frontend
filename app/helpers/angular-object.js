/**
 * Created by ridel1e on 03/11/2016.
 */

class AngularObject {

  /**
   * @public
   * @static
   * @returns {Array<string>}
   */
  static get $inject() {
    return this.$injectDirect || [];
  }

  /**
   * @public
   * @static
   * @param {Array<string>} injections
   */
  static set $inject(injections) {
    this.$injectDirect = (this.$injectDirect || []).concat(injections);
  }

  constructor() {
    const $inject = this.constructor.$inject;
    
    for(let i = 0; i < $inject.length; i++) {
      let injectionName = $inject[i];
      this[injectionName] = arguments[i];
    }

    this._initialize();
  }

  /**
   *
   * @private
   */
  _initialize() {}
}

export default AngularObject;