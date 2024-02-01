class thrownBottle extends MoveableObject {
    throwing_Sound = new Audio('audio/throw.mp3')

    constructor(x, y, direction) {
        super();
        this.throw(x, y, direction);
    }

    throw(x, y, direction) {

        this.x = x;
        this.y = y;



        this.loadImage('img/6_salsa_bottle/salsa_bottle.png');

        this.height = 60;
        this.width = 50;
        this.speedY = 30;
        this.applyGravity();
        this.throwing_Sound.play();
        if (direction == '+') {
            setInterval(() => {
                this.x += 10;
            }, 25);
        } else {
            setInterval(() => {
                this.x -= 10;
            }, 25);
        }


    }
}