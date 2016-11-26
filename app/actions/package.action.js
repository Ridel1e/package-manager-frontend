/**
 * Created by ruslansalahov on 24/11/2016.
 */

const FETCH_PACKAGES_REQUEST = 'FETCH_PACKAGES_REQUEST',
      FETCH_PACKAGES_SUCCESS = 'FETCH_PACKAGES_SUCCESS',
      FETCH_PACKAGES_ERROR = 'FETCH_PACKAGES_ERROR',
      SAVE_PACKAGES_REQUEST = 'SAVE_PACKAGES_REQUEST',
      SAVE_PACKAGES_SUCCESS = 'SAVE_PACKAGES_SUCCESS',
      SAVE_PACKAGES_ERROR = 'SAVE_PACKAGES_ERROR',
      REMOVE_PACKAGES_REQUEST = 'REMOVE_PACKAGES_REQUEST',
      REMOVE_PACKAGES_SUCCESS = 'REMOVE_PACKAGES_SUCCESS',
      REMOVE_PACKAGES_ERROR = 'REMOVE_PACKAGES_ERROR',
      EDIT_PACKAGES_REQUEST = 'EDIT_PACKAGES_REQUEST',
      EDIT_PACKAGES_SUCCESS = 'EDIT_PACKAGES_SUCCESS',
      EDIT_PACKAGES_ERROR = 'EDIT_PACKAGES_ERROR';

const packageActions = (packageResource) => {
  'ngInject';
  
  return {
    fetchPackages
  };
  
  function fetchPackages(queryString) {
    return (dispatch) => {
      dispatch(_fetchPackagesRequest());

      return packageResource
        .all(queryString)
        .then((packages) =>
          dispatch(_fetchPackagesSuccess(packages)))
        .catch((error) =>
          dispatch(_fetchPackagesError(error)));
    }
  }
  
  function _fetchPackagesRequest() {
    return {
      type: FETCH_PACKAGES_REQUEST,
      payload: []
    }
  }

  function _fetchPackagesSuccess(packages) {
    return {
      type: FETCH_PACKAGES_SUCCESS,
      payload: packages
    }
  }

  function _fetchPackagesError(error) {
    return {
      type: FETCH_PACKAGES_ERROR,
      payload: error
    }
  }
};

export default packageActions;

export {
  FETCH_PACKAGES_REQUEST,
  FETCH_PACKAGES_SUCCESS,
  FETCH_PACKAGES_ERROR,
  SAVE_PACKAGES_REQUEST,
  SAVE_PACKAGES_SUCCESS,
  SAVE_PACKAGES_ERROR,
  REMOVE_PACKAGES_REQUEST,
  REMOVE_PACKAGES_SUCCESS,
  REMOVE_PACKAGES_ERROR,
  EDIT_PACKAGES_REQUEST,
  EDIT_PACKAGES_SUCCESS,
  EDIT_PACKAGES_ERROR
}