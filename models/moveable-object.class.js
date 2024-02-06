class MoveableObject extends DrawableObject {
    speed = 0.15;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof thrownBottle) {
            return true;
        } else if (this instanceof Chicken) {
            return true;
        } else {
            return this.y < 110;
        }
    }

    isCollidingCoin(mo) {
        return this.x + (this.width / 2) > mo.x &&
            this.x + (this.width / 2) - mo.width < mo.x &&
            this.y < mo.y
    }

    isCollidingEnemy(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;

    }

    isCollidingBottle(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    isJumpingOn(mo) {
        return this.x + this.width > mo.x &&
            this.x < mo.x &&
            this.y + this.height < 370 &&
            this.y + this.height > 340 &&
            this.speedY < -5
    }

    hit() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;

        if (timepassed > 1) {
            this.energy -= 10;
            this.lastHit = new Date().getTime();
        } else
            if (this.energy < 0) {
                this.energy = 0;
            }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    isDead() {
        return this.energy == 0;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    playAnimationOnce(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }
}