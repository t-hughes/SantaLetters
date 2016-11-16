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

$scope.selectItemsFilter = [
  {id: 1, name: "Select an event that occurred in the past 12 months"},
  {id: 2,name: "child/family got a new pet dog", para: "I see you got a pet dog this year. I'll be as quiet as a mouse and be sure not to wake your dog when I visit on Christmas Eve! I only ask that you teach him not to bite me as I come down the chimney!"},
  {id: 3, name: "child/family got a new pet cat", para: "I see you got a new pet cat this year. I promise not to drink all the milk so your kitty can have some on Christmas morning! I can't say the same for the cookies though!"},
  {id: 4, name: "child/family got a new pet rabbit", para: "I see you got a new pet rabbit this year. Do you think it's related to the Easter Bunny? He did told me at dinner once that many of his brothers and sisters wanted to grow up to be professional pet bunnies!"},
  {id: 5, name: "Child learned to walk", para: "Mrs. Claus told me you have learned to walk! When you feel ready, feel free to walk over here to the North Pole and help me feed the reindeer and keep the elves in check."},
  {id: 6, name: "Child lost their first tooth", para: "The tooth fairy told me he visted your house and took your first tooth! I hope he left a generous gift under your pillow. Make sure to keep smiling!"},
  {id: 7, name: "Child became potty trained", para: "What great news! The elves just told me you are now potty trained. All of us here at the North Pole are so proud of you! Make sure to keep your hands clean by washing them after each time you go potty."},
  {id: 8, name: "", para: ""},
  {id: 9, name: "", para: ""},
  {id: 10, name: "", para: ""},
  {id: 11, name: "", para: ""},
  {id: 12, name: "", para: ""},
  {id: 13, name: "", para: ""},
  {id: 14, name: "", para: ""},
  {id: 15, name: "", para: ""},
  {id: 16, name: "", para: ""},
  {id: 17, name: "", para: ""},
  {id: 18, name: "", para: ""},
  {id: 19, name: "", para: ""},
  {id: 20, name: "", para: ""},
  {id: 21, name: "", para: ""},
  {id: 22, name: "", para: ""},
  {id: 23, name: "", para: ""},
  {id: 24, name: "", para: ""},
  {id: 25, name: "", para: ""},
  {id: 26, name: "", para: ""},
  {id: 27, name: "", para: ""},
  {id: 28, name: "", para: ""},
  {id: 29, name: "", para: ""},
  {id: 30, name: "", para: ""},
  {id: 31, name: "", para: ""},
  {id: 32, name: "", para: ""},
  {id: 33, name: "", para: ""},
  {id: 34, name: "", para: ""},
  {id: 35, name: "", para: ""},
  {id: 36, name: "", para: ""},
  {id: 37, name: "", para: ""},
  {id: 38, name: "", para: ""}
];

});
