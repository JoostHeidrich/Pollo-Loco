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
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
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


    ]
    world;
    valiables;

    allert_sound = new Audio('audio/bossAllert.mp3');
    hurt_sound = new Audio('audio/hurtboss.mp3');

    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.IMAGES_BOSS_Allert);
        this.loadImages(this.IMAGES_BOSS_MOVING);
        this.loadImages(this.IMAGES_BOSS_HIT);
        this.animate();
        this.move();
    }

    start() {
        this.allert_sound.play();
        world.allertboss = true;
    }

    hit() {
        this.hurt_sound.play();
    }

    move() {
        let moveBoss = setInterval(() => {
            if (valiables.stopMovingBoss === true) {
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

    changeDirection() {
        let changeBossDirection = setInterval(() => {
            if (valiables.stopMovingBoss === true) {
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

    animate() {
        let i = 0;
        let x = 0
        setInterval(() => {
            if (world.allertboss === true && i < 17) {
                this.playAnimationOnce(this.IMAGES_BOSS_Allert);
                i++
                world.bossResetWalking = true;
            } else
                if (valiables.endbossHitAnimation === true && x < 4) {
                    this.playAnimation(this.IMAGES_BOSS_HIT);
                    x++;
                }
                else {
                    this.playAnimation(this.IMAGES_BOSS_MOVING);
                }

            if (x === 3 && valiables.endbossHitAnimation === true) {
                valiables.endbossHitAnimation = false;
                x = 0;
            }

            if (i === 16 && world.bossResetWalking === true) {
                world.allertboss = false;
                world.bossResetWalking = false;
                valiables.stopMovingBoss = false;
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
}
