class level {
    enemies;
    endboss;
    coins;
    bottle;
    clouds;
    backgroundObjects;
    level_end_x = 10000;

    /**
 * Constructs a game world with various elements.
 * @constructor
 * @param {Array} enemies - An array of enemies in the game.
 * @param {Object} endboss - The end boss of the game.
 * @param {number} coins - The number of coins in the game.
 * @param {Object} bottle - The bottle in the game.
 * @param {Array} clouds - An array of clouds in the background.
 * @param {Array} backgroundObjects - An array of background objects in the game.
 */
    constructor(enemies, endboss, coins, bottle, clouds, backgroundObjects) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.coins = coins;
        this.bottle = bottle;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}