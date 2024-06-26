class MiniChicken extends MoveableObject {
    width = 50;
    height = 70;
    y = 350;
    animation;
    allive = true;
    speedY = 0;

    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
    ];

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png'
    ];

    currentImage = 0;

    /**
     * loads all immages sets a random speed and starts the animation and setX funktion
     */
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);

        this.speed = 0.15 + Math.random() * 0.25;
        this.setX();
        this.animate();
    }

    /**
     * sets the x condinat random between 300 and 6000
     */
    setX() {
        this.x = 300 + Math.random() * 20000;
        if (this.x < 6000) {
        } else {
            this.setX();
        }
    }

    /**
     * animates the object
     */
    animate() {

        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
        this.moveLeft();

        this.animation = setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 200);
    }

    /**
     * plays the death chicken animation
     */
    deadChicken() {
        this.allive = false;
        this.speed = 0;
        this.speedy = -1;
        clearInterval(this.animation);
        this.playAnimation(this.IMAGES_DEAD);
        this.applyGravity();
    }

    /**
     * plays the killsound if muteSounds if false
     */
    killSound() {
        if (variables.muteSounds === false) {
            variables.crushChickenSound.play();
        }
    }
}