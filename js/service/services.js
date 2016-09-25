movieStubApp.factory('movieStubFactory', function($resource) {
	return $resource('http://moviestub.cloudno.de/movies');
});
