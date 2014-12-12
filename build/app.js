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


    angular.module('contact-mp-main', ['ngRoute', 'textAngular'])
        .config(function ($routeProvider, $provide) {
                // this demonstrates how to register a new tool and add it to the default toolbar
                $provide.decorator('taOptions', ['$delegate', function (taOptions) {
                    // Controls for textAngular
                    taOptions.toolbar = [
                        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote'],
                        ['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],
                        ['justifyLeft', 'justifyCenter', 'justifyRight'],
                    ];
                    taOptions.classes = {
                        focussed: 'focussed',
                        toolbar: 'btn-toolbar',
                        toolbarGroup: 'btn-group',
                        toolbarButton: 'btn btn-default',
                        toolbarButtonActive: 'active',
                        disabled: 'disabled',
                        textEditor: 'form-control',
                        htmlEditor: 'form-control'
                    };
                    return taOptions;
                }]);
                $routeProvider
                    .when('/', {
                        templateUrl: 'main/main.html',
                        controller: 'MainCtrl'
                    });
            })
            .controller('MainCtrl', function ($scope, $http) {
                // Ministers
                $scope.ministers = [

                ];

                $http.get('data/australian-mp.json').
                    success(function(data, status, headers, config) {
                        // Lets just add in a .selected field
                        $scope.ministers = data.map(function(minister){
                            return angular.extend(minister, {
                                selected: false
                            });
                        });
                    }).
                    error(function(data, status, headers, config) {
                        alert('an error occurred');
                    });

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

                function filterSelectedQuestions(question) {
                    return question.selected;
                }

                $scope.selectedQuestions = function () {
                    return $scope.questions.filter(filterSelectedQuestions);
                };

                $scope.toggleQuestion = function (question) {
                    question.selected = !question.selected;
                };
            });

})();