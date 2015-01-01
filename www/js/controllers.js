angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ProgramsCtrl', function($scope, Programs,$http) {
  url = 'http://gymmie.dev/wp-json/posts?type[]=program';
  $http.get(url).
    success(function(data) {  
        $scope.programs = data;;
  });
})

.controller('ProgramDetailCtrl', function($scope, $stateParams, Programs,$http) {

  url = 'http://gymmie.dev/wp-json/posts?id[]=' + $stateParams ;
  $http.get(url).
    success(function(data) {  
        $scope.program = data[0];
        //console.log(data[0].title)
  });

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
