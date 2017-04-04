angular.module('myapp.services', [])

.factory('Expedia',function ($http) {

  var getAll = function () {
    return $http({
      method : 'GET',
      url : '/api/Expedia'
    }).then(function (resp) {
      return resp.data
    })
  }

  return {
    getAll : getAll
  }
})
