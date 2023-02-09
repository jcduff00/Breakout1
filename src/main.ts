// eslint //
// variables wherein the basic structure for the game is found //


const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let color = "#0095DD";
let ballRadius = 10;
const paddleHeight = 10;
const paddleWidth = 75;
let paddleX = (canvas.width - paddleWidth) / 2;
let paddleY = (canvas.height - paddleHeight); 
let rightPressed = false;
let leftPressed = false;
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
let score = 0;
let lives = 3;
//pls uncomment//
//initializeBricks(); //

// 
class Ball {
    x: number
    y: number
    dx: number
    dy: number
    radius: number
    color: string
    constructor(x = 0, y = 0, dx = 2, dy = -2, radius = 20, color = 'blue') {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
    }
render(ctx: any) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
} 

class Brick { 
    x: number
    y: number 
    status: number
    width: number
    height: number
    constructor(x: number, y: number, width: number, height: number) {
        this.x = x; 
        this.y = y; 
        this.status = 1; 
        this.width = width; 
        this.height = height; 
    }
    render(ctx: any) { 
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "#FFC5CD";
        ctx.fill();
        ctx.closePath();
    }
}

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
        this.bricks = []
        this.rows = rows;
        this.cols = cols;
        this.width = width; 
        this.height = height; 
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

class Paddle { 
    x: number
    y: number
    width: number
    height: number
    color: string
    constructor(x: number, y: number, width: number, height: number, color = "#0955DD") {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    render(ctx: any) { 
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

class Score { 
    text: string
    x: number
    y: number
    color: string
    font: string
    points: number
    constructor(text: string, x: number, y: number, color = "#0955DD", font = "16px 'Comic Sans MS'") { 
        this.text = text; 
        this.x = x; 
        this.y = y; 
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

class Lives { 
    text: string
    x: number
    y: number
    color: string
    font: string 
    hearts: number
    constructor(text: string, x: number, y: number, color = "#0955DD", font = "16px 'Comic Sans MS'") { 
        this.text = text;
        this.x = x; 
        this.y = y; 
        this.color = color; 
        this.font = font; 
        this.hearts = 0;
    }
    render(ctx: any) { 
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(`${this.text} ${this.hearts}`, this.x, this.y);
    }
}

// instantiations are found here //
let ball = new Ball(x/2, y -55, dx, dy, ballRadius, "#0955DD");
const bricks = new Bricks(3, 5, 75, 20, 10, 30, 30);
bricks.init();
const paddle = new Paddle(paddleX, paddleY, 75, 10);
const scoreLabel = new Score('Score: ', 8, 20);
const livesLabel = new Lives('Lives: ', 400, 20);
livesLabel.hearts = 3;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bricks.render(ctx);
    ball.render(ctx);
    paddle.render(ctx); 
    scoreLabel.render(ctx);
    livesLabel.render(ctx);
    collisionDetection();
    ball.x += ball.dx;
    ball.y += ball.dy;
    if (ball.x + ball.dx > canvas.width - ballRadius || ball.x + ball.dx < ballRadius) {
    ball.dx = -ball.dx; 
  }
  if (ball.y + ball.dy < ballRadius) {
    ball.dy = -ball.dy;
  } else if (ball.y + ball.dy > canvas.height - ballRadius) {
    if (ball.x > paddle.x && ball.x < paddle.x + paddleWidth) {
       ball.dy = -ball.dy;
    } else {
        livesLabel.hearts -= 1;
        if (livesLabel.hearts < 1) {
            alert("GAME OVER");
            document.location.reload();
            this.ball.x = 200;
            this.ball.y = 200;
        } else {
            ball.x = canvas.width / 2;
            ball.y = canvas.height - 30;
            ball.dx = 2;
            ball.dy = -2;
            paddle.x = (canvas.width - paddleWidth) / 2;
        }
    }
  }       
    if (rightPressed) {
        paddle.x+= dx;
    } else if (leftPressed) {
    paddle.x+= dy;
  }
  requestAnimationFrame(draw);
}
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e: any) {
    const relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth / 2;
    }
}

function keyDownHandler(e: any) {
if (e.key === "Right" || e.key === "ArrowRight") {
rightPressed = true;
} else if (e.key === "Left" || e.key === "ArrowLeft") {
leftPressed = true;
}
}

function keyUpHandler(e: any) {
if (e.key === "Right" || e.key === "ArrowRight") {
rightPressed = false;
} else if (e.key === "Left" || e.key === "ArrowLeft") {
leftPressed = false;
}

}
    function collisionDetection() {
        for (let c = 0; c < bricks.cols; c++) {
            for (let r = 0; r < bricks.rows; r++) {
                const b = bricks.bricks[c][r];
                if (b.status === 1) {
                    if (
                    ball.x > b.x &&
                    ball.x < b.x + brickWidth &&
                    ball.y > b.y &&
                    ball.y < b.y + brickHeight
                ){
                    console.log(bricks.bricks)
                    ball.dy = -ball.dy;
                    b.status = 0;
                    scoreLabel.points += 1; 
                    if (score === bricks.cols * bricks.rows) {
                        alert("YOU WIN, CONGRATULATIONS!");
                        document.location.reload();
                    }
                }
            }
        }
    }
}
draw();
