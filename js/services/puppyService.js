puppyApp.factory("puppyService", ['$http', function($http){

  var _puppies = [];
  var obj = {};

  var _callPuppies = function(){
    $http.get('https://pacific-stream-9205.herokuapp.com/puppies.json')
    .then(function(data){
      data.data.forEach(function(puppy){
        _puppies.push(puppy);
      });
    }, function(){
      console.log('it broke');
    });
  };

  obj.getPuppies = function(){
    _puppies = [];
    _callPuppies();
    return _puppies;
  };

  return obj;

}] );
