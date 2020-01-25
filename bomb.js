let wires = {
blue: {
    cut: false,
    needsCut: false,
    cutImg: "img/cut-blue-wire.png",
    uncutImg: 'img/uncut-blue-wire.png'
},
green: {
    cut: false,
    needsCut: false,
    cutImg: "img/cut-green-wire.png",
    uncutImg: 'img/uncut-green-wire.png'
},
red: {
    cut: false,
    needsCut: false,
    cutImg: "img/cut-red-wire.png",
    uncutImg: 'img/uncut-red-wire.png'
},
white: {
    cut: false,
    needsCut: false,
    cutImg: "img/cut-white-wire.png",
    uncutImg: 'img/uncut-white-wire.png'
},
yellow: {
    cut: false,
    needsCut: false,
    cutImg: "img/cut-yellow-wire.png",
    uncutImg: 'img/uncut-yellow-wire.png'
    }
};


const STARTING_TIME = 30;
let remainingTime = STARTING_TIME;
let wiresToCut = [];

// functions
let gameInit = function(){
    let domeWires = document.querySelectorAll('img');
    let domResetBtn = document.querySelector('.reset');
    let domTimer = document.querySelector('.countdown');
    
    wiresToCut = [];
    remainingTime = STARTING_TIME;
    for (let i = 0; i < 5; i++) {
        domWires[i].src = `img/uncut-${domWires[i]}.id`
    }
    domResetBtn.disabled = true;
    document.querySelector("body").classList.remove("flat-city");
    document.querySelector("body").classList.add("happy-city");
    for (let wire in wires) {
        let rand = Math.random();
        if (rand > 0.5) {
            wiresToCut.push(wire)
        }
    }

    // set wires to be cut (includes pusing to wiresToCut)
    // start countdown
    // play siren
}
console.log(wiresToCut);

let resetGame = function(){
    // reset wire imgs
    // set wiresToCut = []
    // disable button
    // reset background
    // reset timer
    // gameInit
}

let wireClickHandler = function(e) {
    if (!wires[e.target.id].cut) {
        console.log(e.target.id)
        wires[e.target.id].cut = true;
    //change img
    e.target.src = wires[e.target.id].cutImg;
    let wireIndex = wiresToCut.indexOf(e.target.id);
    if (wiresIndex > -1) {
        console.log("good so far")
        wiresToCut.splice(wireIndex, 1);
    }

    checkWin();
    } else {
        console.log('KABOOM')
    }
};

let checkWin = function(){
    console.log('checking for win')
    // iterate over wires
    // check if needsCut is false and cut is true
}


document.addEventListener("DOMContentLoaded", function() {
    // DOM references

// gameInit();
document.querySelector('.wires').addEventListener('click', wireClickHandler);
let domTimer = document.querySelector(".coundown");
let domResetBtn = document.querySelector(".reset");
let domWires = document.querySelectorAll("img");

})


