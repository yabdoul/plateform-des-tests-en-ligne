var app = angular.module("myapp", ['ngSanitize']);
app.controller('Mycontroller', ['$scope', function($scope) {

   $scope.myFunc = function() {
   $scope.text="<app-choix></app-choix>" ; 
   console.log($scope.text) ; 
   console.log('clicked'); 
   };
$scope.delete = (el)=>{
el.remove()  ; 
}

}]);
var getval = (val)=> { 
   return  val; 
}
var add = (ele)=>{
   document.querySelector('.radio').innerHTML+=" <div class='radio-choice'>"+
   "<input type='radio'><label'>"+ele.parentNode.previousSibling.value+"</label></div>"; 
   ele.parentNode.parentNode.remove() ;
}