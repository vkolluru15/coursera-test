(function () {
'use strict';


var shoppingList = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
    {
    name: "Chips",
    quantity: "5"
  }
];

var shoppingList2 = [];


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService)


ToBuyController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = [ 'ShoppingListCheckOffService'];


function ToBuyController (ShoppingListCheckOffService) {
    var itemBuyer = this;
    console.log("working!");
    itemBuyer.items = ShoppingListCheckOffService.getItems();
    console.log(itemBuyer.items);
   itemBuyer.buyItem = function(index){
    ShoppingListCheckOffService.buyItem(index);
   };

   
 

};


function AlreadyBoughtController(ShoppingListCheckOffService){
 var boughtItem = this;
 boughtItem.items = ShoppingListCheckOffService.getBoughtItems();

};


function ShoppingListCheckOffService(){
  var service = this;
  var items = shoppingList;
  var boughtItems = shoppingList2;

  service.buyItem = function (index) {
    console.log("index passed is :" + index);
    var newItem = items[index];
    items.splice(index,1);
    boughtItems.push(newItem);
   // $scope.items = shoppingList;

};

service.getItems = function(){
  return items;
};

service.getBoughtItems = function(){
  return boughtItems;
};

}
 

 })();
