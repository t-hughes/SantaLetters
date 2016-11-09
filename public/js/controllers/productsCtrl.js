app.controller('productsCtrl', function($scope, $state, productsSrv, cartSrv) {

  $scope.getProduct = productsSrv.getProduct($state.params.id)
      .then(function(response) {
        $scope.productID = response.data;
      });

      $scope.getAllProducts = productsSrv.getAllProducts()
    .then(function(response) {
      $scope.products = response.data;
  });

  //Adds Product to Cart
    $scope.addProductToCart = function(Item) {
      $scope.cartStorage = cartSrv.cartStorage(Item);
    };

});
