function Pipe(option) {
    this.ctx = option.ctx;
    this.imgT = option.imgT;
    this.imgB = option.imgB;
    this.canvasX = option.canvasX;

    this.imgH = this.imgT.height;
    this.imgW = this.imgT.width;
    this.speed = 2;
    this.space = 150;
    this.topY = 0;
    this.bottomY = 0;
    this.getY();
}
Pipe.prototype = {
    constructor: Pipe,
    drawPipe: function() {
        this.canvasX -= this.speed;
        if (this.canvasX < this.imgW * -3) {
            this.canvasX += 3 * this.imgW * 6;
            this.getY();
        }
        this.ctx.drawImage(this.imgT, this.canvasX, this.topY);
        this.ctx.rect(this.canvasX, this.topY, this.imgW, this.imgH);

        this.ctx.drawImage(this.imgB, this.canvasX, this.bottomY);
        this.ctx.rect(this.canvasX, this.bottomY, this.imgW, this.imgH);
    },
    getY: function() {
        var disY = Math.random() * 238 + 50;
        this.topY = disY - this.imgH;
        this.bottomY = disY + this.space;
    }
}