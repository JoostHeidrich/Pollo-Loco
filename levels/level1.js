let level1;

function initlevel() {

    level1 = new level(
        [
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken()
        ],
        [
            new Endboss()
        ],
        [
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin()
        ],
        [
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle()
        ],
        [
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud(),
            new Cloud()

        ],
        [
            new BackgroundObject('img/5_background/layers/air.png', -719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),

            new BackgroundObject('img/5_background/layers/air.png', 0),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),

            new BackgroundObject('img/5_background/layers/air.png', 719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 4),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 4),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 5),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 5),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 6),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 6),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 7),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 7),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 7),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 7),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 8),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 8),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 8),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 8),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 9),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 9),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 9),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 9),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 10),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 10),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 10),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 10),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 11),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 11),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 11),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 11),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 12),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 12),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 12),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 12),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 13),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 13),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 13),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 13),

            new BackgroundObject('img/5_background/layers/air.png', 719 * 14),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 14),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 14),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 14),

        ]

    );

    document.getElementById('win').classList.add('d-none');
    document.getElementById('gameOver').classList.add('d-none');
    document.getElementById('startIMG').classList.add('d-none');
    document.getElementById('startButton').classList.add('d-none');
}