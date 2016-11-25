/**
 * Created by ruslansalahov on 23/11/2016.
 */

const InputKeyUp = () => {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      callback: '&onKeyUpAction',
      key: '@',
    },
    link($scope, iElement, iAttrs, ngModel) {

      iElement.bind('keyup', ($event) => {
        if($scope.key === undefined) {
          $scope.callback({value: ngModel.$modelValue});
        }
        else {
          if($event.key === $scope.key) {
            $scope.callback({value: ngModel.$modelValue});
          }
        }
      });
    }
  }
};

export default InputKeyUp;