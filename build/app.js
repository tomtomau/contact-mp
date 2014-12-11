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
'app controller goes here';
'common service goes here';
(function () {
    'use strict';


    angular.module('contact-mp-main', ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'main/main.html',
                    controller: 'MainCtrl'
                });
        })
        .controller('MainCtrl', function ($scope) {
            // Ministers
            $scope.ministers = [
                {
                    name: 'Tony Abbott',
                    electorate: 'Warringah',
                    selected: false
                },
                {
                    name: 'Anthony Albanese',
                    electorate: 'Grayndler',
                    selected: false
                }
            ];

            function filterSelectedMinisters(minister) {
                return minister.selected;
            }

            $scope.selectedMinisters = function () {
                return $scope.ministers.filter(filterSelectedMinisters);
            };

            $scope.toggleMinister = function (minister) {
                minister.selected = !minister.selected;
            };

            // Questions
            $scope.questions = [
                {
                    id: 1,
                    text: "This is question 1",
                    selected: false
                },
                {
                    id: 2,
                    text: "This is question 2",
                    selected: false
                }
            ];

            function filterSelectedQuestions(question){
                return question.selected;
            }

            $scope.selectedQuestions = function(){
                return $scope.questions.filter(filterSelectedQuestions);
            };

            $scope.toggleQuestion = function(question){
                question.selected = !question.selected;
            };
        });

})();