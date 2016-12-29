app.service('santaStoreSrv', function($http) {

    this.getAllProducts = function(id) {
      return $http({
        method: 'GET',
        url: '/api/products'
      });
    };

    this.getProduct = function(id) {
      return $http({
        method: 'GET',
        url: `/api/products/${id}`
      });
    };

});
