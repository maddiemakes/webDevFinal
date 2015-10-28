var isAnnoy = 0;

function randInt(a, b) {
    return Math.floor((Math.random() * (b - a + 1)) + a);
}

function randomColor() {
    //#rrggbb

    var color = randInt(0, Math.pow(2, 24) - 1);
    var cinverse = Math.pow(2, 24) - 1 - color;

    return ["#" + color.toString(16), "#" + cinverse.toString(16)];
}



function annoy() {
    var bodyelem = document.getElementById("bodyelem");
    var pelem = document.getElementById("pelem");
    var h1elem = document.getElementById("h1elem");
    
    isAnnoy = (isAnnoy + 1)%5;
    
    switch (isAnnoy) {
        case 4:
            break;
        case 3:
            break;
        case 2:
            h1elem.style.fontFamily = "\"Comic Sans MS\", cursive, sans-serif";
            break;
        case 1:
            var rColor = randomColor();
            bodyelem.style.background = rColor[0];
            pelem.style.color = rColor[1];
            pelem.style.fontFamily = "\"Comic Sans MS\", cursive, sans-serif";
            break;
        case 0:
            bodyelem.style.background = "white";
            h1elem.style.fontFamily = "Caecilia, Times, serif";
            h1elem.style.color = "#1aba52";
            pelem.style.color = "rgb(56,56,56)";
            pelem.style.fontFamily = "Gotham, Helvetica, Arial, sans-serif";
            break;
    }
    
//this code block adapted from http://www.javascriptkit.com/dhtmltutors/parallaxscrolling/
/* code block begin */
    window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(f){setTimeout(f, 1000/60)};

    function fontScroll(){
        var rColor = randomColor();
        pelem.style.color = rColor[0];
        rColor = randomColor();
        h1elem.style.color = rColor[1];
    }
    
    function backgroundScroll(){
        var rColor = randomColor();
        bodyelem.style.background = rColor[0];
    }
    
    window.addEventListener('scroll', function(){ // on page scroll
        if ((isAnnoy %5) >= 3) { 
            /*global requestAnimationFrame*/ requestAnimationFrame(fontScroll); 
        }
         if ((isAnnoy %5) >= 2) { 
             requestAnimationFrame(backgroundScroll); 
         }
    }, false);
/* code block end */

    document.getElementById("annoyButton").value = "Annoyance level: " + isAnnoy;
}