puppyApp.controller('PuppyCtrl', [
  '$scope',
  'breedService', 'puppyService',
  function($scope, breedService, puppyService){

    $scope.breeds = breedService.getBreeds();
    $scope.puppies = puppyService.getPuppies();
    $scope.createPuppy = function(name, breed_id) {
      puppyService.createPuppy(name, breed_id);
      $scope.puppyName = '';
      $scope.breedId = '';
    };

    $scope.adoptPuppy = function(id){
      puppyService.removePuppy(id);
    };

  }

]);
