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
          url: 'http://localhost:2000/api/products/' + id
        });
      };

//Saving customer name, email, PH#, mailing streets, city, state, zip and storing it in the array until it posts to the DB.
    var customerData = [];

    this.createCustomer = function() {
      return customerData;
    };

    this.saveCustomerData = function(data) {
      customerData.push(data);
      console.log(customerData);
    };

//Sends all customer data to DB
    this.createFinalCustomer = function() {
      var finalCustomer = customerData.reduce(function(result, currentObject) {
        for(var key in currentObject) {
          if(currentObject.hasOwnProperty(key)) {
            result[key] = currentObject[key];
          }
        }
        return result;
      }, {});
      // return $http({
      //   method: 'POST',
      //   url: 'http://localhost:2000/api/customers',
      //   data: 'finalCustomer'
      // });
      // console.log(finalCustomer);
    };

});
