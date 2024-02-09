let canvas;
let world;
let variables;
let keyboard = new Keyboard();
gameOver = false;

function init() {
}


function startGame() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    variables = new Variables();
    playBackgroundMusic();
}


function playBackgroundMusic() {
    let audio = document.getElementById("myAudio");
    if (variables.muteSounds == false) {
        audio.loop = true;
        audio.play();
    } else {
        audio.pause();
    }
}

function muteSound() {
    document.getElementById('muteButton').classList.add('d-none');
    document.getElementById('unmuteButton').classList.remove('d-none');
    variables.muteSounds = !variables.muteSounds;
    playBackgroundMusic();
}

function unmuteSound() {
    document.getElementById('muteButton').classList.remove('d-none');
    document.getElementById('unmuteButton').classList.add('d-none');
    variables.muteSounds = !variables.muteSounds;
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

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.LEFT = true;
    });

    document.getElementById('btnLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.LEFT = false;
    });

    document.getElementById('btnRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.RIGHT = true;
    });

    document.getElementById('btnRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.RIGHT = false;
    });

    document.getElementById('btnJump').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.SPACE = true;
    });

    document.getElementById('btnJump').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.SPACE = false;
    });

    document.getElementById('btnThrow').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.D = true;
    });

    document.getElementById('btnThrow').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.D = false;
    });
});