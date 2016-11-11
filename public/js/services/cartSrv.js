app.service('cartSrv', function () {

  var cart = [];

  //Adds Products to User's Cart
  this.cartStorage = function(Item) {
    cart.push(Item);
    console.log(cart);
  };

  //Gets Products from User's Cart
  this.getCart = function() {
    return cart;
  };

  //Deletes Products from User's Cart
  this.removeProduct = function($index) {
    cart.splice($index, 1);
  };


  // TODO add a bubble next to shopping cart that increments as items are added just count the array have controller count the arrayoutput with {{cart.length}}

});
