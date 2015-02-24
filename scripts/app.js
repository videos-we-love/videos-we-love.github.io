angular.module('app', [])
    .controller("MainController", function($http) {
        var vm = this;
        vm.videos = [];

        $http.get('data/videos.json').
            success(function (data) {
                console.log(data);
                vm.videos = data.videos;
            });
    })
    .filter('trustAsResourceUrl', ['$sce', function($sce) {
        return function(val) {
            return $sce.trustAsResourceUrl(val);
        };
    }]);