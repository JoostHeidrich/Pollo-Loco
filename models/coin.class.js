class Coin extends MoveableObject {

    height = 200;
    width = 200;
    y = 100;

    IMAGES_COIN = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ];

    /**
     * loads all immages and starts the animation funktion and setX funktion
     */
    constructor() {
        super().loadImage(this.IMAGES_COIN[0]);
        this.loadImages(this.IMAGES_COIN);

        this.setX();
        this.animate();
    }

    /**
     * plays the coin collection sound if muteSounds is false
     */
    collectSound() {
        if (variables.muteSounds === false) {
            variables.collectCoin.play();
        }
    }

    /**
     * sets the x cordinate in a random position between 200 and 6000
     */
    setX() {
        this.x = 200 + Math.random() * 60000;
        if (this.x < 6000) {
        } else {
            this.setX();
        }
    }

    /**
     * plays the animation
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 200);
    }
}