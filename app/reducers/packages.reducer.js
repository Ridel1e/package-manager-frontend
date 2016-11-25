/**
 * Created by ruslansalahov on 24/11/2016.
 */

import * as packagesActionTypes from '../actions/package.action';

export default (state = [], action) => {
  switch (action.type) {

    case packagesActionTypes.FETCH_PACKAGES_SUCCESS:
      return action.payload;

    default:
      return state;
  }
}