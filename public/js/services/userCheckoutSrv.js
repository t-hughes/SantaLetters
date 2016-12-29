app.service('userCheckoutSrv', function($http) {

    this.addOrder = function(customerDetails, order, orderDetails) {

      return $http({
        method: 'POST',
        url: '/api/customers/',
        data: customerDetails
      })
      .then((res) => {
        order.customer_id = res.data.customer_id;
          $http({
            method: 'POST',
            url: '/api/orders',
            data: order
            })

            .then((res) => {
              orderDetails.forEach((od) => {
                od.order_id = res.data.order_id;
                $http({
                  method: 'POST',
                  url: '/api/order_details',
                  data: od
            });
          });
        });
      });
    };

});
