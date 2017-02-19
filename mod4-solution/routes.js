(function (){
  angular.module('routes', ['ui.router']);

  angular.module('MenuApp')
  .config(MenuConfig);

  function MenuConfig($stateProvider, $urlRouterProvider){

    // Default url when no match
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'category/category.component.html',
      controller:  'CategoryController as cactrl',
      resolve: {
        categoryData: ['MenuDataService', function(MenuDataService){
          return MenuDataService.getAllCategories().then(function(res){
            return res;
          })
        }]
      }
    })

    .state('items', {
      url: '/items/{shortName}',
      templateUrl: 'items/items.component.html',
      controller: 'itemsController as itemsCtrl',
      resolve: {
        itemsData: ['$stateParams', 'MenuDataService',
                    function($stateParams, MenuDataService){
                      return MenuDataService.getItemsForCategory($stateParams.shortName)
                      .then(function(res){
                        return res;
                      })
                    }
        ]
      }
    })
  }


})();
