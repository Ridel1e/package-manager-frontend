/**
 * Created by ruslansalahov on 24/11/2016.
 */

const FETCH_PACKAGES_REQUEST = 'FETCH_PACKAGES_REQUEST',
      FETCH_PACKAGES_SUCCESS = 'FETCH_PACKAGES_SUCCESS',
      FETCH_PACKAGES_ERROR = 'FETCH_PACKAGES_ERROR',
      FETCH_PACKAGE_REQUEST = 'FETCH_PACKAGE_REQUEST',
      FETCH_PACKAGE_ERROR = 'FETCH_PACKAGE_ERROR',
      FETCH_PACKAGE_SUCCESS = 'FETCH_PACKAGE_SUCCESS';

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

  function fetchPackage(name) {
    return (dispatch) => {
      dispatch(_fe)
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

  function _fetchPackageRequest() {
    return {
      type: FETCH_PACKAGE_REQUEST,
      payload: {},
    }
  }

  function _fetchPackageSuccess(pkg) {

  }

  function _fetchPackageError(error) {

  }
};

export default packageActions;

export {
  FETCH_PACKAGES_REQUEST,
  FETCH_PACKAGES_SUCCESS,
  FETCH_PACKAGES_ERROR,
  FETCH_PACKAGE_REQUEST,
  FETCH_PACKAGE_SUCCESS,
  FETCH_PACKAGE_ERROR
}