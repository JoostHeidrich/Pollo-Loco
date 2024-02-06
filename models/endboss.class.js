class Endboss extends MoveableObject {

    width = 250;
    height = 400;
    y = 50;
    speed = 1;
    position = 1000;
    otherDirection = false;
    moving = false;
    x = 8000;
    stopMoving = false;
    changeBossDirection;

    IMAGES_BOSS_Allert = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    IMAGES_BOSS_MOVING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];
    world;
    valiables;

    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.IMAGES_BOSS_Allert);
        this.loadImages(this.IMAGES_BOSS_MOVING);
        this.animate();
        this.move();
    }

    start() {
        world.allertboss = true;
    }

    move() {
        let moveBoss = setInterval(() => {
            if (world.stopMovingBoss === true) {
                clearInterval(moveBoss);
                this.otherDirection = false;
            }
            else
                if (this.position > 200 && this.stopMoving === false) {
                    this.position -= 1;
                    this.moveLeft();
                    console.log('move left');
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
            if (world.stopMovingBoss === true) {
                clearInterval(changeBossDirection);
                this.otherDirection = false;
            }
            else
                if (this.position < 1000 && this.stopMoving === false) {
                    this.position += 1;
                    this.moveRight();
                    console.log('move right');
                    this.moving = true;
                    this.otherDirection = true;
                } else if (this.stopMoving === false) {
                    this.moving = false;
                    clearInterval(changeBossDirection);
                    this.move();
                }
        }, 1000 / 60);
    }

    animate() {
        let i = 0;
        setInterval(() => {
            if (world.allertboss === true && i < 24) {
                this.playAnimationOnce(this.IMAGES_BOSS_Allert);
                i++
                console.log(i);
                world.bossResetWalking = true;
            }
            else {
                this.playAnimation(this.IMAGES_BOSS_MOVING);
            }

            if (i === 24 && world.bossResetWalking === true) {
                console.log(this.position);
                world.allertboss = false;
                world.bossResetWalking = false;
                world.stopMovingBoss = false;
                this.stopMoving = false;
                this.moving = false;
                console.log('walk again');
                if (this.position > 200) {
                    this.move();
                } else {
                    this.changeDirection();
                }
            }

        }, 150);
    }
}
