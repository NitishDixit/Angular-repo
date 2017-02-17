(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective(){
var ddo = {
  templateUrl: 'result.html',
  scope: {
    found: '<',
    onRemove: '&',
    emptyList: '<'
  },
  controller: FoundItemsDirectiveController,
  controllerAs: 'narrowCtrl',
  bindToController: true
};
return ddo;

}

function FoundItemsDirectiveController(){
  var narrowCtrl = this;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService)
{
  var narrowCtrl = this;
  narrowCtrl.desc = "";
  narrowCtrl.emptyList = false;
  narrowCtrl.found = [];
  narrowCtrl.getMatchedMenuItems = function(desc){
    var promise = MenuSearchService.getMatchedMenuItems(desc);
    promise.then(function (response) {
        narrowCtrl.found = response;
        narrowCtrl.emptyList = MenuSearchService.checkIfAnyItem();
        console.log(narrowCtrl.found);
        console.log(narrowCtrl.emptyList);
    })
  }
  narrowCtrl.removeItem = function(itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  }
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http)
{
  var service = this;
  var foundItems = [];
  service.checkIfAnyItem = function (){
    if(foundItems.length == 0)
      return true;
    else
      return false;

  }

  service.removeItem = function(itemIndex) {
    foundItems.splice(itemIndex, 1);
  }

  service.getMatchedMenuItems = function (desc){
    foundItems = [];
    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    })
    .then(function(result){
      if (desc === "") {
        return [];
      }
      else {
        for(var i=0 ; i < result.data.menu_items.length; i++)
        {
          if ((result.data.menu_items[i].description.indexOf(desc) != -1)) {
            var item = {
              name: result.data.menu_items[i].name,
              short_name: result.data.menu_items[i].short_name,
              description: result.data.menu_items[i].description
            }
            foundItems.push(item);
          }
        }
        return foundItems;
      }
    });
  }
}

})();
