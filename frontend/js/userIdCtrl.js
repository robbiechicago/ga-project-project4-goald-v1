angular.module('goaldApp')
  .controller('userIdCtrl', userIdCtrl);

userIdCtrl.$inject = ['$http', '$state', '$stateParams'];

function userIdCtrl($http, $state, $stateParams) {
  
  var self = this;
  var id = $stateParams.id  

  self.getUser = getUser;
  getUser()

  function getUser() {
    $http
      .get('http://localhost:3000/users/' + id)
      .then(function(response) {
        self.user = response.data
      })
    getUserEvents()
  }

  self.getUserEvents = getUserEvents;
  function getUserEvents() {
    $http
      .get('http://localhost:3000/users/' + id + '/events')
      .then(function(response) {
        console.log('response:')
        console.log(response)
        self.events = response.data
      })
  }

}
