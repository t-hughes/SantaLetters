app.service('letterCreateSrv', function($http) {

    this.getAllProducts = function(id) {
        return $http({
            method: 'GET',
            url: 'http://localhost:2000/api/products'
        });
    };

    this.getProduct = function(id) {
        return $http({
          method: 'GET',
          url: 'http://localhost:2000/api/products'
        });
      };

//Saving customer name, email, PH#, mailing streets, city, state, zip and storing it in the array until it posts to the DB.
    // var customerData = [];
    //
    // this.createCustomer = function() {
    //   return customerData;
    // };
    //
    // this.saveCustomerData = function(data) {
    //   customerData.push(data);
    //   console.log(customerData);
    // };

//Sends all customer data to DB
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


//Saving Personalized Letter Data
    // var personalLtrData = {};
    //
    // this.getPersonalLtr = function() {
    //   return personalLtrData;
    // };
    //
    // this.savePersonalLtrData = function(data) {
    //   personalLtrData = data;
    //   console.log(personalLtrData);
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
  console.log(order);
};

});
