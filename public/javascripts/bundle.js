'use strict';

var app = angular.module('textSwap', ['ui.router']);

app.run(function() {
  console.log('Text Swap!');
});

console.log("hello");

angular.module('textSwap')
  .controller("mainCtrl", function($scope) {

});
