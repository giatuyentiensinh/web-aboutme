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
				controller: function($window, $scope) {
					$window.document.title = 'Tuyen-ng';

					$scope.pics = [
						{
							image: 'images/playframework.png',
							actualWidth: 630,
							actualHeight: 354,
							name: 'playframework'
						},
						{
							image: 'images/mongodb.png',
							actualWidth: 600,
							actualHeight: 200,
							name: 'mongodb'
						},
						{
							image: 'images/elasticsearch.png',
							actualWidth: 1000,
							actualHeight: 306,
							name: 'elasticsearch'
						},
						{
							image: 'images/cassandra.png',
							actualWidth: 1280,
							actualHeight: 858,
							name: 'cassandra'
						},
						{
							image: 'images/mysql.png',
							actualWidth: 320,
							actualHeight: 166,
							name: 'mysql'
						},
						{
							image: 'images/materialize.png',
							actualWidth: 600,
							actualHeight: 600,
							name: 'materialize'
						},
						{
							image: 'images/bootstrap.png',
							actualWidth: 500,
							actualHeight: 300,
							name: 'bootstrap'
						},
						{
							image: 'images/scraping.png',
							actualWidth: 625,
							actualHeight: 336,
							name: 'scrapy'
						},
						{
							image: 'images/rabbitmq.png',
							actualWidth: 800,
							actualHeight: 153,
							name: 'rabbitmq'
						},
						{
							image: 'images/angularjs.png',
							actualWidth: 681,
							actualHeight: 181,
							name: 'angularjs'
						},
						{
							image: 'images/titan.png',
							actualWidth: 550,
							actualHeight: 378,
							name: 'titandb'
						},
						{
							image: 'images/yeoman.png',
							actualWidth: 600,
							actualHeight: 600,
							name: 'yeoman'
						},
						{
							image: 'images/bower.png',
							actualWidth: 600,
							actualHeight: 600,
							name: 'bower'
						},
						{
							image: 'images/grunt.png',
							actualWidth: 533,
							actualHeight: 185,
							name: 'bower'
						},
						{
							image: 'images/java.png',
							actualWidth: 518,
							actualHeight: 518,
							name: 'java'
						},
						{
							image: 'images/javascript.png',
							actualWidth: 512,
							actualHeight: 512,
							name: 'javascript'
						},
						{
							image: 'images/c.png',
							actualWidth: 512,
							actualHeight: 512,
							name: 'C'
						},
						{
							image: 'images/maven.png',
							actualWidth: 500,
							actualHeight: 144,
							name: 'Maven'
						},
						{
							image: 'images/git.png',
							actualWidth: 600,
							actualHeight: 600,
							name: 'Git'
						},
						{
							image: 'images/ubuntu.png',
							actualWidth: 500,
							actualHeight: 500,
							name: 'Ubuntu'
						}
					];
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