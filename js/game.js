let canvas;
let world;
let keyboard = new Keyboard();
gameOver = false;
muteSounds = false;

function init() {
}


function startGame() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log('My Character is', world.character);
    document.getElementById('win').classList.add('d-none');
    document.getElementById('gameOver').classList.add('d-none');
    document.getElementById('startIMG').classList.add('d-none');
    document.getElementById('startButton').classList.add('d-none');
    playBackgroundMusic();
}


function playBackgroundMusic() {
    let audio = document.getElementById("myAudio");
    if (muteSounds == false) {
        audio.loop = true;
        audio.play();
    } else {
        console.log('pause');
        audio.pause();
    }
}

function muteSound() {
    document.getElementById('muteButton').classList.add('d-none');
    document.getElementById('unmuteButton').classList.remove('d-none');
    muteSounds = !muteSounds;
    playBackgroundMusic();
}

function unmuteSound() {
    document.getElementById('muteButton').classList.remove('d-none');
    document.getElementById('unmuteButton').classList.add('d-none');
    muteSounds = !muteSounds;
    playBackgroundMusic();
}

function fullscreen() {
    document.getElementById('contentCanvas').requestFullscreen();
}

function exitfullscreen() {
    document.exitFullscreen();
}


if (this.gameOver == false) {
    window.addEventListener("keydown", (e) => {
        if (e.keyCode == 39) {
            keyboard.RIGHT = true;
        }
        if (e.keyCode == 37) {
            keyboard.LEFT = true;
        }
        if (e.keyCode == 38) {
            keyboard.UP = true;
        }
        if (e.keyCode == 40) {
            keyboard.DOWN = true;
        }

        if (e.keyCode == 32) {
            keyboard.SPACE = true;
        }

        if (e.keyCode == 68) {
            keyboard.D = true;
        }
    });
}
window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});