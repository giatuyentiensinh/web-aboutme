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
                    $scope.pics = [{
                        image: 'images/playframework.png',
                        actualWidth: 630,
                        actualHeight: 354,
                        name: 'playframework'
                    }, {
                        image: 'images/mongodb.png',
                        actualWidth: 600,
                        actualHeight: 200,
                        name: 'mongodb'
                    }, {
                        image: 'images/elasticsearch.png',
                        actualWidth: 1000,
                        actualHeight: 306,
                        name: 'elasticsearch'
                    }, {
                        image: 'images/cassandra.png',
                        actualWidth: 1280,
                        actualHeight: 858,
                        name: 'Cassandra'
                    }, {
                        image: 'images/hadoop.png',
                        actualWidth: 500,
                        actualHeight: 500,
                        name: 'Hadoop'
                    }, {
                        image: 'images/spark.png',
                        actualWidth: 500,
                        actualHeight: 500,
                        name: 'Apache Spark'
                    }, {
                        image: 'images/phoenix.png',
                        actualWidth: 500,
                        actualHeight: 500,
                        name: 'Apache phoenix'
                    }, {
                        image: 'images/docker.png',
                        actualWidth: 500,
                        actualHeight: 500,
                        name: 'Docker'
                    }, {
                        image: 'images/mysql.png',
                        actualWidth: 320,
                        actualHeight: 166,
                        name: 'RDBMS'
                    }, {
                        image: 'images/materialize.png',
                        actualWidth: 600,
                        actualHeight: 600,
                        name: 'materialize'
                    }, {
                        image: 'images/bootstrap.png',
                        actualWidth: 500,
                        actualHeight: 300,
                        name: 'bootstrap'
                    }, {
                        image: 'images/rabbitmq.png',
                        actualWidth: 800,
                        actualHeight: 153,
                        name: 'rabbitmq'
                    }, {
                        image: 'images/angularjs.png',
                        actualWidth: 681,
                        actualHeight: 181,
                        name: 'angularjs'
                    }, {
                        image: 'images/nodejs.png',
                        actualWidth: 681,
                        actualHeight: 181,
                        name: 'nodejs'
                    }, {
                        image: 'images/titan.png',
                        actualWidth: 550,
                        actualHeight: 378,
                        name: 'titandb'
                    }, {
                        image: 'images/tinkerpop.png',
                        actualWidth: 550,
                        actualHeight: 378,
                        name: 'Tinkerpop'
                    }, {
                        image: 'images/neo4j.png',
                        actualWidth: 550,
                        actualHeight: 378,
                        name: 'Neo4j'
                    }, {
                        image: 'images/yeoman.png',
                        actualWidth: 600,
                        actualHeight: 600,
                        name: 'yeoman'
                    }, {
                        image: 'images/bower.png',
                        actualWidth: 600,
                        actualHeight: 600,
                        name: 'bower'
                    }, {
                        image: 'images/Linux.png',
                        actualWidth: 500,
                        actualHeight: 500,
                        name: 'Linux'
                    }, {
                        image: 'images/grunt.png',
                        actualWidth: 533,
                        actualHeight: 185,
                        name: 'grunt'
                    }, {
                        image: 'images/java.png',
                        actualWidth: 518,
                        actualHeight: 518,
                        name: 'java'
                    }, {
                        image: 'images/maven.png',
                        actualWidth: 500,
                        actualHeight: 144,
                        name: 'Maven'
                    }];
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
