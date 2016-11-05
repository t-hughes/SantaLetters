var app = angular.module('santaLettersApp', ['ui.router']);

app.config(function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/');
  $stateProvider

//First page seen
  .state('home', {
    url: '/',
    templateUrl: 'views/home.html'
  })

  .state('landing', {
    url: '/landing',
    templateUrl: 'views/landing.html'
  })

  .state('products', {
    url: '/products',
    templateUrl: 'views/products.html'
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
