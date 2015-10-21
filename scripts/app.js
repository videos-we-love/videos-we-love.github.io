angular.module('app', [
    'ngRoute',
    'ui.bootstrap'
]).controller("MainController", function ($location, $http) {
    var vm = this;
    vm.videos = [];
    vm.order = 'dateAdded';

    $http.get('data/videos.json').
        success(function (data) {
            vm.videos = data.videos;
        });

    vm.isActive = function(route) {
        return route === $location.path();
    }
})
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/backlog', {
                templateUrl: 'pages/watch-list.html'
            }).
            otherwise({
                templateUrl: 'pages/overview-list.html'
            });
    }])
    .config(function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http*://www.youtube.com/**',
            'http*://player.vimeo.com/**',
            'http://www.infoq.com/**'
        ]);
    });
