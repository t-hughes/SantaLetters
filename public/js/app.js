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

  .state('landing', {
    url: '/landing',
    templateUrl: 'views/landing.html'
  })

  .state('products', {
    url: '/products',
    templateUrl: 'views/products.html',
    controller: 'productsCtrl'
  })

  .state('letterTypes', {
    url: '/letterTypes',
    templateUrl: 'views/letterTypes.html'
  })

  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html'
  });

});
