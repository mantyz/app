/* jshint node: true */
/* jshint browser: true */
/* jshint esversion: 6 */
/* global movieStubApp, $ */

"use strict";

movieStubApp.controller('movieStubController', function($scope, movieStubFactory, $location) {
	$scope.headerSrc = "tmpl/header.html";
	$scope.movies = movieStubFactory.query();
	$scope.currMovie = null;
	$scope.getMovieById = function(id) {
		var movies = $scope.movies;
		for (var i = 0; i < movies.length; i++) {
			var movie = $scope.movies[i];
			if (movie.id == id) {
				$scope.currMovie = movie;
			}
		}
	};
	$scope.back = function() {
		window.history.back();
	};
	$scope.getCount = function(n) {
		return new Array(n);
	};
	$scope.isActive = function(route) {
		return route === $location.path();
	};
	$scope.isActivePath = function(route) {
		return ($location.path()).indexOf(route) >= 0;
	};
});

movieStubApp.controller('movieDetailsController', function($scope, $routeParams) {
	$scope.getMovieById($routeParams.id);
});

movieStubApp.controller('bookTicketsController', function($scope, $http, $location, $routeParams) {
	$scope.getMovieById($routeParams.id);
	$scope.onlyNumbers = /^\d+$/;
	$scope.formData = {};
	$scope.formData.movie_id = $scope.currMovie.id;
	$scope.formData.movie_name = $scope.currMovie.name;
	$scope.formData.date = "Today";

	$scope.processForm = function() {
		console.log($scope.formData);
		$http({
				method: 'POST',
				url: 'http://moviestub.cloudno.de/book',
				data: $.param($scope.formData),
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
			})
			.success(function(data) {
				$location.path("/bookings");
			});
	};
});

movieStubApp.controller('bookingDetailsController', function($scope, movieStubBookingsFactory) {
	$scope.bookings = movieStubBookingsFactory.query();
});
