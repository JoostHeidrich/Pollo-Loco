class Coin extends MoveableObject {

    height = 200;
    width = 200;
    y = 150;

    IMAGES_COIN = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ];

    constructor() {
        super().loadImage(this.IMAGES_COIN[0]);
        this.loadImages(this.IMAGES_COIN);

        this.setX();
        this.animate();
    }

    setX() {
        this.x = 200 + Math.random() * 6000;
        if (this.x < 2800) {
        } else {
            this.setX();
        }
    }
    
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 200);
    }
}