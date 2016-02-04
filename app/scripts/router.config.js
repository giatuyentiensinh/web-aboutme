'use strict';
angular.module('amApp')
	.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
      }]
    ).config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/app/home');

		$stateProvider
			.state('app', {
				abstract: true,
				url: '/app',
				templateUrl: 'views/layout.html',
				controller: function($window) {
					$window.document.title = 'Tuyen-ng';
				}
			})
			.state('app.home', {
				url: '/home',
				templateUrl: 'views/home.html',
				controller: function($window, $scope) {					
					$window.document.title = 'Tuyen-ng';

					$scope.showAnimation = function() {
						$scope.checkShow = true;
					};
				}
			})
			.state('app.about', {
				url: '/about',
				templateUrl: 'views/about.html',
				controller: function($window) {					
					$window.document.title = 'Tuyen-ng';
				}
			})
			.state('app.contact', {
				url: '/contact',
				templateUrl: 'views/contact.html',
				controller: function($window) {					
					$window.document.title = 'Tuyen-ng';
				}
			})
			.state('app.help', {
				url: '/help',
				templateUrl: 'views/help.html',
				controller: function($window) {					
					$window.document.title = 'Bạn bè của tôi';
				}
			})
			.state('kimanh', {
				abstract: true,
				url: '/kimanh',
				templateUrl: 'views/kimanh/kimanh.html',
				controller: function($window) {					
					$window.document.title = 'Kim Anh page';
				}
			})
			.state('kimanh.tongquan', {
				url: '/tongquan',
				templateUrl: 'views/kimanh/tongquan.html'
			})
			.state('kimanh.congviec', {
				url: '/congviec',
				templateUrl: 'views/kimanh/congviec.html'
			})
			.state('kimanh.banthan', {
				url: '/banthan',
				templateUrl: 'views/kimanh/banthan.html'
			})
			.state('kimanh.banbe', {
				url: '/banbe',
				templateUrl: 'views/kimanh/banbe.html'
			})
			.state('kimanh.albumanh', {
				url: '/albumanh',
				templateUrl: 'views/kimanh/albumanh.html'
			});
}]);