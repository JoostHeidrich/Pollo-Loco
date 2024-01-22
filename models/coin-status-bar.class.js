class CoinStatusBar extends DrawableObject {
    percentageCoin = 0;

    ImagesCoin = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png'
    ];



    constructor() {
        super();
        this.loadImages(this.ImagesCoin);
        this.x = 20;
        this.y = 60;
        this.width = 250;
        this.height = 80;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let pathCoin = this.ImagesCoin[this.resolveImageIndex(percentage)];
        this.img = this.imageCache[pathCoin];
    }

    resolveImageIndex(percentage) {
        if (percentage == 100) {
            return 5;
        } else if (percentage > 80) {
            return 4;
        } else if (percentage > 60) {
            return 3;
        } else if (percentage > 40) {
            return 2;
        } else if (percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }



}