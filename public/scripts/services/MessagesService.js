angular.module('myApp').service('MessagesService', [
  '$http', function ($http) {
    return {
      latestMessages: function () {
        return $http.get('/api/messages/latest')
        .then(function (messages) {
          return messages.data;
        });
      },

      createNewMessage: function (message) {
        return $http.post('/api/messages', message)
        .then(function (message) {
          return message.data;
        });
      },

      getByTopic: function(topic) {
        return $http
        .get('/api/messages/' + topic.id)
          .then(function(messages) {
            return messages.data;
        });
      },
    };
  }
]);