var leftTab = document.getElementById('left-tab'),
    rightTab = document.getElementById('right-tab');

function showLeft() {
    leftTab.style.display = "block";
    leftTab.setAttribute("class", "rotateInUpLeft self-animated");
}

function goneLeft() {
    leftTab.setAttribute("class", "rotateOutDownLeft self-animated");
}

function showRight() {
    rightTab.style.display = "block";
    rightTab.setAttribute("class", "rotateInUpRight self-animated");
}

function goneRight() {
    rightTab.setAttribute("class", "rotateOutDownRight self-animated");
}