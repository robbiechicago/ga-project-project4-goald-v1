angular.module('goaldApp')
  .controller('userIdCtrl', userIdCtrl);

userIdCtrl.$inject = ['$http', '$state', '$stateParams'];

function userIdCtrl($http, $state, $stateParams) {
  
  var self = this;  
  var id = $stateParams.id  

  self.getUser = getUser;
  console.log('boomting2 - firing getUser()')
  getUser()

  function getUser() {
    $http
      .get('http://localhost:3000/users/' + id)
      .then(function(response) {
        self.user = response.data
        console.log(self.user)
        self.goals = response.data.goals
        console.log(self.goals)
    })
  }

  self.getUserProjects = getUserProjects;
  function getUserProjects() {
    console.log('running getUserProjects')  
    $http
      .get('http://localhost:3000/users/' + id + '/projects')
      .then(function(response) {
        self.projects = response.data
        console.log('projects:')
        console.log(self.projects)
    })
  }

  self.getUserProjectGoal = getUserProjectGoal;
  function getUserProjectGoal(project_id) {
    $http
      .get('http://localhost:3000/users/' + id + '/projects/' + project_id + '/goals' )
      .then(function(response) {
        self.goal = response.data
        console.log('goal:')
        console.log(self.goal)
    })
  }

}
