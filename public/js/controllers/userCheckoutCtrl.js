app.controller('userCheckoutCtrl', function($scope, $state, userCheckoutSrv, userCartSrv, productSrv) {

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

    // Get Cart from cartSRv
    let cart = userCartSrv.getCart();

    // Checkout Button enabled / disabled
    if (cart.length === 0) {
        $scope.disabled = true;
    }

    // Make Guest Customer Object
    $scope.customerDetails = {};

    // Make Order Object
    let order = {
        order_total_price: 0,
        order_item_quantity: cart.length
    };

    // Make Order Details Object
    let orderDetails = cart.map((product) => {
        return {
            product_id: product.product_id,
            od_product_quantity: product.productQty,
            od_product_price: + product.product_price * product.productQty
        };
    });

    // Add order total price to order
    order.order_total_price = userCartSrv.grandtotal();

    // Add Order
    $scope.addOrder = () => {
        userCheckoutSrv.addOrder($scope.customerDetails, order, orderDetails);

        // ALERT FOR ORDER
        swal({
            title: 'Order successful!',
            text: `Thank you for your purchase!`,
            type: 'success',
            buttonsStyling: true,
            showConfirmButton: true,
            confirmButtonText: 'See What Else We Have!'
        }).then(() => {
            $state.go('product');
            userCartSrv.resetCart();
        });

    };

});
