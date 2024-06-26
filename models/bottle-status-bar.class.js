class BottleStatusBar extends DrawableObject {
    percentageBottle = 0;

    ImagesBottle = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png'
    ];

    /**
     * loads the immages and sets height witdh and the cordinats x and y
     */
    constructor() {
        super();
        this.loadImages(this.ImagesBottle);
        this.x = 20;
        this.y = 100;
        this.width = 185;
        this.height = 60;
        this.setPercentage();
    }

    /**
     * check the percentage and loads the right immage
     */
    setPercentage() {
        this.percentageBottle = this.percentageBottle;
        let pathBottle = this.ImagesBottle[this.resolveImageIndex()];
        this.img = this.imageCache[pathBottle];
    }

    /**
     * @returns the position in the array of the right immage
     */
    resolveImageIndex() {
        if (this.percentageBottle == 100) {
            return 5;
        } else if (this.percentageBottle > 80) {
            return 4;
        } else if (this.percentageBottle > 60) {
            return 3;
        } else if (this.percentageBottle > 40) {
            return 2;
        } else if (this.percentageBottle > 10) {
            return 1;
        } else {
            return 0;
        }
    }
}