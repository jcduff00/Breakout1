/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (() => {

eval("// eslint //\r\n// variables wherein the basic structure for the game is found //\r\nvar canvas = document.getElementById(\"myCanvas\");\r\nvar ctx = canvas.getContext(\"2d\");\r\nvar x = canvas.width / 2;\r\nvar y = canvas.height - 30;\r\nvar dx = 2;\r\nvar dy = -2;\r\nvar color = \"#0095DD\";\r\nvar ballRadius = 10;\r\nvar paddleHeight = 10;\r\nvar paddleWidth = 75;\r\nvar paddleX = (canvas.width - paddleWidth) / 2;\r\nvar paddleY = (canvas.height - paddleHeight);\r\nvar rightPressed = false;\r\nvar leftPressed = false;\r\nvar brickRowCount = 3;\r\nvar brickColumnCount = 5;\r\nvar brickWidth = 75;\r\nvar brickHeight = 20;\r\nvar brickPadding = 10;\r\nvar brickOffsetTop = 30;\r\nvar brickOffsetLeft = 30;\r\nvar score = 0;\r\nvar lives = 3;\r\n//pls uncomment//\r\n//initializeBricks(); //\r\n// \r\n// instantiations are found here //\r\nvar ball = new Ball(x / 2, y - 55, dx, dy, ballRadius, \"#0955DD\");\r\nvar bricks = new Bricks(3, 5, 75, 20, 10, 30, 30);\r\nbricks.init();\r\nvar paddle = new Sprite(paddleX, paddleY, 75, 10);\r\nvar scoreLabel = new Score('Score: ', 8, 20);\r\nvar livesLabel = new Lives('Lives: ', 400, 20);\r\nlivesLabel.hearts = 3;\r\nfunction draw() {\r\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n    bricks.render(ctx);\r\n    ball.render(ctx);\r\n    paddle.render(ctx);\r\n    scoreLabel.render(ctx);\r\n    livesLabel.render(ctx);\r\n    collisionDetection();\r\n    ball.x += ball.dx;\r\n    ball.y += ball.dy;\r\n    if (ball.x + ball.dx > canvas.width - ballRadius || ball.x + ball.dx < ballRadius) {\r\n        ball.dx = -ball.dx;\r\n    }\r\n    if (ball.y + ball.dy < ballRadius) {\r\n        ball.dy = -ball.dy;\r\n    }\r\n    else if (ball.y + ball.dy > canvas.height - ballRadius) {\r\n        if (ball.x > paddle.x && ball.x < paddle.x + paddleWidth) {\r\n            ball.dy = -ball.dy;\r\n        }\r\n        else {\r\n            livesLabel.hearts -= 1;\r\n            if (livesLabel.hearts < 1) {\r\n                alert(\"GAME OVER\");\r\n                document.location.reload();\r\n                this.ball.x = 200;\r\n                this.ball.y = 200;\r\n            }\r\n            else {\r\n                ball.x = canvas.width / 2;\r\n                ball.y = canvas.height - 30;\r\n                ball.dx = 2;\r\n                ball.dy = -2;\r\n                paddle.x = (canvas.width - paddleWidth) / 2;\r\n            }\r\n        }\r\n    }\r\n    if (rightPressed) {\r\n        paddle.x += dx;\r\n    }\r\n    else if (leftPressed) {\r\n        paddle.x += dy;\r\n    }\r\n    requestAnimationFrame(draw);\r\n}\r\ndocument.addEventListener(\"keydown\", keyDownHandler, false);\r\ndocument.addEventListener(\"keyup\", keyUpHandler, false);\r\ndocument.addEventListener(\"mousemove\", mouseMoveHandler, false);\r\nfunction mouseMoveHandler(e) {\r\n    var relativeX = e.clientX - canvas.offsetLeft;\r\n    if (relativeX > 0 && relativeX < canvas.width) {\r\n        paddleX = relativeX - paddleWidth / 2;\r\n    }\r\n}\r\nfunction keyDownHandler(e) {\r\n    if (e.key === \"Right\" || e.key === \"ArrowRight\") {\r\n        rightPressed = true;\r\n    }\r\n    else if (e.key === \"Left\" || e.key === \"ArrowLeft\") {\r\n        leftPressed = true;\r\n    }\r\n}\r\nfunction keyUpHandler(e) {\r\n    if (e.key === \"Right\" || e.key === \"ArrowRight\") {\r\n        rightPressed = false;\r\n    }\r\n    else if (e.key === \"Left\" || e.key === \"ArrowLeft\") {\r\n        leftPressed = false;\r\n    }\r\n}\r\nfunction collisionDetection() {\r\n    for (var c = 0; c < bricks.cols; c++) {\r\n        for (var r = 0; r < bricks.rows; r++) {\r\n            var b = bricks.bricks[c][r];\r\n            if (b.status === 1) {\r\n                if (ball.x > b.x &&\r\n                    ball.x < b.x + brickWidth &&\r\n                    ball.y > b.y &&\r\n                    ball.y < b.y + brickHeight) {\r\n                    console.log(bricks.bricks);\r\n                    ball.dy = -ball.dy;\r\n                    b.status = 0;\r\n                    scoreLabel.points += 1;\r\n                    if (score === bricks.cols * bricks.rows) {\r\n                        alert(\"YOU WIN, CONGRATULATIONS!\");\r\n                        document.location.reload();\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\ndraw();\r\n\n\n//# sourceURL=webpack://breakout1/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"]();
/******/ 	
/******/ })()
;