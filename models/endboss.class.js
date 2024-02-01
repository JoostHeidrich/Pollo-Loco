class Endboss extends MoveableObject {

    width = 250;
    height = 400;
    y = 50;
    speed = 1;
    position = 500;
    otherDirection = false;
    movingRight = false;
    movingLeft = false;

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
        super().loadImage(this.IMAGES_BOSS[0]);
        this.loadImages(this.IMAGES_BOSS);
        this.loadImages(this.IMAGES_BOSS_MOVING);

        this.x = 2500;
        this.move();
        this.animate();
    }

    move() {

        let move = setInterval(() => {
            if (this.position > 200) {
                this.position -= 1;
                this.moveLeft();
                this.movingLeft = true;
                this.otherDirection = false;
                console.log('left');
            } else {
                clearInterval(move);
                this.movingLeft = false;
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
                this.movingRight = true;
                this.otherDirection = true;
                console.log('right');
            } else {
                clearInterval(changeDirection);
                this.movingRight = false;
                this.move();
            }
        }, 1000 / 60);
    }

    animate() {
        setInterval(() => {
            if (this.movingLeft) {
                this.playAnimation(this.IMAGES_BOSS_MOVING);
            } else
                if (this.movingRight) {
                    this.playAnimation(this.IMAGES_BOSS_MOVING)
                };
        }, 150);
    }
}