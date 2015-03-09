angular.module('app', ['ui.bootstrap'])
    .controller("MainController", function ($scope, $http) {
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
    })
    .controller('RatingDemoCtrl', function ($scope) {
        $scope.rate = 7;
        $scope.max = 10;
        $scope.isReadonly = true;

        $scope.hoveringOver = function(value) {
            $scope.overStar = value;
            $scope.percent = 100 * (value / $scope.max);
        };

        $scope.ratingStates = [
            {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
            {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
            {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
            {stateOn: 'glyphicon-heart'},
            {stateOff: 'glyphicon-off'}
        ];
    })
    .filter('trustAsResourceUrl', ['$sce', function ($sce) {
        return function (val) {
            return $sce.trustAsResourceUrl(val);
        };
    }]);
