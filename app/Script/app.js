/**
 * Created by shanelian on 7/6/15.
 */

var app = angular.module('shane', []);

var project = {
  name: 'Shuffood',
  discription: 'An app will automatically choose one of the most popular food types and search for the restaurant of that type             near you. Specially designed for the moment when you can’t decide what to eat. Implemented with Google Maps and Google                  Places APIs. V 2.0 is under development.',
  link: 'https://goo.gl/skOj66'
};

app.controller("ProjectController", function ($scope) {
  $scope.data = {
    name: "Project Name"
  };
});


'use strict';

