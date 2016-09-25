var health = 100;
var hatchet = 1;
var axe = 4;
var saw = 12;
var chainsaw = 25;
var weaponInUse = '';

var showChainsaw = function() {
    var chainsawButton = document.getElementById('chainsaw');
    var list = chainsawButton.className.split(' ');
    list.splice(list.indexOf('hidden'), 1);
    chainsawButton.className = list.join(' ');
}

function Feller() {
    self.fatigue = 0;
}

var useHatchet = function() {
    weaponInUse = 'Hatchet';
    health -= hatchet;
    update();
    return health;
}
var useAxe = function() {
    weaponInUse = 'Axe';
    health -= axe;
    update();
    return health;
}
var useSaw = function() {
    weaponInUse = 'Saw';
    health -= saw;
    update();
    return health;
}
var useChainsaw = function() {
    weaponInUse = 'Chainsaw';
    health -= chainsaw;
    update();
    return health
}
var attack = function() {

}

var reset = function() {
    debugger;
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
    var healthBar = document.getElementById('progress-bar');
    healthBar.setAttribute("style", "height: " + health + "%");
}

