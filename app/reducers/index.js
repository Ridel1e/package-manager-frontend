/**
 * Created by ruslansalahov on 24/11/2016.
 */

import { combineReducers } from 'redux';

import { router } from 'redux-ui-router';
import packages from './packages.reducer';

const rootReducer = combineReducers({
  router,
  packages
});

export default rootReducer;