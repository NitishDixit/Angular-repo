(function (){
  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.inject = ['$http'];
  function MenuDataService($http)
  {
    var service = this;
    service.getAllCategories = function(){
      return $http({
        url: 'https://davids-restaurant.herokuapp.com/categories.json',
        method: 'GET'
      })
      .then(function(response){
        console.log("Response from the server: ",response);
        return response;
      })
    }

    service.getItemsForCategory = function(categoryShortName)
    {
      return $http({
        url: ' https://davids-restaurant.herokuapp.com/menu_items.json?category='+categoryShortName,
        params: {"category": categoryShortName},
        method: 'GET'
      })
      .then(function(response){
        return response;
      })
    }

  }
})();
