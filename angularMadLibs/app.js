// jQuery --------------------------------------
$(document).ready(function(){
    $("span").html("&nbsp;&nbsp;&nbsp;&nbsp;");
    
    $("#reset").click(function(){
        $("input").val(" ");  
        $("span").html("&nbsp;&nbsp;&nbsp;&nbsp;");
    });                  
});

// AngularJS --------------------------------------
// Module
var myApp = angular.module('myApp', []);

// Controller
myApp.controller('mainController', ['$scope', function ($scope) {

    // Model
    $scope.placeName = '';
    $scope.noun = '';
    $scope.noun2 = '';
    $scope.season = '';
    $scope.affectionateTerm = '';
    $scope.pastTenseVerb = '';
    $scope.vehicle = '';    
    
}]);



