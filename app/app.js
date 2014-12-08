(function(){
	'use strict';

	angular.module('contact-mp', [ 'ngRoute','contact-mp-main','templates' ])
	  .config(function ($routeProvider) {
	    $routeProvider
	      .otherwise({
	        redirectTo: '/'
	      });
	  });
	  
})();