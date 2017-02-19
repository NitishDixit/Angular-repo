(function () {
  angular.module('itemsModule')
  .component('items',{
    templateUrl:'items/items.component.template.html',
    bindings: {
      categories: '<'
    }
  })
})();
