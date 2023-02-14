class Sprite { 
    x: number
    y: number
    width: number
    height: number 
    color: string
    constructor(x = 0, y = 0, width = 10, height = 10, color = 'royal blue') { 
        this.x = x;
        this. y = y;
        this.width = width;
        this.height = height; 
        this.color = color; 
    }
    render(ctx: any) { 
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height)
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

export default Sprite