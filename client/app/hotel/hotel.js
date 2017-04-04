 angular.module('myapp.Expedia',[])

 .controller('ExpediaContr',function ($scope , Expedia){

  $scope.all = [];
  $scope.countrys = [];

  $scope.getAllhotel = function(){
    Expedia.getAll()
    .then(function (data) {

     for (var i = 0; i < data.length; i++) {
      data[i].hotelUrls.hotelInfositeUrl=decodeURIComponent(data[i].hotelUrls.hotelInfositeUrl)
      if($scope.countrys.indexOf(data[i].destination.country)===-1){
        $scope.countrys.push(data[i].destination.country)
      }
    }
    $scope.all = data;
  })
    .catch(function (error) {
      console.log(error);
    });
  }

});