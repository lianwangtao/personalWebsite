/**
 * Created by shanelian on 7/6/15.
 */

'use strict';
var app = angular.module('shane', ['duScroll','ngMaterial','ngMdIcons']);

app.controller('projectsListCtrl', ['$scope','$http', function($scope, $http) {
  $http.get('projects.json').success(function(data) {
    $scope.projects = data;
  });
}]);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
      .primaryPalette('blue');
  $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();
});

app.controller('windowsizeCtrl', ['$scope','$window', function($scope, $window) {

  var width = document.getElementById("main").clientWidth;
  if (width >= 992 && width <= 1265) {
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


//Controller for Angualr Material Dialog
app.controller('AppCtrl', function($scope, $mdDialog, $mdMedia) {
  $scope.status = '  ';
  $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

  $scope.showTabDialog = function(ev,project) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'partials/tabDialog.tmpl.html',
      locals: {
        project: project
      },
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
  };
});
function DialogController($scope, $mdDialog, project) {

  $scope.project = project;

  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}
