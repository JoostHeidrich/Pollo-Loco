class Character extends MoveableObject {
    width = 160;
    height = 300;
    y = 130;
    speed = 10;
    otherDirection = false;
    dateSet = false;
    time;
    sleepingSound;

    IMAGES_Waiting = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png',
    ];

    IMAGES_LONG_Waiting = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png'
    ];

    IMAGES_WALKING = [
        './img/2_character_pepe/2_walk/W-21.png',
        './img/2_character_pepe/2_walk/W-22.png',
        './img/2_character_pepe/2_walk/W-23.png',
        './img/2_character_pepe/2_walk/W-24.png',
        './img/2_character_pepe/2_walk/W-25.png',
        './img/2_character_pepe/2_walk/W-26.png'
    ];

    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ];

    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png'

    ];

    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ];
    world;

    walking_sound = new Audio('audio/running.mp3');
    jumping_sound = new Audio('audio/jump.mp3');
    hurt_sound = new Audio('audio/hurt.mp3');
    sleeping_sound = new Audio('audio/sleeping.mp3');

    /**
     * loads all immages and thats the animation, gravity and the movement funktion
     */
    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.IMAGES_Waiting);
        this.loadImages(this.IMAGES_LONG_Waiting);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.movement();
        this.animate();
        this.playSleepingSound();
        this.stopSleepingSound();

    }

    /**
     * plays the hurt sound if muteSounds is false
     */
    hitsound() {
        if (variables.muteSounds === false) {
            this.hurt_sound.play();
        }
    }

    /**
     * plays the waling sound if muteSounds is false
     */
    walkingSound() {
        if (variables.muteSounds === false) {
            this.walking_sound.play();
        }
    }

    /**
     * plays the jumping sound if muteSounds is false
     */
    jumpingSound() {
        if (variables.muteSounds === false) {
            this.jumping_sound.play();
        }
    }

    /**
     * plays the sleeping sound if muteSounds is false
     */
    playSleepingSound() {
        this.sound = document.getElementById("characterSleepingSound");
        if (variables.muteSounds === false) {
            this.sound.loop = true;
            this.sound.play();
        }

        let sounds = setInterval(() => {
            if (variables.muteSounds === true) {
                this.sound.pause();
                clearInterval(sounds);
            }
        }, 100);

    }

    /**
 * stops the sleeping sound
 */
    stopSleepingSound() {
        this.sound.pause();
    }

    /**
     * moves the player if a key is pressed and starts the funktion for the sound
     */
    movement() {

        setInterval(() => {
            if (variables.deathPlayer === false) {
                this.walking_sound.pause();

                if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                    this.moveRight();
                    this.otherDirection = false;
                    this.walkingSound();
                }

                if (this.world.keyboard.LEFT && this.x > 0) {
                    this.moveLeft();
                    this.walkingSound();
                    this.otherDirection = true;
                }

                if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                    this.jump();
                    this.jumpingSound();
                }

                this.world.camera_x = -this.x + 100;
            }
        }, 1000 / 60);
    }

    /**
     * animates the object
     */
    animate() {
        let deathAnimationCounter = 0;
        let jumpingCount = 0

        setInterval(() => {
            if (variables.deathPlayer === true) {
                this.deahtAnimation(deathAnimationCounter);
                deathAnimationCounter++
            } else
                if (this.isHurt()) {
                    this.playAnimation(this.IMAGES_HURT);
                    this.dateSet = false;
                    this.stopSleepingSound();
                } else
                    if (this.isAboveGround() && jumpingCount < 9) {
                        this.playAnimation(this.IMAGES_JUMPING);
                        this.dateSet = false;
                        this.stopSleepingSound();
                        jumpingCount++;
                    } else if (jumpingCount === 9) {
                        jumpingCount = 0;
                    } else
                        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                            this.playAnimation(this.IMAGES_WALKING);
                            this.dateSet = false;
                            this.stopSleepingSound();
                        } else
                            if (this.dateSet === true && (new Date().getTime() - this.time) / 1000 > 2) {
                                this.playAnimation(this.IMAGES_LONG_Waiting);
                                this.playSleepingSound();
                            } else {
                                this.playAnimation(this.IMAGES_Waiting);
                                if (this.dateSet === false) {
                                    this.time = new Date().getTime();
                                    this.dateSet = true;
                                }
                            }


        }, 100);
    }

    /**
     * 
     * @param {number} deathAnimationCounter checks if the death animation is finished and stops the game if true
     */
    deahtAnimation(deathAnimationCounter) {
        if (deathAnimationCounter < 7) {
            this.playAnimation(this.IMAGES_DEAD);
        } else {
            this.endGame();
        }
    }

    /**
     * displays the game over screen and clears all intervals
     */
    endGame() {
        variables.gameOver = true;
        document.getElementById('gameOver').classList.remove('d-none');
        this.clearAllIntervals();
    }

    /**
     * makes the character jump
     */
    jump() {
        this.speedY = 30;
    }

    /**
     * clears all intervals
     */
    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }
}

