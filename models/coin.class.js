class Coin extends MoveableObject {

    height = 200;
    width = 200;
    y = 100;

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
        this.x = 200 + Math.random() * 60000;
        if (this.x < 7000) {
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