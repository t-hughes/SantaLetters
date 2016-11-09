app.controller('cartCtrl', function ($scope, cartSrv) {

  // Gets Products from User's Cart
  $scope.cart = cartSrv.getCart();

  // Removes Products from User's Cart
  $scope.removeProduct = function($index) {
    cartSrv.removeProduct($index);
  };



});
