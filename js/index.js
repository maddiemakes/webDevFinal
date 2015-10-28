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
            var rColor = randomColor();
            bodyelem.style.background = rColor[0];
            pelem.style.color = rColor[1];
            bodyelem.style.fontFamily = "\"Comic Sans MS\", cursive, sans-serif";
            pelem.style.fontFamily = "\"Comic Sans MS\", cursive, sans-serif";
            break;
        case 3:
        case 2:
        case 1:
            break;
        case 0:
            bodyelem.style.background = "white";
            h1elem.style.fontFamily = "Caecilia, Times, serif";
            pelem.style.color = "rgb(56,56,56)";
            pelem.style.fontFamily = "Gotham, Helvetica, Arial, sans-serif";
            break;
    }
}