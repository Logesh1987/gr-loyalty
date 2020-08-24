var gratisfaction = angular.module('grLoyalty', [])
    
gratisfaction.controller('grController', function($scope) {
    $scope.activeMenu = 4;
    $scope.activeClaimCard = null;
    $scope.loyaltyViews = 1;
    $scope.hamMenu = false;

    $scope.toggleMenu = e => {
        $scope.hamMenu = !$scope.hamMenu;
    }
})