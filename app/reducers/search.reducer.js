/**
 * Created by ruslansalahov on 25/11/2016.
 */

import * as searchActions from '../actions/search.action';

export default (state = '', action) => {
  switch (action.type) {

    case searchActions.SET_SEARCH:
      return action.payload;

    default:
      return state;
  }
}