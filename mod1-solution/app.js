(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.foodList = "";

  $scope.checkFood = function () {
    var splitArray = $scope.foodList.split(',');
    var count = 0;
    for(var i=0; i<splitArray.length; i++)
    {
      if (splitArray[i].trim() != "")
      {
        count++;
      }
    }
    if(count <= 3 && count !=0)
    {
      $scope.message = "Enjoy!";
      $scope.fontCss = "font-green";
      $scope.borderCss = "border-green";
    }
    else if (count >= 4 )
    {
      $scope.message = "Too much!";
      $scope.fontCss = "font-green";
      $scope.borderCss = "border-green";
    }
    else
     {
       $scope.message = "Please enter data first";
       $scope.fontCss = "font-red";
       $scope.borderCss = "border-red";
    }
  };
}

})();
