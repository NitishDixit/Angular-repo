(function () {
  "use strict";

  angular.module('public')
  .controller('signUpController', signUpController);

  signUpController.$inject = ['ApiPath', 'MenuService'];
  function signUpController(ApiPath, MenuService)
  {
    var $ctrl = this;
    $ctrl.submit = function () {
      $ctrl.basePath = ApiPath;

      MenuService.getItem(regForm.favoriteDish.value).then(function () {
        MenuService.setInfo(regForm);
        $ctrl.valid = true;
        $ctrl.wrongDish = false;
      })
      .catch(function (errorResponse){
        $ctrl.valid = false;
        $ctrl.wrongDish = true;
      })
    }
  }
})();
