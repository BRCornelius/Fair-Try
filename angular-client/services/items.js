angular.module('app')
.service('edamam', function($http, $window) {
  this.getAll = function(query, callback) {
    $http.get("https://api.edamam.com/search", {
      parameters: {
        key: window.EDAMAM_API,
        id: window.EDAMAM_ID,
        q: query,
        maxResults: 10,
        timeout: 1500
      }
    })
    .then(function({data}) {
      if(callback) {
        // data = JSON.parse(data);
        console.log(data)
        callback(data);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  };
});