(function (){
  'use strict';

  angular.module('categoryModule')
  .controller('CategoryController', CategoryController);

  CategoryController.$inject = ['categoryData'];
  function CategoryController (categoryData)
  {
    var cactrl = this;
    cactrl.categories = categoryData.data;
  }

})();
