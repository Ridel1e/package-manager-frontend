/**
 * Created by ruslansalahov on 16/11/2016.
 */

const SearchAutoComplete = () => {
  return {
    restrict: 'A',
    link($scope, iElement, iAttrs) {
      console.log(iElement.autocomplete);
    }
  }
};




export default SearchAutoComplete;