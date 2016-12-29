var app = angular.module('santaLettersApp', ['ui.router', 'duScroll']);

app.config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/home');


    $stateProvider
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

    .state('santaStore', {
        url: '/santaStore',
        templateUrl: 'views/santaStore.html',
        controller: 'santaStoreCtrl'
    })

    .state('productDetails', {
        url: '/productDetails/:id',
        templateUrl: 'views/productDetails.html',
        controller: 'productDetailsCtrl'
    })

    .state('userCart', {
        url: '/userCart',
        templateUrl: 'views/userCart.html',
        controller: 'userCartCtrl'
    })

    .state('userCheckout', {
        url: '/userCheckout',
        templateUrl: 'views/userCheckout.html',
        controller: 'letterCreateCtrl'
    })

    .state('about', {
        url: '/about',
        templateUrl: 'views/about.html'
    })

    .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html'
    });

});
