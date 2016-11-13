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

// Alert when something is added to the cart
      swal({
        type: 'success',
        title: Item.product_name + ' was added to your cart!',
        confirmButtonColor: '#D9534F',
        confirmButtonText: 'Okay'
      });
    };

//User Deets and Delivery Form Info Sending to DB

$scope.saveCustomerData = function(data) {
  console.log(data);
  letterCreateSrv.saveCustomerData(data);
};

$scope.saveFinalCustomer = function (data){
  $scope.saveCustomerData(data);
  letterCreateSrv.createFinalCustomer();
};
});
