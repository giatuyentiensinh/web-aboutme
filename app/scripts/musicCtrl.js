'use strict';
angular.module('amApp')
    .controller('musicCtrl', ['$sce', '$scope', function($sce, $scope) {
        $scope.API = null;
        $scope.active = 0;

        $scope.audios = [{
            title: 'Make You Feel My Love',
            artist: 'Adele',
            poster: 'zing mp3',
            sources: [
                { src: $sce.trustAsResourceUrl('/font/MakeYouFeelMyLove.mp3'), type: 'audio/mpeg' }
            ]
        }, {
            title: 'Con Mua Ngang Qua Acoustic',
            artist: 'Hoa Minzy ft Duy Tung ft Tyt Nguyen',
            poster: 'zing mp3',
            sources: [
                { src: $sce.trustAsResourceUrl('/font/ConMuaNgangQua.mp3'), type: 'audio/mpeg' }
            ]
        }, {
            title: 'One Call Away',
            artist: 'Charlie Puth',
            poster: 'zing mp3',
            sources: [
                { src: $sce.trustAsResourceUrl('/font/OneCallAway.mp3'), type: 'audio/mpeg' }
            ]
        }, {
            title: 'Song Pitch Perfect 2',
            artist: 'Pitch Perfect2',
            poster: 'youtube',
            sources: [
                { src: $sce.trustAsResourceUrl('/font/PitchPerfect2.mp3'), type: 'audio/mpeg' }
            ]
        }];

        $scope.config = {
            sources: $scope.audios[0].sources,
            title: $scope.audios[0].title,
            repeat: false,
            shuffle: true,
            autoPlay: true,
            theme: {
                url: 'bower_components/videogular-themes-default/videogular.css'
            }
        };

        Materialize.toast($scope.audios[0].title + '<br/> Ca sĩ: ' + $scope.audios[0].artist, 7000);

        $scope.onPlayerReady = function(API) {
            $scope.API = API;
            if ($scope.API.currentState == 'play' || $scope.isCompleted) $scope.API.play();
            $scope.isCompleted = false;
        };

        $scope.onComplete = function() {
            $scope.isCompleted = true;
            // shuffle
            if ($scope.config.shuffle) {
                $scope.active = $scope.getRandom($scope.active);
                // next item
            } else {
                $scope.active++;
            }


            // last item
            if ($scope.active >= $scope.audios.length) {
                $scope.active = 0;
                // repeat
                if ($scope.config.repeat) {
                    $scope.setActive($scope.active);
                }
            } else {
                $scope.setActive($scope.active);
            }
        };

        $scope.getRandom = function(index) {
            var i = Math.floor(Math.random() * $scope.audios.length);
            if (!(i - index)) {
                i = $scope.getRandom(index);
            }
            Materialize.toast($scope.audios[i].title + '<br/> Ca sĩ: ' + $scope.audios[i].artist, 7000);
            return i;
        }

        $scope.play = function(index) {
            $scope.isCompleted = true;
            // get prev or next item
            index == 'next' ? $scope.active++ : $scope.active--;
            if ($scope.active >= $scope.audios.length) $scope.active = 0;
            if ($scope.active == -1) $scope.active = $scope.audios.length - 1;
            // play it
            Materialize.toast($scope.audios[$scope.active].title + '<br/> Ca sĩ: ' + $scope.audios[$scope.active].artist, 7000);

            $scope.setActive($scope.active);
        };

        $scope.setActive = function(index) {
            $scope.API.stop();
            $scope.config.sources = $scope.audios[index].sources;
            $scope.config.title = $scope.audios[index].title;
        };

        $scope.toggleRepeat = function() {
            $scope.config.repeat = !$scope.config.repeat;
            if ($scope.isCompleted) $scope.API.play();
        };

        $scope.toggleShuffle = function() {
            $scope.config.shuffle = !$scope.config.shuffle;
            console.log($scope.API.currentState);
            if ($scope.isCompleted) $scope.API.play();
        };
    }]);
