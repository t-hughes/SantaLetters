app.controller('productsCtrl', function($scope, $state, productsSrv) {

var state = $state;

  $scope.getProduct = productsSrv.getProduct(state.params.id)
      .then(function(response) {
        $scope.productID = response.data;
      });

      $scope.getAllProducts = productsSrv.getAllProducts()
    .then(function(response) {
      $scope.products = response.data;
  });

});
