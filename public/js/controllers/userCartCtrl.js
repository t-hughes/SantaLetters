app.controller('userCartCtrl', function($scope, userCartSrv) {

    // Get Cart Items
$scope.cart = userCartSrv.getCart();

// Cart Quantity
$scope.cartQty = () => {
  return $scope.cart.reduce((previous, current) => +current.productQty + previous, 0);
};

// Update Quantity & Pricing
$scope.updateQty = () => {
  userCartSrv.updateCart($scope.cart);
  $scope.subtotal();
  $scope.tax();
  $scope.grandtotal();
};


// Remove Cart Items
$scope.removeItem = ($index) => {
  userCartSrv.removeItem($index);
};

// Cart Math Here

// Get Subtotal
$scope.subtotal = () => {
  return userCartSrv.subtotal();
};

$scope.tax = () => {
  return userCartSrv.tax();
};

// Grand Total
$scope.grandtotal = () => {
  return userCartSrv.grandtotal();
};

});
