'use strict';

var numberNotSorted = [7,2,1,5,6,34,1,3,7,3,2,1,5,7];
var numbersCount =numberNotSorted.length;

function sort(nn){
    var numbersCount = nn.length;
    var tVar = undefined;
    for(var i = 0; i < numbersCount;i++){
        var tMax = nn[i];
        var tMaxI  = i;
        for(var j = i+1; j < numbersCount; j++){
            if(nn[j]>tMax){
                tMax =  nn[j];
                tMaxI = j
            }
        }
        tVar = nn[i];
        nn[i] = tMax;
        nn[tMaxI] = tVar;
    }



    alert(nn);
    return nn;
}
function sume(nn) {
    var numberResult=0;
    for (var i=0; i < numbersCount;i++){
        numberResult+=nn[i];
    }
    alert( numberResult)
}
function max(nn) {
   var numberMax=0
   for (var i=0; i < numbersCount;i++) {
         if  (numberMax<nn[i]){
           numberMax=nn[i]
         }
    }

alert (numberMax)
    var n =numberNotSorted.length-1;
    var a
    for ( a = 0;a<n;a++)
 {}

    }





