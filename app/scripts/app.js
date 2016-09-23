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
    'ngAnimate',,
    'ngSanitize',
    'ui.materialize',
    'ui.router',
    'ngFlowGrid',
    'pascalprecht.translate'
  ]);

// Materialize.toast('<div class="red-text text-darken-4 flow-text">Chúc mừng năm mới<div><div class="m-t red-text text-darken-3">An Khang - Thịnh Vượng</div>', 5000);