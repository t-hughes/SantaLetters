var app = angular.module('santaLettersApp', ['ui.router']);

app.config(function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/home');
  $stateProvider

//First page seen
  .state('home', {
    url: '/home',
    templateUrl: 'views/home.html',
    controller: 'homeCtrl'
  })

  .state('letterTypes', {
    url: '/letterTypes',
    templateUrl: 'views/letterTypes.html',
    controller: 'letterCreateCtrl'
  })

  .state('products', {
    url: '/products',
    templateUrl: 'views/products.html',
    controller: 'productsCtrl'
  })

  .state('productDetail', {
    url: '/product/:id',
    templateUrl: 'views/productDetail.html',
    controller: 'productsCtrl'
  })

  .state('userCart', {
    url: '/userCart',
    templateUrl: 'views/userCart.html',
    controller: 'cartCtrl'
  })

  .state('userCheckout',{
    url: 'userCheckout',
    templateUrl: 'views/userCheckout.html'
  })

  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html'
  });

});
