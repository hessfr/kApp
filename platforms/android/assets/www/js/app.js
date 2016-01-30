angular.module('kApp', ['ionic', 'ionic-material', 'kApp.AppCtrl', 'kApp.HomescreenController', 'kApp.MyTestController', 'ionMdInput'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    
    // Turn off back button text like this:
    $ionicConfigProvider.backButton.previousTitleText(false);
    

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.home', {
        url: '/home',
        views: {
            'fabContent': {
                templateUrl: 'templates/home.html',
                controller: 'HomeScreenController'
            },
            'menuContent': {
                templateUrl: "templates/menubutton.html",
                controller: 'MyTestController'
            }
        }
    })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
