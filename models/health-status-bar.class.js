class HeathStatusBar extends DrawableObject {
    percentageHealth = 100;
    variables;

    ImagesHealth = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png'
    ];



    constructor() {
        super();
        this.loadImages(this.ImagesHealth);
        this.x = 20;
        this.y = 0;
        this.width = 185;
        this.height = 60;
        this.setPercentage(100);
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let pathHealth = this.ImagesHealth[this.resolveImageIndex(percentage)];
        this.img = this.imageCache[pathHealth];
        if (this.percentage < 1) {
            variables.deathPlayer = true;
        }
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