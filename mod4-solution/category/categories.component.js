(function () {
  angular.module('categoryModule')
  .component('categories',{
    templateUrl:'category/category.component.template.html',
    bindings: {
      categories: '<'
    }
  })
})();
