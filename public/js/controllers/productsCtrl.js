app.controller('productsCtrl', function($scope, $state, productsSrv) {

  $scope.getAllProducts = productsSrv.getAllProducts().then(function(response) {
        $scope.products = response.data;
    });

});
