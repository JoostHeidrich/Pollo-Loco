let canvas;
let world;
let variables;
let keyboard = new Keyboard();

/**
 * load all variables when the body is loaded
 */
function init() {
  variables = new Variables();
  if (this.muteSounds === true) {
    variables.muteSounds = true;
  }
}

/**
 * gemerates the world
 */
function startGame() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);

  playBackgroundMusic();
}

/**
 * play  the backround music if the valiable muteSounds is not true
 */
function playBackgroundMusic() {
  let audio = document.getElementById("backgroundMusic");
  if (variables.muteSounds === false) {
    audio.loop = true;
    audio.play();
  } else {
    audio.pause();
  }
}

/**
 * opens the tutorial
 */
function openExplenation() {
  if (document.getElementById("explenation").classList.contains("d-none")) {
    document.getElementById("explenation").classList.remove("d-none");
  } else {
    document.getElementById("explenation").classList.add("d-none");
  }
}

/**
 * closes the tutorial
 */
function closeTutorial() {
  document.getElementById("explenation").classList.add("d-none");
}

/**
 * mutes the sounds when aktive
 */
function muteSound() {
  document.getElementById("muteButton").classList.add("d-none");
  document.getElementById("unmuteButton").classList.remove("d-none");
  variables.muteSounds = !variables.muteSounds;
  this.muteSounds = !this.muteSounds;
  playBackgroundMusic();
}

/**
 * unmutes the sounds when aktive
 */
function unmuteSound() {
  document.getElementById("muteButton").classList.remove("d-none");
  document.getElementById("unmuteButton").classList.add("d-none");
  variables.muteSounds = !variables.muteSounds;
  this.muteSounds = !this.muteSounds;
  playBackgroundMusic();
}

/**
 * makes the game fullscreen
 */
function fullscreen() {
  document.getElementById("fullscreen").classList.add("d-none");
  document.getElementById("minimize").classList.remove("d-none");
  document.getElementById("contentCanvas").requestFullscreen();
}

/**
 * removes fullscreen
 */
function exitfullscreen() {
  document.getElementById("minimize").classList.add("d-none");
  document.getElementById("fullscreen").classList.remove("d-none");
  document.exitFullscreen();
}

/**
 * checks if keys ar pressed
 */
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

/**
 * checks if keys ar unpressed
 */
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

/**
 * checks if the button is touched
 */
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btnLeft").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.LEFT = true;
  });

  document.getElementById("btnLeft").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.LEFT = false;
  });

  document.getElementById("btnRight").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.RIGHT = true;
  });

  document.getElementById("btnRight").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.RIGHT = false;
  });

  document.getElementById("btnJump").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.SPACE = true;
  });

  document.getElementById("btnJump").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.SPACE = false;
  });

  document.getElementById("btnThrow").addEventListener("touchstart", (e) => {
    e.preventDefault();
    keyboard.D = true;
  });

  document.getElementById("btnThrow").addEventListener("touchend", (e) => {
    e.preventDefault();
    keyboard.D = false;
  });
});
