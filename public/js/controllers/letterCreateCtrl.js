app.controller('letterCreateCtrl', function($scope, $state, letterCreateSrv, cartSrv) {

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


/////////////////////
// Cart & Checkout//
///////////////////
//Sharing what is on cartCtrl so details can be shown in the order details on userCheckout
$scope.cart = cartSrv.getCart();


//Adds Product to Cart
$scope.addProductToCart = function(Item) {
  $scope.cartStorage = cartSrv.cartStorage(Item);
// Alert when something is added to the cart
swal({
type: 'success',
title: 'You have selected the ' + Item.product_name,
text: 'Message will close automatically after 5 seconds or click',
confirmButtonColor: '#9CD6AC',
confirmButtonText: 'Okay',
timer: 5000
}).then(
function () {},
// handling the promise rejection
function (dismiss) {
if (dismiss === 'timer') {
  console.log('I was closed by the timer');
}
});
};


// Removes Products from User's Cart
$scope.removeProduct = function($index) {
  cartSrv.removeProduct($index);
  // Alert when something is added to the cart
  swal({
  type: 'error',
  title: 'You have removed the ' + products.product_name, //cant get it to bring in the item name//
  text: 'Message will close automatically after 5 seconds or click',
  confirmButtonColor: '#D9534F',
  confirmButtonText: 'Okay',
  timer: 5000
  }).then(
  function () {},
  // handling the promise rejection
  function (dismiss) {
  if (dismiss === 'timer') {
    console.log('I was closed by the timer');
  }
  });
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


//User Deets and Delivery Form Info Sending saved in the service until it is sent to the DB on the last step.

$scope.saveCustomerData = function(data) {
  console.log(data);
  letterCreateSrv.saveCustomerData(data);
};

$scope.saveFinalCustomer = function (data){
  $scope.saveCustomerData(data);
  letterCreateSrv.createFinalCustomer();
};


//Changes letterhead when thumbnail is clicked on the lettterTypes view
$scope.current = 'scLetterHead';


//Personalized Letter Changes

$scope.selectItemsFilterCriteria = [
  {id: 1, name: "An event that occurred in the past 12 months"},
  {id: 2,name: "child/family got a new dog"},
  {id: 3, name: "child/family got a new cat"}
];

});
