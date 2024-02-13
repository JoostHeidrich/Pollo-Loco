class thrownBottle extends MoveableObject {
    throwing_Sound = new Audio('audio/throw.mp3')
    bottlehit = false;
    stopThrow = false;
    speedY = 30;
    variables;
    index;

    IMAGES_BOTTLE = [
        "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
    ];

    IMAGES_BREAK = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];

    world;

    /**
     * loads all immages
     * @param {number} x - x cordinate
     * @param {number} y - y cordinate
     * @param {+ -} direction - the throw direction
     */
    constructor(x, y, direction) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES_BOTTLE);
        this.loadImages(this.IMAGES_BREAK);
        this.throw(x, y, direction);
    }

    /**
    * sets x cordinat and y cordinat
    * seht widht and height
    * starts the applyGravity fuction and throwSound function
    * checks in wich direction the throw need to go
    * @param {number} x - x cordinate
    * @param {number} y - y cordinate
    * @param {+ -} direction - the throw direction
    */
    throw(x, y, direction) {
        this.x = x;
        this.y = y;

        this.height = 60;
        this.width = 50;
        this.applyGravity();
        this.throwSound();

        if (direction == '+') {
            setInterval(() => {
                if (this.stopThrow === false) {
                    this.x += 5;
                }
            }, 25);
        } else if (direction == '-') {
            setInterval(() => {
                if (this.stopThrow === false) {
                    this.x -= 5;
                }
            }, 25);
        }
        this.animate();
    }

    /**
     * plays the throwing sound if muteSounds is false
     */
    throwSound() {
        if (variables.muteSounds === false) {
            this.throwing_Sound.play();
        }
    }

    /**
     * plays the animation
     */
    animate() {
        let i = 0

        let Interval = setInterval(() => {
            if (this.bottlehit === false) {
                this.playAnimation(this.IMAGES_BOTTLE);
            } else
                if (this.bottlehit === true && i < 6) {
                    this.speedY = 0;
                    this.playAnimation(this.IMAGES_BREAK);
                    i++
                } else if (i === 6) {
                    world.removeBottle(this.index);
                    i = 0;
                    clearInterval(Interval);
                }
        }, 100);
    }

    /**
     * starts the animation
     * @param {number} index - position in the array
     */
    play(index) {
        this.index = index
        this.bottlehit = true;
        this.stopThrow = true;
    }

    /**
     * plays the hitSound if muteSounds is false
     */
    EndbossHitSound() {
        if (variables.muteSounds === false) {
            variables.bottlehitSound.play();
        }
    }

}
