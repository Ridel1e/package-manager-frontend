import * as actionTypes from 'actions/side-nav.action';

export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_SIDE_NAV:
      return !state
  
    default:
      return state
  }
};
