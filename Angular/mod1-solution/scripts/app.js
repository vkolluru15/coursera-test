(function () {
'use strict';

angular.module('lunchMenu', [])
.controller('lunchMwnuController', lunchMwnuController)


lunchMwnuController.$inject = ['$scope'];

 function lunchMwnuController ($scope) {

  $scope.items = "";
  $scope.message = "";
  $scope.checkQuantity = function () {  	
  	if($scope.items == ""){  		
  		$scope.message = " please enter the data first";
  	}else{
  	var menuItems = $scope.items.trim().split(',');
  	if(menuItems.length <=3 && menuItems.length >= 1 ){
  		$scope.message = "Enjoy!";  		
  	}else{
  		$scope.message =  "Too much!";  		
  	}
  }
  	
    
  };
};

})();
