/* global angular, document, window */
'use strict';

angular.module('kApp.ServiceFactory', [])

.factory('ServiceFactory', function($http) {

	var factory = {};

	factory.createAccountSMS = function(firstName, lastName, email, phone) {
		var data = {
                'firstName': firstName,
                'lastName': lastName,
                'email': email,
                'phone': phone
        };
		return $http.post('/some/url/for/service', data);
	};

	return factory;
})