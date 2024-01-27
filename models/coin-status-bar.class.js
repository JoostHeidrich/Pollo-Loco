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
        this.setPercentage();
    }

    setPercentage() {
        this.percentageCoin = this.percentageCoin;
        let pathCoin = this.ImagesCoin[this.resolveImageIndex()];
        this.img = this.imageCache[pathCoin];
    }

    resolveImageIndex() {
        if (this.percentageCoin > 99) {
            return 5;
        } else if (this.percentageCoin > 80) {
            return 4;
        } else if (this.percentageCoin > 60) {
            return 3;
        } else if (this.percentageCoin > 40) {
            return 2;
        } else if (this.percentageCoin > 20) {
            return 1;
        } else {
            return 0;
        }
    }



}