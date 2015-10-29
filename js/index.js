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
    var pelem1 = document.getElementById("pelem1");
    var h1elem = document.getElementById("h1elem");
    var pelem2 = document.getElementById("pelem2");
    var h2elem = document.getElementById("h2elem");
    
    isAnnoy = (isAnnoy + 1)%5;
    
    switch (isAnnoy) {
        case 4:
            h1elem.innerHTML = "<embed src=\"http://www.sheepproductions.com/billy/billy.swf?autoplay=true&f0=/john.mp3&t0=jOHn c3NA&total=1\" quality=\"high\" wmode=\"transparent\" width=\"200\" height=\"10\" name=\"billy\" align=\"middle\" type=\"application/x-shockwave-flash\" /> H&#x1f3ba;W tO   J&#x1f3ba;hN CENA &#x1f3ba;";
            break;
        case 3:
            break;
        case 2:
            h1elem.style.fontFamily = "\"Comic Sans MS\", cursive, sans-serif";
            break;
        case 1:
            var rColor = randomColor();
            bodyelem.style.background = rColor[0];
            pelem1.style.color = rColor[1];
            pelem1.style.fontFamily = "\"Comic Sans MS\", cursive, sans-serif";
            break;
        case 0:
            h1elem.innerHTML = "How to Make a Good Website";
            h1elem2.innerHTML = "";
            bodyelem.style.background = "white";
            h1elem.style.fontFamily = "Caecilia, Times, serif";
            h1elem.style.color = "#1aba52";
            pelem1.style.color = "rgb(56,56,56)";
            pelem1.style.fontFamily = "Gotham, Helvetica, Arial, sans-serif";
            break;
    }
    
//this code block adapted from http://www.javascriptkit.com/dhtmltutors/parallaxscrolling/
/* code block begin */
    window.requestAnimationFrame = window.requestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || window.msRequestAnimationFrame
    || function(f){setTimeout(f, 1000/60)};

    function fontScroll() {
        var rColor = randomColor();
        pelem1.style.color = rColor[0];
        rColor = randomColor();
        h1elem.style.color = rColor[1];
    }
    
    function backgroundScroll() {
        var rColor = randomColor();
        bodyelem.style.background = rColor[0];
    }
    
    function fontSizeScroll() {
        var scrolltop = window.pageYOffset; // get number of pixels document has scrolled vertically 
        pelem1.style.fontSize = -scrolltop % 2 + 14 + 'px'; // move bubble2 at 50% of scroll rate
        
    }
    
    window.addEventListener('scroll', function(){ // on page scroll
        if ((isAnnoy %5) >= 3) { 
            /*global requestAnimationFrame*/ requestAnimationFrame(fontScroll); 
        }
         if ((isAnnoy %5) >= 2) { 
             requestAnimationFrame(backgroundScroll); 
         }
        if ((isAnnoy %5) >= 4) {
            requestAnimationFrame(fontSizeScroll);
        }
    }, false);
/* code block end */

    document.getElementById("annoyButton").value = "Annoyance level: " + isAnnoy;
}