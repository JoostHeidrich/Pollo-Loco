class World {
    character = new Character();
    level = level1;
    endboss = this.level.endboss[0];
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    HealthstatusBar = new HeathStatusBar();
    CoinstatusBar = new CoinStatusBar();
    BottlestatusBar = new BottleStatusBar();
    BossstatusBar = new BossStatusBar();
    gameOver = false;
    startEndbossAnimation = false;
    allertboss = false;
    bossResetWalking = false;

    thrownBottle = [];
    removedthrownBottle = [];

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
        this.endboss.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.startEndbos();
        }, 1000 / 60);

        setInterval(() => {
            this.checkThrownObjects();
        }, 200);
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isJumpingOn(enemy)) {

                this.level.enemies[index].deadChicken(index);
                valiables.crushChickenSound.play();
            } else
                if (this.character.isCollidingEnemy(enemy) && this.chickenDead(enemy)) {
                    this.character.hit();
                    this.HealthstatusBar.setPercentage(this.character.energy);
                }

        });

        this.level.coins.forEach((coin, index) => {
            if (this.character.isCollidingCoin(coin)) {
                this.level.coins.splice(index, 1);
                this.CoinstatusBar.percentageCoin += 10;
                this.CoinstatusBar.setPercentage();

            }

        });

        this.level.bottle.forEach((bottle, index) => {
            if (this.character.isCollidingBottle(bottle) && this.BottlestatusBar.percentageBottle < 100) {
                this.level.bottle.splice(index, 1);
                this.BottlestatusBar.percentageBottle += 10;
                this.BottlestatusBar.setPercentage();

            }

        });

        this.thrownBottle.forEach((bottle, index) => {
            if (this.endboss.isCollidingBottle(bottle)) {
                this.BossstatusBar.percentageBoss -= 10;
                this.BossstatusBar.setPercentage();
                valiables.endbossHitAnimation = true;

                this.endboss.hit();

                var removedItem = this.thrownBottle.splice(index, 1)[0];
                this.removedthrownBottle.push(removedItem);
                console.log(this.removedthrownBottle.length - 1);
                this.removedthrownBottle[this.removedthrownBottle.length - 1].play(this.removedthrownBottle.length - 1);
                valiables.bottlehitSound.play();
            }
        });

    }



    chickenDead(enemy) {
        return enemy.allive
    }


    checkThrownObjects() {
        if (this.keyboard.D) {

            if (this.BottlestatusBar.percentageBottle > 0 && this.character.otherDirection == false) {
                this.BottlestatusBar.setPercentage();
                this.BottlestatusBar.percentageBottle -= 10;
                let bottle = new thrownBottle(this.character.x + 100, this.character.y + 100, '+')
                this.thrownBottle.push(bottle);
            } else
                if (this.BottlestatusBar.percentageBottle > 0 && this.character.otherDirection == true) {
                    this.BottlestatusBar.setPercentage();
                    this.BottlestatusBar.percentageBottle -= 10;
                    let bottle = new thrownBottle(this.character.x, this.character.y + 100, '-')
                    this.thrownBottle.push(bottle);
                }
        }
    }

    startEndbos() {
        let character1 = this.character.x + 300;
        let character2 = this.character.x - 100;


        if (character1 > this.endboss.x && character2 < this.endboss.x && !this.startEndbossAnimation) {
            this.startEndbossAnimation = true;
            valiables.stopMovingBoss = true;
            this.endboss.start();
        }
    }

    removeBottle(index) {
        this.removedthrownBottle.splice(index, 1);
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

        this.addToMap(this.character)
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottle);
        this.addObjectsToMap(this.level.enemies);

        this.addObjectsToMap(this.level.endboss);
        this.addToMap(this.BossstatusBar);

        this.addObjectsToMap(this.thrownBottle);
        this.addObjectsToMap(this.removedthrownBottle);

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