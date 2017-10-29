'use strict';
var colorsList = ["blue","green","purple","red","yellow","magenta","cyan"];
var colorsCount = colorsList.length;
var currentColorIndex = 2;
function changeColor(element, property, down) {
    var increment,cycleBorder,cycleTo;
    if(down){
        increment = -1;
        cycleBorder = -1;
        cycleTo = colorsCount -1;
    } else {
        increment  = 1;
        cycleBorder = colorsCount;
        cycleTo = 0;
    }
    currentColorIndex += increment;
    if (currentColorIndex === cycleBorder){currentColorIndex = cycleTo}
    var currentColor = colorsList[currentColorIndex];
    element.style[property] = currentColor;
};

function createMultipleButtons() {
    var e = document.getElementById("newButtonsHere");
    var h = "";
    /*_.each(
        colorsList,
        function(color){
            h+= "<button style='background-color: "+color+"'>Hello</button>";
        }
    );
     */
    for(var r =1;r<4;r++) {

        for (var i = colorsCount - 1; i >= 0; i--) {
            h += "<button style='background-color: " + colorsList[i] + "'>Hello</button>";
        };
        for ( i = 0;i < colorsCount;i++) {
            h += "<button style='background-color: " + colorsList[i] + "'>Hello</button>";}


    }
    e.innerHTML = h;
}


var buttons = [document.getElementById("theButton"), document.getElementById("secondButton")];
_.each(buttons, function(e){jumpStep(e,10)});

function jumpStep(button,startPositionTop,startPositionLeft, stepTop,stepLeft, timeInterval, timeStep){
    var newPositionTop = startPositionTop + stepTop;
    var newPositionLeft = startPositionLeft +stepLeft;
    var htmlElementOfTheButton = button;
    var newtimeInterval = timeInterval+timeStep;
    htmlElementOfTheButton.style.top = newPositionTop+"px" ;
    htmlElementOfTheButton.style.left =  newPositionLeft+"px";
    var hitTopOrBottomSide =newPositionTop<0 || newPositionTop>=1000;
    var hitRightOrLeftSide = newPositionLeft<0||newPositionLeft>=1000 ;
    if (hitTopOrBottomSide){
        stepTop = -stepTop
    }
    if(hitRightOrLeftSide){
        stepLeft=-stepLeft
    }
    if (hitTopOrBottomSide){
        newtimeInterval=50
    }
    if (hitRightOrLeftSide){
        newtimeInterval=50
    }

    //if (newPositionTop>0 && newPositionLeft<95 && newPositionLeft>0 && newPositionTop<95){
        setTimeout(
            function () {
                jumpStep(button, newPositionTop, newPositionLeft, stepTop, stepLeft, newtimeInterval, timeStep);
            },
            timeInterval);




    return undefined;
}

function jump(button,secondButton/*thirdButton*/){
    button.onclick=undefined;
    jumpStep(button, 500,500,-1,-1,10,0);
   var secondButton = document.getElementById(secondButton);
    secondButton.onclick=undefined;

   jumpStep(secondButton,50,50,-1,-1,700,0.8);
    /*var thirdButton = document.getElementById(thirdButton);
  thirdButton.onclick=undefined;
  jumpStep(thirdButton, 50, 50,5, -5, 400, 0.9);*/



}