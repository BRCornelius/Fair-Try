angular.module('app')

  .controller('AppCtrl', function($scope) {
    $scope.getAll = function(){
      $window.alert($scope.searchText)

      // this.items = data;

    },

    $scope.ButtonClick = function () {
      
      window.alert('alert')
    }

    this.searchResults = (input) => {
      edamam.search(this.input, this.updateVideos);
    },

    this.handleClick = () => {
      this.service.search(this.input, () => {
        this.result(data);
      });
    };
}).component('app', {
  bindings: {
    searchValue: "$ctrl.searchText"
  },
  controller: 'AppCtrl',
  templateUrl: '/templates/index.html'
});
