'use strict';
angular.module('amApp')
	.controller('musicCtrl', ['$sce', '$scope', function($sce, $scope){
		$scope.API = null;
    	$scope.active = 0;

	    $scope.audios = [
	      {
	        title: "Happy new years",
	        artist: 'ABBA',
	        poster: 'Nhac cua tui',
	        sources: [
	          {src: $sce.trustAsResourceUrl("http://aredir.nixcdn.com/f24a90e002ef1ffc8fabc1b8c127a47b/56b2a4c3/Unv_Audio5/HappyNewYear-ABBA_3rkqc.mp3"), type: "audio/mpeg"}
	        ]
	      },
	      {
	        title: "Auld Lang Syne",
	        artist: 'Mariah Carey',
	        poster: 'Nhac cua tui',
	        sources: [
	          {src: $sce.trustAsResourceUrl("http://aredir.nixcdn.com/cba5d57653ed6c508cf8b50228e5ea5e/56b2a4c3/NhacCuaTui228/AuldLangSyne-MariahCarey_3mk5c.mp3"), type: "audio/mpeg"}
	        ]
	      },
	      {
	        title: "Ngày Xuân Long Phụng Sum Vầy",
	        artist: 'Từ Minh Hy, Khởi My, Minh Qui, Dương Thái Long',
	        poster: 'Nhac cua tui',
	        sources: [
	          {src: $sce.trustAsResourceUrl("http://aredir.nixcdn.com/761fb1d0ff06d422180af56d3859f59e/56b2abca/NhacCuaTui799/NgayXuanLongPhungXumVay-TuMinhHy-_4gk62.mp3"), type: "audio/mpeg"}
	        ]
	      },
	      {
	        title: "Con Bướm Xuân",
	        artist: 'Hồ Quang Hiếu',
	        poster: 'Nhac cua tui',
	        sources: [
	          {src: $sce.trustAsResourceUrl("http://aredir.nixcdn.com/77e51772ee5a67245f5653663ce67c3a/56b2abca/NhacCuaTui882/ConBuomXuan-HoQuangHieu-2577880.mp3"), type: "audio/mpeg"}
	        ]
	      },
	      {
	        title: "Thương Quá Việt Nam Ơi",
	        artist: 'Quang Linh',
	        poster: 'zing mp3',
	        sources: [
	          {src: $sce.trustAsResourceUrl("http://mp3.zing.vn/xml/load-song/ZSUyRjYyJTJGZTYyNWUzNGMzMTUwMWIxYjg2MmEyYTE3NGVkYTFmZTUubXAzJTdDMQ=="), type: "audio/mpeg"}
	        ]
	      },
	      {
	        title: "Chúc vợ ngủ ngon",
	        artist: 'Vũ Duy Khánh',
	        poster: 'zing mp3',
	        sources: [
	          {src: $sce.trustAsResourceUrl("http://mp3.zing.vn/xml/load-song/MjAxNSUyRjEyJTJGMzElMkZlJTJGMSUyRmUxNTcxNTAwOTg4NDg5MzllYTE2ZmZhYzFjMGJjYTQxLm1wMyU3QzEz"), type: "audio/mpeg"}
	        ]
	      }
	      // {
	      //   title: "Make You Feel My Love.mp3",
	      //   artist: 'N/A',
	      //   poster: null,
	      //   sources: [
	      //     {src: $sce.trustAsResourceUrl("http://aredir.nixcdn.com/9e84dc91f6fe6531c4950ae7ca1598d4/56b25e78/NhacCuaTui103/MakeYouFeelMyLove-Adele_pesg.mp3"), type: "audio/mpeg"}
	      //   ]
	      // },
	      // {
	      //   title: "Con Mua Ngang Qua Acoustic.mp3",
	      //   artist: "Hoa Minzy ft Duy Tung ft Tyt Nguyen",
	      //   poster: null,
	      //   sources: [
	      //     {src: $sce.trustAsResourceUrl("http://aredir.nixcdn.com/ccce05842d4894f70f485d6f92fd129b/56b25e78/NhacCuaTui845/ConMuaNgangQuaAcoustic-HoaMinzyTungAcoustic-2862764.mp3"), type: "audio/mpeg"}
	      //   ]
	      // },
	      // {
	      //   title: "Cheerleader.mp3",
	      //   artist: 'Pentatonix (OMI Cover)',
	      //   poster: null,
	      //   sources: [
	      //     {src: $sce.trustAsResourceUrl("http://aredir.nixcdn.com/e425238793af6b75d4774efcfd96696e/56b25e78/NhacCuaTui904/Cheerleader-Pentatonix-4084660.mp3"), type: "audio/mpeg"}
	      //   ]
	      // }
	      
	    ];

	    $scope.config = {
	      sources: $scope.audios[0].sources,
	      title: $scope.audios[0].title,
	      repeat: false,
	      shuffle: true,
	      autoPlay: true,
	      theme: {
	        url: "bower_components/videogular-themes-default/videogular.css"
	      }
	    };

	    $scope.onPlayerReady = function(API) {
	      $scope.API = API;
	      if ($scope.API.currentState == 'play' || $scope.isCompleted) $scope.API.play();
	      $scope.isCompleted = false;
	    };

	    $scope.onComplete = function() {
	      $scope.isCompleted = true;
	      // shuffle
	      if($scope.config.shuffle){
	        $scope.active = $scope.getRandom($scope.active);
	      // next item
	      }else{
	        $scope.active++;
	      }
	      
	      // last item
	      if ($scope.active >= $scope.audios.length) {
	        $scope.active = 0;
	        // repeat
	        if($scope.config.repeat){
	          $scope.setActive($scope.active);
	        }
	      }else{
	        $scope.setActive($scope.active);
	      }
	    };

	    $scope.getRandom = function(index){
	      var i = Math.floor( Math.random() * $scope.audios.length );
	      if ( !(i-index) ){
	        i = $scope.getRandom( index );
	      }
	      return i;
	    }

	    $scope.play = function(index){
	      $scope.isCompleted = true;
	      // get prev or next item
	      index == "next" ? $scope.active++ : $scope.active--;
	      if ($scope.active >= $scope.audios.length) $scope.active = 0;
	      if ($scope.active == -1) $scope.active = $scope.audios.length - 1;
	      // play it
	      $scope.setActive($scope.active);
	    };

	    $scope.setActive = function(index){
	      $scope.API.stop();
	      $scope.config.sources = $scope.audios[index].sources;
	      $scope.config.title = $scope.audios[index].title;
	    };

	    $scope.toggleRepeat = function(){
	      $scope.config.repeat = !$scope.config.repeat;
	      if ($scope.isCompleted) $scope.API.play();
	    };

	    $scope.toggleShuffle = function(){
	      $scope.config.shuffle = !$scope.config.shuffle;
	      console.log($scope.API.currentState);
	      if ($scope.isCompleted) $scope.API.play();
	    };
	}]);