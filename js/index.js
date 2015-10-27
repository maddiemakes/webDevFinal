var isAnnoy = false;


function randInt(a, b) {
    return Math.floor((Math.random() * (b - a + 1)) + a);
}

function randomColor() {
    //#rrggbb

    var color = randInt(0, Math.pow(2, 24) - 1);
    var cinverse = Math.pow(2, 24) - 1 - color;

    return ["#" + color.toString(16), "#" + cinverse.toString(16)];
}

function setAnnoy() {
    var bodyelem = document.getElementById("bodyelem");
    var pelem = document.getElementById("pelem");
    if (isAnnoy) {
        var rColor = randomColor();
        bodyelem.style.background = rColor[0];
        pelem.style.color = "blue";
    } else {
        bodyelem.style.background = "white";
        pelem.style.color = "black";
        // body.innerHTML="<input type='button' onclick='annoy=not(annoy);setAnnoy();'/>........."
    }
}

function annoy() {
    if (isAnnoy) {
        isAnnoy = false;
    } else {
        isAnnoy = true;
    }
    setAnnoy();
}