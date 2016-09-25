var weapons = [
    {name: 'hatchet', damage: 1, fatigue: 1},
    {name: 'axe', damage: 4, fatigue: 3},
    {name: 'saw', damage: 12, fatigue: 7},
    {name: 'chainsaw', damage: 25, fatigue: 2}
]
var health = 100;
var hitCount = 0;
var adjustedHitCount = 0;
var weaponSelector;
var weaponInUse = document.getElementById('weapon-in-use');
var attrition = function(count) {
    if(count > 50) {
        return 0.4;
    }else if(count > 40) {
        return 0.5;
    }else if(count > 30) {
        return 0.65;
    }else if(count > 20) {
        return 0.8;
    }else{
        return 1;
    }
}

var showChainsaw = function() {
    var chainsawButton = document.getElementById('chainsaw');
    var list = chainsawButton.className.split(' ');
    list.splice(list.indexOf('hidden'), 1);
    chainsawButton.className = list.join(' ');
}

function Feller() {
    self.fatigue = 0;
}

var attack = function() {
    hitCount++;
    health -= (weapons[weaponSelector].damage * attrition(hitCount));
    update();
    adjustedHitCount += weapons[weaponSelector].fatigue;
    return health;
}

var useHatchet = function() {
    weaponInUse.innerText = 'Use Hatchet';
    weaponSelector = 0;
}
var useAxe = function() {
    weaponInUse.innerText = 'Use Axe';
    weaponSelector = 1;
}
var useSaw = function() {
    weaponInUse.innerText = 'Use Saw';
    weaponSelector = 2;
}
var useChainsaw = function() {
    weaponInUse.innerText = 'Use Chainsaw';
    weaponSelector = 3;
}

var reset = function() {
    health = 100;
    hitCount = 0;
    adjustedHitCount *= 0.25;
    update();
    weaponInUse.innerText = ''
    document.getElementById('dead-tree').className = 'hidden';
    document.getElementById('live-tree').className = '';
    if (document.getElementById('chainsaw').className.indexOf('hidden') > -1) {
        showChainsaw();
    }
    return health;
}

function update() {
    if (health <= 0) {
        health = 0;
        document.getElementById('live-tree').className = 'hidden';
        document.getElementById('dead-tree').className = '';
    }
    var healthBar = document.getElementById('progress-bar');
    healthBar.setAttribute("style", "height: " + health + "%");
}

