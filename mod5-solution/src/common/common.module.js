(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://nitishdixit-coursera-angular.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
