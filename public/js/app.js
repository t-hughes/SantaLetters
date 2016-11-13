var app = angular.module('santaLettersApp', ['ui.router', 'ngAnimate']);

app.config(function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/home');
  $stateProvider

//First page seen
  .state('home', {
    url: '/home',
    templateUrl: 'views/home.html',
    controller: 'homeCtrl'
  })

  .state('userDetails', {
    url: '/userDetails',
    templateUrl: 'views/userDetails.html',
    controller: 'letterCreateCtrl'
  })

  .state('letterTypes', {
    url: '/letterTypes',
    templateUrl: 'views/letterTypes.html',
    controller: 'letterCreateCtrl'
  })

  .state('letterApproval', {
    url: '/letterApproval',
    templateUrl: 'views/letterApproval.html',
    controller: 'letterCreateCtrl'
  })

  .state('userCart', {
    url: '/userCart',
    templateUrl: 'views/userCart.html',
    controller: 'cartCtrl'
  })

  .state('userCheckout',{
    url: '/userCheckout',
    templateUrl: 'views/userCheckout.html',
    controller: 'letterCreateCtrl'
  })

  .state('about', {
    url: '/about',
    templateUrl: 'views/about.html'
  });

});
