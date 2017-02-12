(function(){
  'use strict';
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService)
{
  var toBuy = this;
  toBuy.buyList = ShoppingListCheckOffService.getBuyList();
    toBuy.itemBought = function (index){
      ShoppingListCheckOffService.itemBought(index);
    };
}

AlreadyBoughtController.inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService)
{
  var alreadyBought = this;
  alreadyBought.boughtList = ShoppingListCheckOffService.getBoughtList();
}

function ShoppingListCheckOffService()
{
  var service = this;

  var buyList = [
    {
      name:"cookies",
      quantity: 10
    },
    {
      name:"milk",
      quantity: 2
    },
    {
      name:"chips",
      quantity: 5
    },
    {
      name:"bread",
      quantity:3
    },
    {
      name:"butter",
      quantity:1
    }
  ];
  var boughtList = [];
  var message;

  service.getBuyList = function (){
    return buyList;
  }

  service.getBoughtList = function (){
    return boughtList;
  }

  service.itemBought = function (index){
      var item = buyList[index];
      boughtList.push(item);
      buyList.splice(index,1);
  }



}

})();
