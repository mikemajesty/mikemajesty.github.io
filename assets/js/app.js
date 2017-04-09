angular.module('app', ['ngSanitize']).config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist(['self']);
});