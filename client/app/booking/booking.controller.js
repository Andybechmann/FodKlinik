'use strict';

angular.module('feetClinicApp')
  .controller('BookingCtrl', function ($scope,TreatmentService,socket,TherapistService) {
    $scope.selectedTreatments =[];
    TreatmentService.query(function (treatments) {
      $scope.treatments = treatments;
      socket.syncUpdates('Treatment', $scope.treatments);
    });

    $scope.caboom = function(){
      var moment2 = moment($scope.treatmentDate);
      console.log(moment2.toString());
      var treatmentIds = _.pluck($scope.selectedTreatments,'_id');
      TherapistService.query({
        date:$scope.treatmentDate,
        treatments: JSON.stringify(treatmentIds)
      },function(therapist){
        console.log(therapist);
      }
    );
    };

    $scope.Check = function (item)
    {
      var idx = $scope.selectedTreatments.indexOf(item);
      if(idx > -1){ $scope.selectedTreatments.splice(idx,1);
    }
      else{ $scope.selectedTreatments.push(item);
      }
    };



    $scope.therapists = [
      {name:'ole', description:'description', available:[{date:moment(), time:['10:40','11:40']}, {date:moment().add(1, 'days'), time:['10:40','11:40']}]},
      {name:'bente', description:'description', available:[{date:moment(), time:['10:40','11:40']}, {date:moment().add(1, 'days'), time:['10:40','11:40']}]},
      {name:'søren', description:'description', available:[{date:moment(), time:['10:40','11:40']}, {date:moment().add(1, 'days'), time:['10:40','11:40']}]}
    ];

  });
