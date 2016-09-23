var health = 100;
var hatchet = 1;
var axe = 4;
var saw = 12;
var chainsaw = 25;

var showChainsaw = function() {
    var chainsawButton = document.getElementById('chainsaw');
    var list = chainsawButton.className.split(' ');
    list.splice(list.indexOf('hidden'), 1);
    chainsawButton.className = list.join(' ');
}

function Feller() {

}

function useHatchet() {
    health -= hatchet;
    update();
    return health;
}
function useAxe() {
    health -= axe;
    update();
    return health;
}
function useSaw() {
    health -= saw;
    update();
    return health;
}
function useChainsaw() {
    health -= chainsaw;
    update();
    return health
}
function reset() {
    health = 100;
    update();
    if (document.getElementById('chainsaw').className.indexOf('hidden') > -1) {
        showChainsaw();
    }
    return health;
}

function update() {
    if (health <= 0) {
        health = 0;
    }
    // var healthElem = document.getElementById('health');
    // healthElem.innerHTML = health;
}

