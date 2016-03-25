puppyApp.controller('PuppyCtrl', [
  '$scope',
  'breedService',
  function($scope, breedService){

    $scope.breeds = breedService.getBreeds()

  }

]);