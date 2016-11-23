app.service('letterCreateSrv', function($http) {

    this.getAllProducts = function(id) {
        return $http({
            method: 'GET',
            url: '/api/products'
        });
    };

    this.getProduct = function(id) {
        return $http({
          method: 'GET',
          url: '/api/products/'
        });
      };

//Sends all data to DB
    // this.createFinalCustomer = function() {
    //   var finalCustomer = customerData.reduce(function(result, currentObject) {
    //     for(var key in currentObject) {
    //       if(currentObject.hasOwnProperty(key)) {
    //         result[key] = currentObject[key];
    //       }
    //     }
    //     return result;
    //   }, {});
      // return $http({
      //   method: 'POST',
      //   url: 'http://localhost:2000/api/customers',
      //   data: 'finalCustomer'
      // });
      // console.log(finalCustomer);
    // };


var order = [];

this.getOrderData = function() {
  return order;
};

this.savePackageData = function(data) {
  if(order[0]) {
      order.splice(0, 1, data);
  } else {
order.push(data);
}
return order;
};

this.saveOrderData = function(data) {
  order.push(data);
  console.log('SAVED TO SERVICE...', order);
};

});
