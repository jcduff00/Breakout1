class Score extends Sprite { 
    text: string
    x: number
    y: number
    color: string
    font: string
    points: number
    constructor(text: string, x: number, y: number, color = "#0955DD", font = "16px 'Comic Sans MS'") { 
        super(x, y);
        this.text = text; 
        this.color = color;
        this.font = font; 
        this.points = 0; 
    }
    render(ctx: any) { 
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(`${this.text} ${this.points}`, this.x, this.y);
    }
}