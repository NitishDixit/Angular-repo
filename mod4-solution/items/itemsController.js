(function (){
  'use strict';

  angular.module('itemsModule')
  .controller('itemsController', itemsController);

  itemsController.$inject = ['itemsData'];
  function itemsController (itemsData)
  {
    var itemsCtrl = this;
    itemsCtrl.items = [];
    itemsCtrl.items = itemsData.data;
    //console.log(itemsCtrl.items);
  }

})();
