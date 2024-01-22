class ThrowableObject extends MoveableObject {

    throwing_Sound = new Audio('audio/throw.mp3')

    constructor(x, y) {
        super();
        this.throw(x, y);
    }

    throw(x, y) {

        this.x = x;
        this.y = y;



        this.loadImage('img/6_salsa_bottle/salsa_bottle.png');

        this.height = 60;
        this.width = 50;
        this.speedY = 30;
        this.applyGravity();
        this.throwing_Sound.play();

        setInterval(() => {
            this.x += 10;
        }, 25);


    }
}