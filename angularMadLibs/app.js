// jQuery --------------------------------------
$(document).ready(function(){
    $("span").html("&nbsp;&nbsp;&nbsp;&nbsp;");
    
    $("#reset").click(function(){
        $("input").val(" ");  
        $("span").html("&nbsp;&nbsp;&nbsp;&nbsp;");
    });                  
});

// AngularJS --------------------------------------
// MODULE
var myApp = angular.module('myApp', []);

// CONTROLLER
myApp.controller('mainController', ['$scope', function ($scope) {

    // MODEL
    $scope.placeName = '';
    $scope.noun = '';
    $scope.noun2 = '';
    $scope.season = '';
    $scope.affectionateTerm = '';
    $scope.pastTenseVerb = '';
    $scope.vehicle = '';    
    
}]);



