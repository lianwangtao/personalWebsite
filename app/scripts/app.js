/**
 * Created by shanelian on 7/6/15.
 */

 'use strict';
var app = angular.module('shane', ['duScroll']);

app.controller('projectsListCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('projects.json').success(function(data) {
    $scope.projects = data;
  });
}]);

app.controller('windowsizeCtrl', ['$scope', '$window', function($scope, $window) {
  var width = document.getElementById("main").clientWidth;
  if (width < 768) {
    $scope.size = "brow col-xs-offset-1";
  } else if (width >= 768 && width < 992) {
    $scope.size = "brow col-sm-offset-1";
  } else if (width >= 992 && width <= 1265) {
    $scope.size = "brow col-md-offset-2";
  } else if (width > 1265) {
    $scope.size = "brow col-lg-9 col-lg-offset-3";
  }


  $(".brick1").hover(function() {
    $(this).addClass("pulse");
    }, function() {
    $(this).removeClass("pulse");
  });

}]);
