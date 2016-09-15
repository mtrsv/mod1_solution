(function () {
'use strict';

angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);
    LunchCheckController.$inject = ["$scope", "$filter"];

    function LunchCheckController($scope, $filter) {

        $scope.updateLunchSize = function(){
            $scope.lunchLenght = getLunchArrayLenght($scope.lunchString);
            checkState();
        }

        function getLunchArrayLenght(text){
            if (!text) text = "";
            var resultArr = text.split(",");

            for (var i=0; i < resultArr.length; i++) {
              var noSpace = resultArr[i].replace(/\s+/g, '');
              if (noSpace === "") {
                  resultArr.splice(i,1);
                  i--;
              }
            }

            return resultArr.length;
        }
        function checkState(){
            var message = "",
                color ="green";
            if ($scope.lunchLenght > 3){
                message = "Too much!";
            }
            if ($scope.lunchLenght <= 3){
                message = "Enjoy!";
            }
            if ($scope.lunchLenght === 0){
                message = "Please enter data first";
                color = "red";
            }
            showMessage(message,color);
        }
        function showMessage(message, color){
            $scope.message = message;
            $scope.inputStyle = "border-color:" + color + ";";
            $scope.messageStyle = "color: " + color + ";";
        }
    }

})();

/*
Please enter data first
Enjoy!
    Too much!
    */
