import * as actionTypes from 'actions/package.action';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PACKAGE_SUCCESS:
      return action.payload;
  
    default:
      return state;
  }
}