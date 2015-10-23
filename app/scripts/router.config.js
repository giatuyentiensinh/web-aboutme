'use strict';
app.run(['$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
      }]
    ).config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/app/help');

		$stateProvider
			.state('app', {
				abstract: true,
				url: '/app',
				templateUrl: 'views/layout.html'
			})
			.state('app.home', {
				url: '/home',
				templateUrl: 'views/home.html'
			})
			.state('app.about', {
				url: '/about',
				templateUrl: 'views/about.html'
			})
			.state('app.contact', {
				url: '/contact',
				templateUrl: 'views/contact.html'
			})
			.state('app.help', {
				url: '/help',
				templateUrl: 'views/help.html'
			})
			.state('kimanh', {
				abstract: true,
				url: '/kimanh',
				templateUrl: 'views/kimanh/kimanh.html'
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