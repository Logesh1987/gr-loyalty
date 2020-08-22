var gratisfaction = angular.module('grLoyalty', [])
    
gratisfaction.controller('grController', function($scope) {
    $scope.activeMenu = 4;
    $scope.activeClaimCard = null;
})