angular.module('search')
.service('edamam', function($http, window) {
  this.getAll = function(callback) {
    $http.get("https://api.edamam.com/search?q=${q}&app_id=12dee925&app_key=04c48a27fe8b98c5e22513639642bc1e&from=0&to=1", {
      parameters: {
        key: window.EDAMAM_API,
        id: window.EDAMAM_ID,
        q: 'chicken',
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