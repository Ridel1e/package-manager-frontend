/**
 * Created by ruslansalahov on 16/11/2016.
 */

import AngularObject from 'helpers/angular-object';

class PackageResource extends AngularObject {
  constructor($http) {
    'ngInject';
    super($http);

  }

  all(queryParams) {
    return this.$http
      .get('//localhost:8000/packages', {
        params: { query: queryParams }
      })
      .then((response) => response.data);
  }
}

export default PackageResource;