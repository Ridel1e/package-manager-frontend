/**
 * Created by ruslansalahov on 16/11/2016.
 */

import AngularObject from 'helpers/angular-object';

class PackageResource extends AngularObject {
  constructor($http, baseApi) {
    'ngInject';
    super($http, baseApi);
    this.resource = 
      this.baseApi.createResource('packages');
  }

  all(params) {
    return this.resource.all(params);
  }

  one(id) {
    return this.resource.one(id);
  }
}

export default PackageResource;