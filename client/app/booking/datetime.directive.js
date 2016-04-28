'use strict';

angular.module('feetClinicApp').directive('timezonedDate', function () {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function (scope, elem, attrs, ngModel) {
                var toView = function (val) {
                    var offset = moment(val).utcOffset();
                    var date = new Date(moment(val).subtract(offset, 'm'));
                    var newOffset = moment.tz.zone(attrs.timezone).offset(date);
                    return new Date(moment(date).subtract(newOffset, 'm').unix() * 1000);
                };

                var toModel = function (val) {
                    var offset = moment(val).utcOffset();
                    var date = new Date(moment(val).add(offset, 'm'));
                    var newOffset = moment.tz.zone(attrs.timezone).offset(date);
                    return moment(date).add(newOffset, 'm').unix() * 1000;
                };

                ngModel.$formatters.unshift(toView);
                ngModel.$parsers.unshift(toModel);
            }
        };

    });
