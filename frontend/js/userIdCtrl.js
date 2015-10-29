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
    getUserProjects()
  }

  self.getUserProjects = getUserProjects;
  function getUserProjects() {
    $http
      .get('http://localhost:3000/users/' + id + '/projects')
      .then(function(response) {
        self.projects = response.data
        console.log('this is what should be ng-repeating:')
        console.log(self.projects)
      })
  }

}
