'use strict';

/**
 * @ngdoc overview
 * @name amApp
 * @description
 * # amApp
 *
 * Main module of the application.
 */
angular
  .module('amApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.materialize',
    'ui.router',
    'ngFlowGrid',
    'com.2fdevs.videogular',
	'com.2fdevs.videogular.plugins.controls',
	'com.2fdevs.videogular.plugins.overlayplay',
	'com.2fdevs.videogular.plugins.poster',
	'com.2fdevs.videogular.plugins.buffering'
  ]);

Materialize.toast('<div class="red-text text-darken-4 flow-text">Chúc mừng năm mới<div><div class="m-t red-text text-darken-3">An Khang - Thịnh Vượng</div>', 5000);