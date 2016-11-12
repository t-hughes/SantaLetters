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

});
