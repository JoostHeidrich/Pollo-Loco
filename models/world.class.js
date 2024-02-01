class World {
    character = new Character();
    endboss = new Endboss();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    HealthstatusBar = new HeathStatusBar();
    CoinstatusBar = new CoinStatusBar();
    BottlestatusBar = new BottleStatusBar();
    BossstatusBar = new BossStatusBar();
    gameOver = false;

    throwableObjects = [new ThrowableObject()];


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkThrownObjects();

            this.checkCollisions();
        }, 200);
    }

    checkCollisions() {
        //check collosion
        this.level.enemies.forEach(enemy => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.HealthstatusBar.setPercentage(this.character.energy);
            }

        });

        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.level.coins.splice(index, 1);
                this.CoinstatusBar.percentageCoin += 10;
                this.CoinstatusBar.setPercentage();

            }

        });

        this.level.bottle.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.level.bottle.splice(index, 1);
                this.BottlestatusBar.percentageBottle += 10;
                this.BottlestatusBar.setPercentage();

            }

        });

        this.throwableObjects.forEach((bottle, index) => {
            if (this.endboss.isColliding(bottle)) {
                this.BossstatusBar.percentageBoss -= 10;
                this.throwableObjects.splice(index, 1)
                this.BossstatusBar.setPercentage();
            }
        });
    }

    checkThrownObjects() {
        if (this.keyboard.D) {
            if (this.BottlestatusBar.percentageBottle > 0) {
                this.BottlestatusBar.setPercentage();
                this.BottlestatusBar.percentageBottle -= 10;
                let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100)
                this.throwableObjects.push(bottle);
            }

        }
    }



    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);

        this.addObjectsToMap(this.level.clouds);

        this.ctx.translate(-this.camera_x, 0);
        //space for fixed objects -----
        this.addToMap(this.HealthstatusBar);
        this.addToMap(this.CoinstatusBar);
        this.addToMap(this.BottlestatusBar);

        this.ctx.translate(this.camera_x, 0);


        for (let i = 0; i < this.BossstatusBar.ImagesHealth.length; i++) {
            this.addToMap(this.BossstatusBar);
        }

        this.addToMap(this.character)
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottle);
        this.addObjectsToMap(this.level.enemies);

        this.addObjectsToMap(this.level.endboss);

        this.addObjectsToMap(this.throwableObjects);

        this.ctx.translate(-this.camera_x, 0);


        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}