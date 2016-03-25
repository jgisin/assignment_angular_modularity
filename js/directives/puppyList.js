puppyApp.directive('puppyList', function() {

  return {
    templateUrl: 'js/directives/puppyList.html',
    restrict: 'A',
    scope: {
      puppy: "=",
      adoptPuppy: "&"
    }
  };
});
