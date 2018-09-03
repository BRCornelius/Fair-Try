angular.module('app', [])
.config(function ($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.edamam.com/**'
  ]);
});
