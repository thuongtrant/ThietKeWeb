function showShape(shapeID) {
    var shapes = document.querySelectorAll("div.shapes > div");
    for (var i = 0; i < shapes.length; i++)
        shapes[i].style.display = "none";

    var s = document.getElementById(shapeID);
    s.style.display = "block";
}
function themMau() {
    var color = document.getElementById("newColorID").value;
    var html = '<input type="button" style="background-color:' + color + '" onclick="toMau(this)" />';

    var divColor = document.getElementById("colorID");
    divColor.innerHTML += html;
}
function toMau(obj) {
    var c = obj.style.backgroundColor;
    var shapes = document.querySelectorAll(".shapes > div > svg > :first-child");
    for (var i = 0; i < shapes.length; i++)
        shapes[i].style.fill = c;

    var s = document.getElementById(shapeID);
}