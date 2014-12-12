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
                        text: "Do you believe that people commit an offence by arriving in Australia without permission and seeking asylum? If Yes, what offence do they commit? ",
                        selected: false
                    },
                    {
                        id: 2,
                        text: "Do you consider that people who arrive in Australia informally and seek asylum should be called \"illegal\"?",
                        selected: false
                    },
                    {
                        id: 3,
                        text: "Do you believe it is right to imprison children who have not committed any offence?",
                        selected: false
                    },
                    {
                        id: 4,
                        text: "Do you believe it is right to imprison women who have not committed any offence?",
                        selected: false
                    },
                    {
                        id: 5,
                        text: "Do you believe it is right to imprison people who have not committed any offence?",
                        selected: false
                    },
                    {
                        id: 6,
                        text: "Should asylum seekers who arrive in Australia be treated humanely, decently, fairly?",
                        selected: false
                    },
                    {
                        id: 7,
                        text: "In your opinion, are asylum seekers who arrive in Australia treated humanely, decently, fairly?",
                        selected: false
                    },
                    {
                        id: 8,
                        text: "Do you believe that people who arrive in Australia informally and seek asylum should be detained?  If yes, for how long should they be detained, and why?",
                        selected: false
                    },
                    {
                        id: 9,
                        text: "Do you believe that people who arrive in Australia informally and seek asylum should be sent to other countries for processing?  If so, why?",
                        selected: false
                    },
                    {
                        id: 10,
                        text: "How much does it cost Australia each year to pursue its current policy of deterrence in relation to asylum seekers who arrive by boat?",
                        selected: false
                    },
                    {
                        id: 11,
                        text: "Do you believe Australia's policy of indefinite mandatory detention of asylum seekers is necessary, humane, decent, fair?",
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