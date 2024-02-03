class level {
    enemies;
    endboss;
    coins;
    bottle;
    clouds;
    backgroundObjects;
    level_end_x = 10000;

    constructor(enemies, endboss, coins, bottle, clouds, backgroundObjects) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.coins = coins;
        this.bottle = bottle;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}