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


  // TODO get rid of cart view and do all of this on the user checkout. get rid of the sleight cart icon and badge in index.html 

});
