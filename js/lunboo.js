angular.module('lunbo',[])
    .controller('lb',['$scope','$interval',
        function($scope,$interval){
        $scope.index=0;
        $scope.arr=['img/picture1.png','img/picture2.png','img/picture3.png','img/comp.png','img/picture5.png'];
            function aaa(){
                 tim=$interval(function(){
                    $scope.index++;
                    if($scope.index==5){
                        $scope.index=0
                    }
                },2000);
            }
              aaa();
        $scope.cancel=function(){
            $interval.cancel(tim)
        };
            $scope.add=function() {
                aaa();
            };
            $scope.left=function(){
                if($scope.index==0){
                    $scope.index=5
            }
                $scope.index--;
            };
            $scope.right=function(){
                $scope.index++;
                if($scope.index==5){
                    $scope.index=0
                }
            };
           $scope.cli=function(){
               if($scope.index+1==1){
                   window.open('proce/index.html')
               }
              else if($scope.index+1==2){
                  window.open('picture.html')
              }
               else if($scope.index+1==3){
                   window.open('goBang.html')
               }
               else if($scope.index+1==4){
                   window.open('counter.html')
               }
               else if($scope.index+1==5){
                   window.open('proc/proj.html')
               }
           }
    }]);
