'use strict';
angular.module('amApp')
    .run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams, $location, $window) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$on('$stateChangeSuccess', function(event) {
            // $window.ga('send', 'pageview', $location.path());
        });
    }])
    .config(function($translateProvider) {
        $translateProvider
            .translations('es', lang_es)
            .translations('vn', lang_vi)
            .preferredLanguage('es');
    })
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/cv');
        $stateProvider
            .state('cv', {
                url: '/cv',
                templateUrl: 'views/cv.html',
                controller: function($window, $translate, $scope) {
                    $window.document.title = 'Tuyen-ng site';
                    $scope.changelang = function(lang) {
                        if ('vn' === lang) {
                            $translate.use('vn');
                        } else if ('es' === lang) {
                            $translate.use('es');
                        }
                    };
                }
            })
            .state('app', {
                abstract: true,
                url: '/app',
                templateUrl: 'views/layout.html',
                controller: function($window, $translate, $scope) {
                    $window.document.title = 'Tuyen-ng';
                    $scope.changelang = function(lang) {
                        if ('vn' === lang) {
                            $translate.use('vn');
                        } else if ('es' === lang) {
                            $translate.use('es');
                        }
                    };
                }
            })
            .state('app.home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: function($window, $location, $scope) {
                    $window.document.title = 'Tuyen-ng';
                    // $window.ga('send', 'pageview', 'Home');
                    $scope.showAnimation = function() {
                        $scope.checkShow = true;
                    };
                }
            })
            .state('app.about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: function($window, $location, $scope) {
                    $window.document.title = 'Tuyen-ng';
                    // $window.ga('send', 'pageview', 'skill');                    
                }
            })
            .state('app.contact', {
                url: '/contact',
                templateUrl: 'views/contact.html',
                controller: function($window, $location) {
                    $window.document.title = 'Project';
                    // $window.ga('send', 'pageview', 'Project tham gia');
                }
            })
            .state('app.help', {
                url: '/help',
                templateUrl: 'views/help.html',
                controller: function($window, $location) {
                    $window.document.title = 'Bạn bè của tôi';
                    // $window.ga('send', 'pageview', 'Bạn bè');
                }
            })
            .state('kimanh', {
                abstract: true,
                url: '/kimanh',
                templateUrl: 'views/kimanh/kimanh.html',
                controller: function($window, $location) {
                    $window.document.title = 'Kim Anh page';
                    // $window.ga('send', 'pageview', 'Kim Anh');
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
