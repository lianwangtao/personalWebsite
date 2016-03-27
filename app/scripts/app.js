/**
 * Created by shanelian on 7/6/15.
 */

 'use strict';
var app = angular.module('shane', ['duScroll','ngMaterial']);

app.controller('projectsListCtrl', ['$scope','$http', function($scope, $http) {
  $http.get('projects.json').success(function(data) {
    $scope.projects = data;
  });
}]);

//Controller for expanding
/*
app.controller('expandCtrl', ['$scope', '$window', function($scope, $window) {
  var i = 0;
  (function() {
          function SVGExpander( el, options ) {
            this.el = el;
            this.init();
          }
          SVGExpander.prototype.init = function() {
            this.trigger = this.el.querySelector( 'button.trigger' );
            this.shapeEl = this.el.querySelector( 'span.morph-shape' );
            var s = Snap( this.shapeEl.querySelector( 'svg' ) );
            this.pathEl = s.select( 'path' );
            this.paths = {
              reset : this.pathEl.attr( 'd' ),
              open : this.shapeEl.getAttribute( 'data-morph-open' ),
              close : this.shapeEl.getAttribute( 'data-morph-close' )
            };
            this.isOpen = false;
            this.initEvents();
          };
          SVGExpander.prototype.initEvents = function() {
            this.trigger.addEventListener( 'click', this.toggle.bind(this) );
          };
          SVGExpander.prototype.toggle = function() {
            var self = this;
            if( this.isOpen ) {
              this.pathEl.stop().animate( { 'path' : this.paths.close }, 250, mina.easeout, function() {
                self.pathEl.stop().animate( { 'path' : self.paths.reset }, 800, mina.elastic );
              } );
              setTimeout( function() { classie.remove( self.el, 'box--sizeup' ); }, 250 );
            }
            else {
              this.pathEl.stop().animate( { 'path' : this.paths.open }, 250, mina.easeout, function() {
                self.pathEl.stop().animate( { 'path' : self.paths.reset }, 800, mina.elastic );
              } );
              setTimeout( function() { classie.add( self.el, 'box--sizeup' ); }, 250 );
            }
            this.isOpen = !this.isOpen;
            i++;
            console.log("now the i is " + i);
          };
          [].slice.call( document.querySelectorAll( '.box--collapser' ) ).forEach( function( el ) { new SVGCollapser(el); } );
          new SVGExpander( document.getElementById( 'expander' ) );
        })();
}]);
*/

app.controller('windowsizeCtrl', ['$scope','$window', function($scope, $window) {
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


//Controller for Angualr Material Dialog
app.controller('AppCtrl', function($scope, $mdDialog, $mdMedia) {
  $scope.status = '  ';
  $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

  // $scope.showAdvanced = function(ev) {
  //   var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
  //   $mdDialog.show({
  //     controller: DialogController,
  //     templateUrl: '/partials/dialog1.tmpl.html',
  //     parent: angular.element(document.body),
  //     targetEvent: ev,
  //     clickOutsideToClose:true,
  //     fullscreen: useFullScreen
  //   })
  //   .then(function(answer) {
  //     $scope.status = 'You said the information was "' + answer + '".';
  //   }, function() {
  //     $scope.status = 'You cancelled the dialog.';
  //   });
  //   $scope.$watch(function() {
  //     return $mdMedia('xs') || $mdMedia('sm');
  //   }, function(wantsFullScreen) {
  //     $scope.customFullscreen = (wantsFullScreen === true);
  //   });
  // };
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
