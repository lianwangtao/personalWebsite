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
