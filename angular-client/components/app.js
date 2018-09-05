// var axios = require('axios');
angular.module('app')

  .controller('AppCtrl', function($scope, $http) {
    $scope.recArr = [];
    $scope.fetch = function () {

    }
    $scope.dislike = function () {
      
    }
    $scope.PostClick = function () {
      let postValue = {
        name: this.objectName,
        image: 'url',
        serves: 2,
        calories: 0,
        url: 'url'
      }
      console.log(postValue);
      $http.post('/recipes', postValue);
      $http.post('/holt');
      // table.save(postValue);
      // console.log(postValue)    
    } 
    $scope.ButtonClick = function () {
      // window.alert(this.searchText)
      let searchValue = this.searchText;
      // console.log(searchValue);
      $http.get("https://api.edamam.com/search?q=" + searchValue + "&app_id=12dee925&app_key=04c48a27fe8b98c5e22513639642bc1e&from=0&to=3&calories=200-650&time=0-45&diet=high-protein").then(function(res) {
        // console.log(res)               /*CHECK!*/
        // console.log(res.data.hits);       /*CHECK!*/
        let recipes = res.data.hits
          recipes.forEach(recipe => {
            let doc = {
              name: recipe.recipe.label,
              image: recipe.recipe.image,
              serves: recipe.recipe.yield,
              calories: recipe.recipe.calories,
              url: recipe.recipe.url  
            }
            // console.log(doc);     //CHECK!
            // $scope.recArr.push(doc);
            // $http.post('/recipes', doc);
            $http({
              url: '/recipes',
              method: "POST",
              data: JSON.stringify(doc)
          })
          .then(function(response) {
                  // success
                  console.log('success')
          }, 
          function(response) { // optional
                  // failed
                  console.log('fail')
          });
          // });
          // console.log($scope.recArr);
          // setTimeout(() => {
          //   $apply()
          //   }, 4000);

          
      })
    })
    }
  }).component('app', {
    bindings: {
      searchText: "@",
      objectName: "@",
      recArr: '&'
    },
    controller: 'AppCtrl',
    templateUrl: '/templates/index.html'
});
