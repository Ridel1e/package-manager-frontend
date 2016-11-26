/**
 * Created by ruslansalahov on 24/11/2016.
 */

import { combineReducers } from 'redux';

import { router } from 'redux-ui-router';
import packages from './packages.reducer';
import searchString from './search.reducer';

const rootReducer = combineReducers({
  router,
  packages,
  searchString
});

export default rootReducer;