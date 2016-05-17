'use strict';

angular.module('feetClinicApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('event', {
        url: '/event',
        templateUrl: 'app/event/event.html',
        controller: 'EventCtrl'
      });
  });
