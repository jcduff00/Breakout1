
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let dx = 2;
let dy = -2;
let color = "#0095DD"
let ballRadius = 10
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
initializeBricks(); 

class Ball {
    constructor(x = 0, y = 0, dx = 2, dy = -2, radius = 20, color = 'blue') {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
    }
render(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
} 

class Brick { 
    constructor(x, y, width, height) {
        this.x = x; 
        this.y = y; 
        this.status = 1; 
        this.width = width; 
        this.height = height; 
    }
    render() { 
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "#0095DD";
        ctx.fill();s
        ctx.closePath();
    }
}

class Bricks { 
    constructor(rows, cols) {
        this.bricks = []
        this.rows = rows 
        this.cols = cols 
        this.init(); 
}
    init() {
        for (let c =  0; c < brickColumnCount; c+=1){ 
            this.bricks[c] = []; 
            for (let r = 0; r <brickRowCount; r+=1){
                const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
                const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
                this.bricks[c][r] = new Brick(brickX, brickY, brickWidth, brickHeight);
            }
        }
    }
    render(ctx) { 
        for (let c = 0; c < this.cols; c++) {
            for (let r = 0; r < this.rows; r++) {
                const brick = this.bricks[c][r];
                if (bricks[c][r].status === 1) {
                    brick.render(ctx);
                }
            }
        }
    }
}

class Paddle { 
    constructor(x, y, width, height, color = "#0955DD") {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    render(ctx) { 
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

class Score { 
    constructor(text, x, y, color = "#0955DD", font = "16px Comic Sans") { 
        this.text = text; 
        this.x = x; 
        this.y = y; 
        this.color = color;
        this.font = font; 
        this.points = 0; 
    }
    render(ctx) { 
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(`${this.text} ${this.points}`, this.x, this.y);
    }
}

class Lives { 
    constructor(x, y, color = "#0955DD", font = "16px Comic Sans") { 
        this.x = x; 
        this.y = y; 
        this.color = color; 
        this.font = font; 
        this.hearts = 0;
    }
    render(ctx) { 
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(`${this.text} ${this.hearts}`, this.x, this.y);
    }
}

let ball = new Ball();
const bricks = new Bricks(brickColumnCount, brickRowCount)
const paddle = new Paddle(paddleX, paddleY);
const scoreLabel = new Score('Score: ', 8, 20);
const livesLabel = new Lives('Lives: ', 65, 20);

const brick = [];
for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
     bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

function initializeBricks() {
    for (let c =  0; c < brickColumnCount; c+= 1){ 
        bricks[c] = []; 
        for (let r = 0; r <brickRowCount; r+=1){
        const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
        const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
            bricks[c][r] = new Brick(brickX, brickY, brickWidth, brickHeight);
    }
}

}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bricks.render(ctx);
    ball.render(ctx);
    paddle.render(ctx); 
    drawScore();
    drawLives();
    collisionDetection();
    x += dx;
    y += dy;
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy < ballRadius) {
    dy = -dy;
  } else if (y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
        lives--;
        if (!lives) {
            alert("GAME OVER");
            document.location.reload();
        } else {
            x = canvas.width / 2;
            y = canvas.height - 30;
            dx = 2;
            dy = -2;
            paddleX = (canvas.width - paddleWidth) / 2;
        }
    }
  }       
    if (rightPressed) {
    paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
    } else if (leftPressed) {
    paddleX = Math.max(paddleX - 7, 0);
  }
  requestAnimationFrame(draw);
}
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function mouseMoveHandler(e) {
    const relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth / 2;
    }
}

function keyDownHandler(e) {
if (e.key === "Right" || e.key === "ArrowRight") {
rightPressed = true;
} else if (e.key === "Left" || e.key === "ArrowLeft") {
leftPressed = true;
}
}

function keyUpHandler(e) {
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
    x > b.x &&
    x < b.x + brickWidth &&
    y > b.y &&
    y < b.y + brickHeight
) {
  dy = -dy;
  b.status = 0;
  score++;
  if (score === brickRowCount * brickColumnCount) {
    alert("YOU WIN, CONGRATULATIONS!");
    document.location.reload();
  }
}
}
}
}
}
draw();
