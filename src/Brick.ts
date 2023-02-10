class Brick extends Sprite { 
    x: number
    y: number 
    status: number
    width: number
    height: number
    constructor(x: number, y: number, width: number, height: number) {
        super(x, y, width, height);
        this.status = 1; 
    }
}