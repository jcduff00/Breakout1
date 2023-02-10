class Lives extends Sprite { 
    text: string
    x: number
    y: number
    color: string
    font: string 
    hearts: number
    constructor(text: string, x: number, y: number, color = "#0955DD", font = "16px 'Comic Sans MS'") { 
        super(x, y, 0, 0, color);
        this.text = text;
        this.font = font; 
        this.hearts = 0;
    }
    render(ctx: any) { 
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(`${this.text} ${this.hearts}`, this.x, this.y);
    }
}