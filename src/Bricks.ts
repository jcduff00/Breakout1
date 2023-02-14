import Brick from './Brick'

class Bricks { 
    rows: number
    cols: number
    width: number
    height: number
    padding: number
    bricks: Brick[][]
    offsetLeft: number
    offsetTop: number
    brickPadding: number
    brickOffsetLeft: number
    brickOffsetTop: number
    constructor(rows: any, cols: any, width: number, height: number, padding: any, offsetLeft: any, offsetTop: any) {
        this.width = width;
        this.height = height;
        this.bricks = []
        this.rows = rows;
        this.cols = cols;
        this.brickPadding = padding; 
        this.brickOffsetLeft = offsetLeft; 
        this.brickOffsetTop = offsetTop;
        this.init();
}
    init() {
        for (let c =  0; c < this.cols; c+=1){ 
            this.bricks[c] = []; 
            for (let r = 0; r <this.rows; r+=1){
                const brickX = c * (this.width + this.brickPadding) + this.brickOffsetLeft;
                const brickY = r * (this.height + this.brickPadding) + this.brickOffsetTop;
                this.bricks[c][r] = new Brick(brickX, brickY, this.width, this.height);
            }
        }
    }
    render(ctx: any) { 
        for (let c = 0; c < this.cols; c++) {
            for (let r = 0; r < this.rows; r++) {
                const brick = this.bricks[c][r];
                if (brick.status === 1) {
                    brick.render(ctx);
                }
            }
        }
    }
}

export default Bricks