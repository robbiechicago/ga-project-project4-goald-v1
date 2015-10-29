angular.module('goaldApp')
  .controller('eventCtrl', eventCtrl);

eventCtrl.$inject = ['$http', '$state', '$stateParams'];

function eventCtrl($http, $state, $stateParams) {
  
  var self = this;

  self.newEvent = newEvent;
  function newEvent(project_id, created_at, user_id) {
    console.log('a nice new event');
    console.log('project id: ' + project_id)
    console.log('project created at ' + created_at)
    console.log('user_id = ' +user_id)

    var theDateTime = (new Date)
    console.log(theDateTime)

    var aNewEvent = {
      "project_id": project_id,
      "event_datetime": theDateTime
    }

    console.log(aNewEvent)

    $http
      .post('http://localhost:3000/users/' + user_id + '/projects/' + project_id + '/events', aNewEvent)
      .then(function(response) {
        console.log(response);
    });

  }
}
