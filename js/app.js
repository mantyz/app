/* jshint unused: false */
/* global angular */

"use strict";

var movieStubApp = angular.module('movieStubApp', ['ngResource', 'ngRoute']);
movieStubApp.config(['$compileProvider', function($compileProvider) {
	$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
}]);
