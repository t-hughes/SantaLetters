app.service('homeSrv', function($http) {

    this.getAllProducts = function(id) {
        return $http({
            method: 'GET',
            url: 'http://localhost:2000/api/products'
        });
    };
});
