
// MODULE
// the following variable is being put into the global namespace-- it's the 
// only one we'll put there, and it's objective is to allow you to avoid
// poluting the global namespace;
// in the array brackets, you can include a list of the services/modules that your
// app needs to use; link the service/module to your site per the script sources
// cited in the html, and then insert the dependencies into the brackets in your
// module's parameter list:
var myApp = angular.module('myApp', []);

// CONTROLLERS
// here, we tell Angular what Model-View to bind together
// the controller is named 'mainController,' and its code 
// is defined in the function literal that is part of the declaration
myApp.controller('mainController', ['$scope', function ($scope) {

    $scope.handle = '';
    $scope.option = '';    
    
    $scope.placeName = '';
    $scope.noun = '';
    $scope.noun2 = '';
    $scope.season = '';
    $scope.affectionateTerm = '';
    $scope.pastTenseVerb = '';
    $scope.vehicle = '';    
    
}]);



