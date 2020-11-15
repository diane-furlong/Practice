document.getElementById("button").onMouseover = function() {mouseOver()};
document.getElementById("button").onMouseout = function() {mouseOut()}

function mouseOver() {
    document.getElementById("button").textContent = "Gouda!";
}

function mouseOut() {
    document.getElementById("button").textContent = "Go!";
}