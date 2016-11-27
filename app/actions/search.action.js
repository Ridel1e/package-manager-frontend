/**
 * Created by ruslansalahov on 25/11/2016.
 */

const SET_SEARCH = 'SET_SEARCH';

const searchActions = ($state) => {
  'ngInject';

  return {
    setSearchString
  };

  function setSearchString(queryString) {
    return {
      type: SET_SEARCH,
      payload: queryString
    }
  }
};

export default searchActions;

export { SET_SEARCH }