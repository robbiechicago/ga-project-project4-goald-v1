angular.module('goaldApp')
  .controller('userCtrl', userCtrl);

userCtrl.$inject = ['$http', '$state', '$stateParams'];

function userCtrl($http, $state, $stateParams) {
  
  var self = this;

  self.all = [];

  function getUsers() {
    console.log('running getUsers()')
    $http
      .get('http://localhost:3000/users')
      .then(function(response) {
        console.log(response.data)
        self.all = response.data
      });
  };

  getUsers();

  self.getUser = getUser;

  function getUser(user_id) {
    console.log('running getUser()')
    $http
      .get('http://localhost:3000/users/' + user_id)
      .then(function(response) {
        console.log('user_id', response.data)
        self.user = response.data
        $state.go('arse', { id:user_id })
      })
  }
}
