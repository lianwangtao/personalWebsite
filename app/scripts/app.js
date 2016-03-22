/**
 * Created by shanelian on 7/6/15.
 */

 'use strict';
var app = angular.module('shane', []);

app.controller('projectsListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('projects.json').success(function(data) {
    $scope.projects = data;
  });
}]);
