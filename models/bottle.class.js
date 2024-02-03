class Bottle extends MoveableObject {

    height = 80;
    width = 80;
    y = 350;

    IMAGES_BOTTLE = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png',
    ];

    constructor() {
        super().loadImage(this.IMAGES_BOTTLE[0]);
        this.loadImages(this.IMAGES_BOTTLE);
        this.setX();
        this.animate();
    }

    setX() {
        this.x = 200 + Math.random() * 60000;
        if (this.x < 6000) {
        } else {
            this.setX();
        }
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLE);
        }, 500);
    }
}