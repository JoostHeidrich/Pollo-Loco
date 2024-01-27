class Endboss extends MoveableObject {

    width = 250;
    height = 400;
    y = 50;

    IMAGES_BOSS = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];

    constructor() {
        super().loadImage(this.IMAGES_BOSS[0]);
        this.loadImages(this.IMAGES_BOSS);

        this.x = 2500;
        this.animate();
    }
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOSS);
        }, 200);
    }
}