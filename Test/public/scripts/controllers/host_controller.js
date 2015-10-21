(function(){

'use strict';

rockola.controller('app', ['$scope',
                           'socket',
                          function(
                              $scope,
                              socket
                            ){

  $scope.messages = [];
  $scope.deviceId = '';
  $scope.party    = {
    host  : null,
    songs : []
  };
  $scope.message  = '';

  $scope.send = function(){
    socket.emit('message', $scope.message);
    $scope.messages.push($scope.message);
  }

  $scope.host = function(){
    socket.emit('host:party', $scope.deviceId);
    $scope.party.host = $scope.deviceId;
  }

  $scope.stopHosting = function(){
    socket.emit('host:party', null);
    $scope.party.host = null;
  }

  socket.on('user:left', function(msg){
    console.log(msg);
  })

  socket.on('message', function (message) {
    $scope.messages.push(message);
  });

  socket.on('host:party', function(hostId){
    $scope.party.host = hostId;
  });

  socket.on('init', function(data){
    $scope.messages = data.messages;
    $scope.party    = data.party;

    var deviceId = sessionStorage.getItem('deviceId');

    if(deviceId){
      $scope.deviceId = deviceId;
    } else {
      $scope.deviceId = data.deviceId;
      sessionStorage.setItem('deviceId', data.deviceId);
    }

  });

}]);

})();