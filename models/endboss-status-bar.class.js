class BossStatusBar extends MoveableObject {
    percentageBoss = 100;
    otherDirection = false;
    level = level1;
    endboss = this.level.endboss[0];
    otherDirection = this.endboss.otherDirection;
    x = this.endboss.x;

    ImagesHealth = [
        'img/7_statusbars/2_statusbar_endboss/blue/blue0.png',
        'img/7_statusbars/2_statusbar_endboss/blue/blue20.png',
        'img/7_statusbars/2_statusbar_endboss/blue/blue40.png',
        'img/7_statusbars/2_statusbar_endboss/blue/blue60.png',
        'img/7_statusbars/2_statusbar_endboss/blue/blue80.png',
        'img/7_statusbars/2_statusbar_endboss/blue/blue100.png',
    ];


    /**
     * loads all immages and set height width and y cordinate
     * starts the moveWithBoss funktion
     */
    constructor() {
        super().loadImage(this.ImagesHealth[5]);
        this.loadImages(this.ImagesHealth);
        this.y = 37;
        this.width = 185;
        this.height = 60;
        this.moveWithBoss();
    }

    /**
     * changes the x condinate to the cordinate of the endboss
     */
    moveWithBoss() {
        setInterval(() => {
            this.x = this.endboss.x + 30;
        }, 1000 / 60);
    }

    /**
     * starts the status bar
     */
    start() {
        this.setPercentage();
    }

    /**
    * check the percentage and loads the right immage
    */
    setPercentage() {
        let percentageBoss = this.ImagesHealth[this.resolveImageIndex()];
        this.img = this.imageCache[percentageBoss];
        if (this.percentageBoss < 1) {
            variables.BossDeath = true;
        }
    }

    /**
    * @returns the position in the array of the right immage
    */
    resolveImageIndex() {
        if (this.percentageBoss === 100) {
            return 5;
        } else if (this.percentageBoss > 60) {
            return 4;
        } else if (this.percentageBoss > 40) {
            return 3;
        } else if (this.percentageBoss > 20) {
            return 2;
        } else if (this.percentageBoss > 0) {
            return 1;
        } else {
            return 0;
        }
    }



}