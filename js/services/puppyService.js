puppyApp.factory("puppyService", ['$http', function($http){

  var _puppies = [];
  var obj = {};

  var _callPuppies = function(){
    $http.get('https://ajax-puppies.herokuapp.com/puppies.json')
    .then(function(response){
      response.data.forEach(function(puppy){
        _puppies.push(puppy);
      });
    }, function(){
      console.log('it broke');
    });
  };

  obj.createPuppy = function(name, breed_id) {
    $http.post('https://ajax-puppies.herokuapp.com/puppies.json', {name: name, breed_id: breed_id});
  };

  obj.getPuppies = function(){
    _puppies.splice(0);
    _callPuppies();
    return _puppies;
  };

  obj.removePuppy = function(id){
    $http.delete('https://ajax-puppies.herokuapp.com/puppies/' + id +'.json')
    .then(function(){
      console.log('it adopted');
    }, function(){
      console.log('it broke');
    });
  };

  return obj;

}] );
