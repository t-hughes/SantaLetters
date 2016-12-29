app.service('userCartSrv', function() {

    let cart = [],
    subtotal = 0,
    tax = 0,
    grandtotal = 0;


// Add Items to Cart
this.cartStorage = (item) => {
  cart.push(item);
};

// Update Cart
this.updateCart = (updatedCart) => {
  cart = updatedCart;
};

// Get Cart Items
this.getCart = () => {
  return cart;
};

// Delete Cart Items
this.removeItem = ($index) => {
  cart.splice($index, 1);
};

// Reset Cart
this.resetCart = () => {
  cart.length = 0;
};

// Get Subtotal
this.subtotal = () => {
  subtotal = cart.reduce((previous, current) => (+current.product_price * current.productQty) + previous, 0);
  return subtotal;
};

// Get Tax
this.tax = () => {
  tax = subtotal * 0.0685;
  return tax;
};

// Get Grand Total
this.grandtotal = () => {
  grandtotal = subtotal + tax;
  return grandtotal;
};

});
