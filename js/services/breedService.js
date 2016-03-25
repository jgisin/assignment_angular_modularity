puppyApp.factory("breedService", ['$http', function($http){

  var obj = {};
  var _breeds = [];

  var _callBreeds = function() {$http.get('https://pacific-stream-9205.herokuapp.com/breeds.json')
    .then(function(data){
      data.data.forEach(function(breed) {
        _breeds.push(breed);
    });
  }, function(){
    console.log("it broke");
  });
  };

  obj.getBreeds = function() {
    _breeds = [];
    _callBreeds();
    return _breeds;
  };

  return obj;

}] );
