angular.module('goaldApp')
  .controller('userIdCtrl', userIdCtrl);

userIdCtrl.$inject = ['$http', '$state', '$stateParams'];

function userIdCtrl($http, $state, $stateParams) {
  
  var self = this;

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
