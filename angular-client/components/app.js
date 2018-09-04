angular.module('app')

  .controller('AppCtrl', function(itemsService) {
    itemsService.getAll((data) => {

      this.items = data;

    },

    this.searchResults = (input) => {
      edamam.search(this.input, this.updateVideos);
    }),

    this.handleClick = () => {
      this.service.search(this.input, () => {
        this.result(data);
      });
    };
}).component('app', {
  bindings: {},
  controller: 'AppCtrl',
  templateUrl: '/templates/index.html'
});
