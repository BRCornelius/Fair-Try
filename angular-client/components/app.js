// var axios = require('axios');
angular.module('app')

  .controller('AppCtrl', function($scope, $http) {
    $scope.ButtonClick = function () {
      // window.alert(this.searchText)
      let searchValue = this.searchText;
      console.log(searchValue);
      // axios.get("https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free")
      //   .then(
      //     console.log("success!")
      //   )
      //   .catch(err=>window.alert(err));
      $http.get("https://api.edamam.com/search?q=" + searchValue + "&app_id=12dee925&app_key=04c48a27fe8b98c5e22513639642bc1e&from=0&to=3&calories=200-650&time=0-45&diet=high-protein").then(function(res) {
        // console.log(res)               /*CHECK!*/
        console.log(res.data.hits);       /*CHECK!*/
        // let recipes = res.data.hits
            // recipes.forEach(recipe => {
              // db.ships.insert({name: recipe.name})              
            // });
      })
    
    }
  }).component('app', {
    bindings: {
      searchText: "@"
    },
    controller: 'AppCtrl',
    templateUrl: '/templates/index.html'
});
