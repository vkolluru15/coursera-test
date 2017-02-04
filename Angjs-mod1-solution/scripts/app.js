(function () {
'use strict';

angular.module('lunchMenu', [])
.controller('lunchMwnuController', lunchMwnuController)


lunchMwnuController.$inject = ['$scope'];

 function lunchMwnuController ($scope) {

  $scope.items = "";
  $scope.message = "";
  $scope.messageStyle = "";
  $scope.checkQuantity = function () {  	
  	if($scope.items == ""){  		
  		$scope.message = "Please enter the data first";
      $scope.messageStyle = "Error";
  	}else{
  	var menuItems = $scope.items.trim().split(',');
  	if(menuItems.length <=3 && menuItems.length >= 1 ){
  		$scope.message = "Enjoy!";  
      $scope.messageStyle = "Good";		
  	}else{
  		$scope.message =  "Too much!";  
      $scope.messageStyle = "Good";   		
  	}
  }
  	
    
  };
};

})();
