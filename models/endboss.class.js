class Endboss extends MoveableObject {

    width = 250;
    height = 400;
    y = 50;
    speed = 1;
    otherDirection = false;
    moving = false;
    x = 8000;
    stopMoving = false;
    changeBossDirection;

    IMAGES_BOSS_Allert = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_BOSS_MOVING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];

    IMAGES_BOSS_HIT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];

    IMAGES_BOSS_DEATH = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];




    world;
    variables;

    allert_sound = new Audio('audio/bossAllert.mp3');
    hurt_sound = new Audio('audio/hurtboss.mp3');

    /**
     * loads all immages and starts the animate and move function
     */
    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.IMAGES_BOSS_Allert);
        this.loadImages(this.IMAGES_BOSS_MOVING);
        this.loadImages(this.IMAGES_BOSS_HIT);
        this.loadImages(this.IMAGES_BOSS_DEATH);
        this.animate();
        this.move();
    }

    /**
     * plays the allers sound if muteSounds is false
     */
    start() {
        world.allertboss = true;
        this.speed = 4;
        if (variables.muteSounds === false) {
            this.allert_sound.play();
        }
    }

    /**
     * plays the hit sound if muteSounds is false
     */
    hitsound() {
        if (variables.muteSounds === false) {
            this.hurt_sound.play();
        }
    }

    /**
     * moves the boss untill x is 6000 and then starts the changeDirection function
     */
    move() {
        let moveBoss = setInterval(() => {

            if (variables.stopMovingBoss === true) {
                clearInterval(moveBoss);
                this.otherDirection = false;
            }
            else
                if (this.x > 6000 && this.stopMoving === false) {
                    this.x -= this.speed;
                    this.moving = true;
                    this.otherDirection = false;
                } else {
                    clearInterval(moveBoss);
                    this.moving = false;
                    this.changeDirection();
                }
        }, 1000 / 60);

    }

    /**
     * moves the boss back x is 8000 and then starts the move function
     */
    changeDirection() {
        let changeBossDirection = setInterval(() => {

            if (variables.stopMovingBoss === true) {
                clearInterval(changeBossDirection);
                this.otherDirection = false;
            }
            else
                if (this.x < 8000 && this.stopMoving === false) {
                    this.x += this.speed;
                    this.moving = true;
                    this.otherDirection = true;
                } else
                    if (this.stopMoving === false) {
                        this.moving = false;
                        clearInterval(changeBossDirection);
                        this.move();
                    }
        }, 1000 / 60);
    }

    /**
     * plays the animations of the boss
     */
    animate() {
        let i = 0;
        let x = 0;
        let bossDeatchCount = 0;
        setInterval(() => {
            if (variables.BossDeath === true && bossDeatchCount < 3) {
                this.playAnimation(this.IMAGES_BOSS_DEATH);
                bossDeatchCount++;
            } else
                if (world.allertboss === true && i < 9) {
                    this.playAnimation(this.IMAGES_BOSS_Allert);
                    i++
                    world.bossResetWalking = true;
                } else
                    if (variables.endbossHitAnimation === true && x < 4) {
                        this.playAnimation(this.IMAGES_BOSS_HIT);
                        x++;
                    }
                    else {
                        this.playAnimation(this.IMAGES_BOSS_MOVING);
                    }

            if (x === 3 && variables.endbossHitAnimation === true) {
                variables.endbossHitAnimation = false;
                x = 0;
            }

            if (bossDeatchCount === 3) {
                this.clearAllIntervals();
            }

            if (i === 8 && world.bossResetWalking === true) {
                world.allertboss = false;
                world.bossResetWalking = false;
                variables.stopMovingBoss = false;
                this.stopMoving = false;
                this.moving = false;
                if (this.x > 6010) {
                    this.move();
                } else {
                    this.changeDirection();
                }
            }

        }, 150);
    }

    /**
     * clears all intervals
     */
    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
        document.getElementById('win').classList.remove('d-none');
    }
}
