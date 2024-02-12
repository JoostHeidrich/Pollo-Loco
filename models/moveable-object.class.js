class MoveableObject extends DrawableObject {
    speed = 0.15;
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;
    character;

    /**
     * makes the gravitis looks real
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    /**
     * checks if element is above the ground
     * @returns true if y is unter 110
     */
    isAboveGround() {
        if (this instanceof thrownBottle) {
            return true;
        } else if (this instanceof Chicken) {
            return true;
        } else {
            return this.y < 110;
        }
    }

    /**
     * cheks if the elemments are coliding
     * @param {Element} mo - the element thes is coliding
     * @returns - true if element is coliding
     */
    isCollidingCoin(mo) {
        return this.x + (this.width / 2) > mo.x &&
            this.x + (this.width / 2) - mo.width < mo.x &&
            this.y < mo.y
    }

    /**
     * cheks if the elemments are coliding
     * @param {Element} mo - the element thes is coliding
     * @returns - true if element is coliding
     */    isCollidingEnemy(mo) {
        return this.x + this.width > mo.x + (mo.width / 2) &&
            this.y + this.height > mo.y &&
            this.x - (this.width / 2) < mo.x - (mo.width / 2) &&
            this.y < mo.y + mo.height;

    }

    /**
     * cheks if the elemments are coliding
     * @param {Element} mo - the element thes is coliding
     * @returns - true if element is coliding
     */
    isCollidingBottle(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    /**
 * cheks if the character is jumping on enemy
 * @param {Element} mo - the element thes is coliding
 * @returns - true if element is coliding
 */
    isJumpingOn(mo) {
        return this.x + this.width > mo.x &&
            this.x < mo.x &&
            this.y + this.height < 370 &&
            this.y + this.height > 340 &&
            this.speedY < -5
    }

    /**
     * checks if the character got hit
     */
    hit() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;

        if (timepassed > 1) {
            this.energy -= 10;
            this.lastHit = new Date().getTime();
            this.world.character.hitsound();
        } else
            if (this.energy < 0) {
                this.energy = 0;
            }
    }

    /**
     * 
     * @returns true if time has past sice the last hit
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    /**
     * 
     * @returns true if character is dead
     */
    isDead() {
        return this.energy == 0;
    }

    /**
     * plays the animation
     * @param {img} images -images for the animation
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * lets element move the left with its speed
     */
    moveLeft() {
        this.x -= this.speed;
    }

    /**
    * lets element move the right with its speed
    */
    moveRight() {
        this.x += this.speed;
    }
}