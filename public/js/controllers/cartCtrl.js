app.controller('cartCtrl', function ($scope, cartSrv, letterCreateSrv) {

  // Gets Products from User's Cart
  $scope.cart = cartSrv.getCart();


  // Removes Products from User's Cart
  $scope.removeProduct = function($index) {
    cartSrv.removeProduct($index);
  };

  $scope.subTotal = function() {
    return $scope.cart.reduce(function(previous, current) {
    return  +current.product_price + previous;
    }, 0);
  };

  $scope.taxCalc = function () {
  return $scope.subTotal() * 0.0685;
};

  $scope.total = function() {
    return $scope.subTotal() + $scope.taxCalc();
  };

});
