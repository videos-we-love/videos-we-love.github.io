angular.module('app', [
        'ngRoute',
        'ui.bootstrap'
    ]).controller("MainController", function ($location, $http) {
        var vm = this;
        vm.videos = [];
        vm.order = 'dateAdded';

        $http.get('http://manyconf.com:8080/videoswelove/videos/_search?size=100').
            success(function (data) {
                vm.videos = data.hits.hits.map(function(element) {
                    return element._source
                });
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
