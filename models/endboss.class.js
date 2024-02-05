class Endboss extends MoveableObject {

    width = 250;
    height = 400;
    y = 50;
    speed = 1;
    position = 500;
    otherDirection = false;
    moving = false;
    x = 2500;

    IMAGES_BOSS = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];

    IMAGES_BOSS_MOVING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];

    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.IMAGES_BOSS);
        this.loadImages(this.IMAGES_BOSS_MOVING);

    }

    start() {
        this.animate();
        this.move();
    }

    move() {

        let move = setInterval(() => {
            if (this.position > 200) {
                this.position -= 1;
                this.moveLeft();
                this.moving = true;
                this.otherDirection = false;
            } else {
                clearInterval(move);
                this.moving = false;
                this.changeDirection();
            }
        }, 1000 / 60);


        this.moveLeft();
    }

    changeDirection() {
        let changeDirection = setInterval(() => {
            if (this.position < 500) {
                this.position += 1;
                this.moveRight();
                this.moving = true;
                this.otherDirection = true;
                // console.log('right');
            } else {
                this.moving = false;
                clearInterval(changeDirection);
                this.move();
            }
        }, 1000 / 60);
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOSS_MOVING);
        }, 150);
    }
}
