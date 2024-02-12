class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    bossHealth = 2500;


    /**
     * Lädt ein Bild von dem angegebenen Pfad.
     * @param {string} path - Der Pfad zum Bild, das geladen werden soll.
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * Zeichnet das geladene Bild auf den angegebenen Canvas-Kontext.
     * @param {CanvasRenderingContext2D} ctx - Der 2D-Kontext des Canvas, auf dem das Bild gezeichnet werden soll.
     */
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    /**
     * 
     * @param {Array} arr-['img/image1.png','img/mage2.png'] 
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }
}