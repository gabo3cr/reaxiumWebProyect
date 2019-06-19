App.config(['$routeProvider', function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'subscribe/subscribe.html',
            controller: 'subscribeController'
        })

        .when('/reaxium', {
            templateUrl: 'reaxiumPage/reaxium.html',
            controller: 'reaxiumController'
        })

        .when('/home', {
            templateUrl: 'home/home.html',
            controller:  'homeController'
        })

        .when('/schoolPage', {
            templateUrl: 'school/schoolPage.html',
            controller:  'schoolController'
        })

        .when('/contact', {
            templateUrl: 'contactUs/contact.html',
            controller: 'contactController'
        })

        .otherwise({
            redirectTo: '/reaxium.html'
        })
}]);
