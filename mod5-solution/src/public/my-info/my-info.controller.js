(function () {
  "use strict";
  angular.module("public")
  .controller('myInfoController', myInfoController);

  myInfoController.$inject = ['ApiPath', 'MenuService'];
  function myInfoController(ApiPath, MenuService)
  {
    var $ctrl = this;
    $ctrl.basePath = ApiPath;
    $ctrl.info = MenuService.getInfo();

    if($ctrl.info == null)
      $ctrl.notSigned = true;
      else {
        $ctrl.notSigned = false;
      }
  }
})();
