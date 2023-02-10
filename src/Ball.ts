class Ball extends Sprite {
    x: number
    y: number
    dx: number
    dy: number
    radius: number
    color: string
    constructor(x = 0, y = 0, dx = 2, dy = -2, radius = 20, color = 'blue') {
        super (x, y, radius * 2, radius * 2, color);
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
    }
    move() { 
        this.x += this.dx; 
        this.y += this.dy; 
    }
    render(ctx: any) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
} 