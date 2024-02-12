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
    startEndbossAnimation = false;
    allertboss = false;
    bossResetWalking = false;

    thrownBottle = [];
    removedthrownBottle = [];

    /**
    * Creates a new instance of the class and initializes it with the specified canvas and keyboard.
    * @param {HTMLCanvasElement} canvas - The canvas element on which graphics will be drawn.
    * @param {Keyboard} keyboard - The keyboard control for the game.
    */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    /**
     * Associates the character and end boss objects with the current world.
    */
    setWorld() {
        this.character.world = this;
        this.endboss.world = this;
    }

    /**
     * Initiates the game loop, checking collisions and updating game state at regular intervals.
     */
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.startEndbos();
        }, 1000 / 60);

        setInterval(() => {
            this.checkThrownObjects();
        }, 200);
    }

    /**
    * Checks for collisions between the character and enemies, coins, bottles, and thrown bottles.
    * Updates game state accordingly.
    */
    checkCollisions() {

        this.level.enemies.forEach((enemy, index) => {
            if (this.character.isJumpingOn(enemy)) {
                this.level.enemies[index].deadChicken(index);
                this.level.enemies[index].killSound();
            } else
                if (this.character.isCollidingEnemy(enemy) && this.chickenDead(enemy)) {
                    this.character.hit();
                    this.HealthstatusBar.setPercentage(this.character.energy);
                }

        });

        this.level.coins.forEach((coin, index) => {
            if (this.character.isCollidingCoin(coin)) {
                this.coinCollectet(index);
            }

        });

        this.level.bottle.forEach((bottle, index) => {
            if (this.character.isCollidingBottle(bottle) && this.BottlestatusBar.percentageBottle < 100) {
                this.collectBottle(index);
            }
        });

        this.level.endboss.forEach(boss => {
            if (this.character.isCollidingBottle(boss)) {
                this.HealthstatusBar.setPercentage(0);
            }
        });

        this.thrownBottle.forEach(bottle => {
            if (this.endboss.isCollidingBottle(bottle)) {
                this.endbossHit();
            }
        });

    }

    /**
     * Handles the end boss being hit by a thrown bottle.
    * Reduces the boss's health, triggers hit animation, and plays hit sound.
     * @param {number} index - The index of the thrown bottle that hit the end boss.
    */
    endbossHit(index) {
        this.BossstatusBar.percentageBoss -= 10;
        this.BossstatusBar.setPercentage();

        variables.endbossHitAnimation = true;

        this.endboss.hit();

        var removedItem = this.thrownBottle.splice(index, 1)[0];
        this.removedthrownBottle.push(removedItem);

        this.removedthrownBottle[this.removedthrownBottle.length - 1].play(this.removedthrownBottle.length - 1);
        this.removedthrownBottle[this.removedthrownBottle.length - 1].EndbossHitSound();
    }

    /**
    * Handles the character collecting a bottle.
    * Removes the bottle from the level, increases the character's bottle percentage, and updates the bottle status bar.
    * @param {number} index - The index of the bottle in the level to be collected.
    */
    collectBottle(index) {
        this.level.bottle.splice(index, 1);
        this.BottlestatusBar.percentageBottle += 10;
        this.BottlestatusBar.setPercentage();
    }

    /**
     * Handles the character collecting a coin.
    * Plays the coin collection sound, removes the coin from the level, increases the character's coin percentage, and updates the coin status bar.
     * @param {number} index - The index of the coin in the level to be collected.
    */
    coinCollectet(index) {
        this.level.coins[index].collectSound();
        this.level.coins.splice(index, 1);
        this.CoinstatusBar.percentageCoin += 10;
        this.CoinstatusBar.setPercentage();
    }

    /**
     * Checks if the enemy chicken is alive or dead.
     * @param {Enemy} enemy - The enemy chicken object to check.
     * @returns {boolean} - True if the enemy chicken is alive, otherwise false.
     */
    chickenDead(enemy) {
        return enemy.allive
    }

    /**
     * Checks if the character throws a bottle.
     * If the 'D' key is pressed and there is enough bottle percentage, a bottle is thrown.
     */
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

    /**
    * Initiates the appearance of the end boss when the character approaches its position.
    * Checks if the character is within a certain range of the end boss's position and triggers the start of the end boss animation.
    */
    startEndbos() {
        let character1 = this.character.x + 300;
        let character2 = this.character.x - 100;


        if (character1 > this.endboss.x && character2 < this.endboss.x && !this.startEndbossAnimation) {
            this.startEndbossAnimation = true;
            variables.stopMovingBoss = true;
            this.endboss.start();
        }
    }

    /**
    * Removes a thrown bottle from the list of removed thrown bottles.
    * @param {number} index - The index of the thrown bottle to be removed.
    D*/
    removeBottle(index) {
        this.removedthrownBottle.splice(index, 1);
    }

    /**
    * Clears the canvas and draws all game objects and UI elements.
    */
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

    /**
     * Adds multiple game objects to the canvas.
    * @param {Array} objects - An array of game objects to be added to the canvas.
    */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
    * Adds a game object to the canvas.
    * If the game object is facing the opposite direction, flips the image horizontally before drawing.
     * @param {GameObject} mo - The game object to be added to the canvas.
    */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    /**
    * Flips the image horizontally for a game object.
     * @param {GameObject} mo - The game object whose image is to be flipped.
    */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
    * Restores the canvas state after flipping the image horizontally for a game object.
    * @param {GameObject} mo - The game object whose image was flipped and needs to be restored.
    */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}