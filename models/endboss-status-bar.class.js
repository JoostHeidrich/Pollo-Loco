class BossStatusBar extends MoveableObject {
    percentageBoss = 100;
    speed = 1;
    position = 1000;
    otherDirection = false;

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
        this.x = 8000;
        this.y = 37;
        this.width = 185;
        this.height = 60;
        this.setPercentage();
        this.move();
    }

    move() {

        let move = setInterval(() => {
            if (this.position > 200) {
                this.position -= 1;
                this.moveLeft();
                this.otherDirection = false;
            } else {
                clearInterval(move);
                this.changeDirection();
            }
        }, 1000 / 60);


        this.moveLeft();
    }

    changeDirection() {
        let changeDirection = setInterval(() => {
            if (this.position < 1000) {
                this.position += 1;
                this.moveRight();
                this.otherDirection = true;
            } else {
                clearInterval(changeDirection);
                this.move();
            }
        }, 1000 / 60);
    }

    setPercentage() {
        let percentageBoss = this.ImagesHealth[this.resolveImageIndex()];
        this.img = this.imageCache[percentageBoss];
        if (this.percentageBoss < 1) {
            document.getElementById('win').classList.remove('d-none');
            this.clearAllIntervals();
        }
    }

    clearAllIntervals() {
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
    }

    resolveImageIndex() {
        if (this.percentageBoss == 100) {
            return 5;
        } else if (this.percentageBoss > 80) {
            return 4;
        } else if (this.percentageBoss > 60) {
            return 3;
        } else if (this.percentageBoss > 40) {
            return 2;
        } else if (this.percentageBoss > 0) {
            return 1;
        } else {
            return 0;
        }
    }



}