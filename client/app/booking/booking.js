'use strict';

angular.module('feetClinicApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('booking', {
        url: '/booking',
        templateUrl: 'app/booking/booking.html',
        controller: 'BookingCtrl'
      });
  });
