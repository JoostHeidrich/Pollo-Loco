class Chicken extends MoveableObject {
    width = 80;
    height = 100;
    y = 330;
    animation;
    allive = true;
    speedY = 0;

    IMAGES_WALKING = [
        './img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        './img/3_enemies_chicken/chicken_normal/1_walk/3_w.png'
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png',
        'img/3_enemies_chicken/chicken_normal/2_dead/dead.png'

    ];

    currentImage = 0;

    constructor() {
        super().loadImage('./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);

        this.speed = 0.15 + Math.random() * 0.25;

        this.setX();
        this.animate();
    }

    setX() {
        this.x = 200 + Math.random() * 2000;
        if (this.x < 2800) {
        } else {
            this.setX();
        }
    }

    animate() {

        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        this.moveLeft();

        this.animation = setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }

    deadChicken() {
        this.allive = false;
        this.speed = 0;
        this.speedy = -1;
        clearInterval(this.animation);
        this.playAnimation(this.IMAGES_DEAD);
        this.applyGravity();
    }
}