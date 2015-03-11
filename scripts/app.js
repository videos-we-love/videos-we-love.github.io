angular.module('app', [
        'ngRoute',
        'ui.bootstrap'
    ]).controller("MainController", function ($scope, $location, $http) {
        var vm = this;
        vm.videos = [];
        $scope.order = 'dateAdded';

        $http.get('data/videos.json').
            success(function (data) {
                console.log(data);
                vm.videos = data.videos;
            });

        //$scope.setOrder = function (order) {
        //    $scope.order = order;
        //};

        $scope.isActive = function(route) {
            return route === $location.path();
        }
    })
    .controller('RatingDemoCtrl', function ($scope) {
        $scope.max = 10;
        $scope.isReadonly = true;
    })
    .controller('BacklogController', function($scope) {
        $scope.message = 'Hello';
    })
    .controller('OverviewController', function($scope) {
        $scope.message = 'Bye';
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/backlog', {
                templateUrl: 'pages/watch-list.html',
                controller: 'BacklogController'
            }).
            otherwise({
                templateUrl: 'pages/overview-list.html',
                controller: 'OverviewController'
            });
    }])
    .filter('trustAsResourceUrl', ['$sce', function ($sce) {
        return function (val) {
            return $sce.trustAsResourceUrl(val);
        };
    }]);
