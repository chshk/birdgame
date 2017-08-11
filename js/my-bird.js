function Bird(option){
    this.ctx = option.ctx;
    this.img = option.img;
    this.canvasX = option.canvasX;
    this.canvasY = option.canvasY;

    this.index = 0;
    this.imgW = this.img.width/3;
    this.imgH = this.img.height;
    this.maxAngle = 50;
    this.maxSpeed = 0.4;
    this.speed = 0;
    this.g = 0.0003;
}

Bird.prototype = {
    contructor:Bird,
    drawBird:function(offsetTime){
        var distanceY = this.speed * offsetTime + this.g * offsetTime * offsetTime / 2;
        this.canvasY += distanceY;
        this.speed += offsetTime * this.g;
        if(this.speed >= this.maxSpeed){
            this.speed = this.maxSpeed;
        }
        var currentAngle = this.speed/this.maxSpeed*this.maxAngle;
        this.ctx.save();
        this.ctx.translate(this.canvasX+this.imgW/2,this.canvasY+this.imgH/2);
        this.ctx.rotate(Math.PI/180*currentAngle);
        this.ctx.drawImage(this.img,this.imgW*this.index,0,this.imgW,this.imgH,-this.imgW/2,-this.imgH/2,this.imgW,this.imgH);
        this.ctx.restore();
        this.index++;
        if(this.index>2){
            this.index = 0;
        }
    }
}