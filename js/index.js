var isAnnoy = 0;
var scroll = 0;
var bodyelem = document.getElementById("bodyelem");
var pelem = document.getElementById("pelem");
var h1elem = document.getElementById("h1elem");

function randInt(a, b) {
    return Math.floor((Math.random() * (b - a + 1)) + a);
}

function randomColor() {
    //#rrggbb

    var color = randInt(0, Math.pow(2, 24) - 1);
    var cinverse = Math.pow(2, 24) - 1 - color;

    return ["#" + color.toString(16), "#" + cinverse.toString(16)];
}


//this code block adapted from http://www.javascriptkit.com/dhtmltutors/parallaxscrolling/
/* code block begin */
//if(scroll = 1) {
//    var bodyelem = document.getElementById("bodyelem");
//    window.requestAnimationFrame = window.requestAnimationFrame
//     || window.mozRequestAnimationFrame
//     || window.webkitRequestAnimationFrame
//     || window.msRequestAnimationFrame
//     || function(f){setTimeout(f, 1000/60)}
//
//    function backgroundScroll(){
//     var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically 
//     //bubble1.style.top = -scrolltop * .2 + 'px' // move bubble1 at 20% of scroll rate
//     //bubble2.style.top = -scrolltop * .5 + 'px' // move bubble2 at 50% of scroll rate
//     var rColor = randomColor();
//     bodyelem.style.background = rColor[0];
//    }
//
//    window.addEventListener('scroll', function(){ // on page scroll
//     requestAnimationFrame(backgroundScroll) // call parallaxbubbles() on next available screen paint
//    }, false)
//}
/* code block end */


function annoy() {
    var bodyelem = document.getElementById("bodyelem");
    var pelem = document.getElementById("pelem");
    var h1elem = document.getElementById("h1elem");
    isAnnoy = (isAnnoy + 1)%5;
    switch (isAnnoy) {
        case 4:
            break;
        case 3:
            window.requestAnimationFrame = window.requestAnimationFrame
             || window.mozRequestAnimationFrame
             || window.webkitRequestAnimationFrame
             || window.msRequestAnimationFrame
             || function(f){setTimeout(f, 1000/60)}

            function fontScroll(){
             var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically 
             var rColor = randomColor();
             pelem.style.color = rColor[0];
             rColor = randomColor();
             h1elem.style.color = rColor[1];
            }
            
            window.addEventListener('scroll', function(){ // on page scroll
             requestAnimationFrame(fontScroll) // call parallaxbubbles() on next available screen paint
            }, false)
            break;
        case 2:
            h1elem.style.fontFamily = "\"Comic Sans MS\", cursive, sans-serif";
            window.requestAnimationFrame = window.requestAnimationFrame
             || window.mozRequestAnimationFrame
             || window.webkitRequestAnimationFrame
             || window.msRequestAnimationFrame
             || function(f){setTimeout(f, 1000/60)}

            function backgroundScroll(){
             var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically 
             var rColor = randomColor();
             bodyelem.style.background = rColor[0];
            }

            window.addEventListener('scroll', function(){ // on page scroll
             requestAnimationFrame(backgroundScroll) // call parallaxbubbles() on next available screen paint
            }, false)
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
            pelem.style.color = "rgb(56,56,56)";
            pelem.style.fontFamily = "Gotham, Helvetica, Arial, sans-serif";
            break;
    }
}