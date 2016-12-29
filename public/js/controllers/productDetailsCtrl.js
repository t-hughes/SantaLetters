app.controller('productDetailsCtrl', function ($scope, $state, santaStoreSrv) {

  // Get Product for Product View
  $scope.getProduct = santaStoreSrv.getProduct($state.params.id)
    .then(function(response) {
      $scope.product = response.data;
    });

});
