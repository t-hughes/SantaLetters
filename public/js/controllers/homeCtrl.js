app.controller('homeCtrl', function($scope, $state, homeSrv) {

  $scope.getAllProducts = homeSrv.getAllProducts().then(function(response) {
        $scope.products = response.data;
    });

});
