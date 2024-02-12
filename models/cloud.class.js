class Cloud extends MoveableObject {
    y = 20;
    width = 500;
    height = 250;
    speed = 0.3;

    /**
     * loads all immages and start the setX funktion and move funktion
     */
    constructor() {
        super().loadImage('./img/5_background/layers/4_clouds/1.png');
        this.setX
        this.speed = 0.3;
        this.move();
    }

    /**
    * sets the x condinat random between 0 and 10000
    */
    setX() {
        this.x = Math.random() * 25000;
        if (this.x < 10000) {
        } else {
            this.setX();
        }
    }

    /**
     * moves the element
     */
    move() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}