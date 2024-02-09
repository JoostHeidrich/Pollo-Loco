class thrownBottle extends MoveableObject {
    throwing_Sound = new Audio('audio/throw.mp3')
    bottlehit = false;
    stopThrow = false;

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

    constructor(x, y, direction) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES_BOTTLE);
        this.loadImages(this.IMAGES_BREAK);
        this.throw(x, y, direction);
    }

    throw(x, y, direction) {
        this.x = x;
        this.y = y;

        this.height = 60;
        this.width = 50;
        this.speedY = 30;
        this.applyGravity();
        if (muteSounds === false) {
            this.throwing_Sound.play();
        }
        if (direction == '+') {
            setInterval(() => {
                if (this.stopThrow === false) {
                    console.log(this.stopThrow);
                    this.x += 10;
                }
            }, 25);
        } else if (direction == '-') {
            setInterval(() => {
                if (this.stopThrow === false) {
                    this.x -= 10;
                }
            }, 25);
        }
        this.animate();
    }

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
                    console.log(i);
                } else if (i === 6) {
                    world.removeBottle(this.index);
                    i = 0;
                    clearInterval(Interval);
                }
        }, 100);
    }

    play(index) {
        this.index = index
        this.bottlehit = true;
        this.stopThrow = true;
    }
}

