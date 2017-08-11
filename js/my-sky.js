function Sky(option){
    this.ctx = option.ctx;
    this.img = option.img;
    this.x = option.x || 0;
    this.y = option.y || 0;

    this.speed = 2;
    this.imgW = this.img.width;
}
Sky.prototype = {
    constructor:Sky,
    drawSky:function(){
        this.x -= this.speed;
        if(this.x < -this.imgW){
            this.x += 2 * this.imgW;
        }
        this.ctx.drawImage(this.img,this.x,this.y);
    }
}