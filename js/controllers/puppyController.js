puppyApp.controller('PuppyCtrl', [
  '$scope',
  'breedService', 'puppyService',
  function($scope, breedService, puppyService){

    $scope.breeds = breedService.getBreeds();
    $scope.puppies = puppyService.getPuppies();
    
  }

]);
