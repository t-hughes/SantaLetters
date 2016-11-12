app.controller('letterCreateCtrl', function($scope, $state, letterCreateSrv, cartSrv) {

//Changes letterhead when thumbnail is clicked on the lettterTypes view
$scope.current = 'scLetterHead';

/////////////
// Products//
////////////
  $scope.getProduct = letterCreateSrv.getProduct($state.params.id)
      .then(function(response) {
        $scope.productID = response.data;
      });

      $scope.getAllProducts = letterCreateSrv.getAllProducts()
    .then(function(response) {
      $scope.products = response.data;
  });

  //Adds Product to Cart
    $scope.addProductToCart = function(Item) {
      $scope.cartStorage = cartSrv.cartStorage(Item);

      swal({
        type: 'success',
        title: Item.product_name + ' was added to your cart!',
        confirmButtonColor: '#D9534F',
        confirmButtonText: 'Okay'
      });
    };

});
