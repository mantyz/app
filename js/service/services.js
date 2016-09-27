/* jshint node: true */
/* jshint browser: true */
/* jshint esversion: 6 */
/* global movieStubApp */

"use strict";

movieStubApp.factory('movieStubFactory', function($resource) {
	return $resource('http://moviestub.cloudno.de/movies');
});

movieStubApp.factory('movieStubBookingsFactory', function($resource) {
	return $resource('http://moviestub.cloudno.de/bookings');
});
