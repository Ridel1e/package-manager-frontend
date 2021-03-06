/**
 * Created by ruslansalahov on 24/11/2016.
 */

import { combineReducers } from 'redux';

import { router } from 'redux-ui-router';
import packages from './packages.reducer';
import pack from './package.reducer';
import searchString from './search.reducer';
import isSideNavActive from './side-nav.reducer';

const rootReducer = combineReducers({
  router,
  packages,
  searchString,
  isSideNavActive,
  'package': pack
});

export default rootReducer;