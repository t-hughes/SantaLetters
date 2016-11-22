var app = angular.module('santaLettersApp', ['ui.router']);

app.config(function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/home');
  $stateProvider

//First page seen
  .state('home', {
    url: '/home',
    templateUrl: 'views/home.html',
  })

  .state('letterCreate', {
    url: '/letterCreate',
    templateUrl: 'views/letterCreate.html',
    controller: 'letterCreateCtrl'
  })

  .state('letterApproval', {
    url: '/letterApproval',
    templateUrl: 'views/letterApproval.html',
    controller: 'letterCreateCtrl'
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
