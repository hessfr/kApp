/* global angular, document, window */
'use strict';

angular.module('kApp.ServiceFactory', [])

.factory('ServiceFactory', function($http) {

	var factory = {};
	var baseUrl = '/some/url/for/service/';
	var url = 'http://localhost:8080/RESTfulExample/rest/message/aaa'; //TODO: just for test
    var headers = {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    };

	factory.createAccount = function(firstName, lastName, email, phone) {
		var data = {
                'firstName': firstName,
                'lastName': lastName,
                'email': email,
                'phone': phone
        };
		// return $http.post(baseUrl + 'login/', data);

		return $http({
            method: "GET",
            headers: headers,
            url: url
        })
	};

	return factory;
})