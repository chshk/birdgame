function Land(option){
    this.ctx = option.ctx;
    this.img = option.img;
    this.canvasX = option.canvasX;
    this.canvasY = option.canvasY;

    this.speed = 2;
    this.imgW = this.img.width;
    this.imgH = this.img.height;
}
Land.prototype = {
    construtor:Land,
    drawLand:function(){
        this.canvasX -= this.speed;
        if(this.canvasX <= -this.imgW){
            this.canvasX += 4 * this.imgW;
        }
        this.ctx.drawImage(this.img,this.canvasX,this.canvasY);
        this.ctx.rect(this.canvasX,this.canvasY,this.imgW,this.imgH);
    }
}