/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Ball.ts":
/*!*********************!*\
  !*** ./src/Ball.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Ball = /** @class */ (function (_super) {\r\n    __extends(Ball, _super);\r\n    function Ball(x, y, dx, dy, radius, color) {\r\n        if (x === void 0) { x = 0; }\r\n        if (y === void 0) { y = 0; }\r\n        if (dx === void 0) { dx = 2; }\r\n        if (dy === void 0) { dy = -2; }\r\n        if (radius === void 0) { radius = 20; }\r\n        if (color === void 0) { color = 'blue'; }\r\n        var _this = _super.call(this, x, y, radius * 2, radius * 2, color) || this;\r\n        _this.dx = dx;\r\n        _this.dy = dy;\r\n        _this.radius = radius;\r\n        return _this;\r\n    }\r\n    Ball.prototype.move = function () {\r\n        this.x += this.dx;\r\n        this.y += this.dy;\r\n    };\r\n    Ball.prototype.render = function (ctx) {\r\n        ctx.beginPath();\r\n        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\r\n        ctx.fillStyle = this.color;\r\n        ctx.fill();\r\n        ctx.closePath();\r\n    };\r\n    return Ball;\r\n}(_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ball);\r\n\n\n//# sourceURL=webpack://breakout1/./src/Ball.ts?");

/***/ }),

/***/ "./src/Brick.ts":
/*!**********************!*\
  !*** ./src/Brick.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Brick = /** @class */ (function (_super) {\r\n    __extends(Brick, _super);\r\n    function Brick(x, y, width, height) {\r\n        var _this = _super.call(this, x, y, width, height) || this;\r\n        _this.status = 1;\r\n        return _this;\r\n    }\r\n    return Brick;\r\n}(_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Brick);\r\n\n\n//# sourceURL=webpack://breakout1/./src/Brick.ts?");

/***/ }),

/***/ "./src/Bricks.ts":
/*!***********************!*\
  !*** ./src/Bricks.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Brick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brick */ \"./src/Brick.ts\");\n\r\nvar Bricks = /** @class */ (function () {\r\n    function Bricks(rows, cols, width, height, padding, offsetLeft, offsetTop) {\r\n        this.width = width;\r\n        this.height = height;\r\n        this.bricks = [];\r\n        this.rows = rows;\r\n        this.cols = cols;\r\n        this.brickPadding = padding;\r\n        this.brickOffsetLeft = offsetLeft;\r\n        this.brickOffsetTop = offsetTop;\r\n        this.init();\r\n    }\r\n    Bricks.prototype.init = function () {\r\n        for (var c = 0; c < this.cols; c += 1) {\r\n            this.bricks[c] = [];\r\n            for (var r = 0; r < this.rows; r += 1) {\r\n                var brickX = c * (this.width + this.brickPadding) + this.brickOffsetLeft;\r\n                var brickY = r * (this.height + this.brickPadding) + this.brickOffsetTop;\r\n                this.bricks[c][r] = new _Brick__WEBPACK_IMPORTED_MODULE_0__[\"default\"](brickX, brickY, this.width, this.height);\r\n            }\r\n        }\r\n    };\r\n    Bricks.prototype.render = function (ctx) {\r\n        for (var c = 0; c < this.cols; c++) {\r\n            for (var r = 0; r < this.rows; r++) {\r\n                var brick = this.bricks[c][r];\r\n                if (brick.status === 1) {\r\n                    brick.render(ctx);\r\n                }\r\n            }\r\n        }\r\n    };\r\n    return Bricks;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bricks);\r\n\n\n//# sourceURL=webpack://breakout1/./src/Bricks.ts?");

/***/ }),

/***/ "./src/Lives.ts":
/*!**********************!*\
  !*** ./src/Lives.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Lives = /** @class */ (function (_super) {\r\n    __extends(Lives, _super);\r\n    function Lives(text, x, y, color, font) {\r\n        if (color === void 0) { color = \"#0955DD\"; }\r\n        if (font === void 0) { font = \"16px 'Comic Sans MS'\"; }\r\n        var _this = _super.call(this, x, y, 0, 0, color) || this;\r\n        _this.text = text;\r\n        _this.font = font;\r\n        _this.hearts = 0;\r\n        return _this;\r\n    }\r\n    Lives.prototype.render = function (ctx) {\r\n        ctx.font = this.font;\r\n        ctx.fillStyle = this.color;\r\n        ctx.fillText(\"\".concat(this.text, \" \").concat(this.hearts), this.x, this.y);\r\n    };\r\n    return Lives;\r\n}(_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lives);\r\n\n\n//# sourceURL=webpack://breakout1/./src/Lives.ts?");

/***/ }),

/***/ "./src/Score.ts":
/*!**********************!*\
  !*** ./src/Score.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Score = /** @class */ (function (_super) {\r\n    __extends(Score, _super);\r\n    function Score(text, x, y, color, font) {\r\n        if (color === void 0) { color = \"#0955DD\"; }\r\n        if (font === void 0) { font = \"16px 'Comic Sans MS'\"; }\r\n        var _this = _super.call(this, x, y) || this;\r\n        _this.text = text;\r\n        _this.color = color;\r\n        _this.font = font;\r\n        _this.points = 0;\r\n        return _this;\r\n    }\r\n    Score.prototype.render = function (ctx) {\r\n        ctx.font = this.font;\r\n        ctx.fillStyle = this.color;\r\n        ctx.fillText(\"\".concat(this.text, \" \").concat(this.points), this.x, this.y);\r\n    };\r\n    return Score;\r\n}(_Sprite__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Score);\r\n\n\n//# sourceURL=webpack://breakout1/./src/Score.ts?");

/***/ }),

/***/ "./src/Sprite.ts":
/*!***********************!*\
  !*** ./src/Sprite.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Sprite = /** @class */ (function () {\r\n    function Sprite(x, y, width, height, color) {\r\n        if (x === void 0) { x = 0; }\r\n        if (y === void 0) { y = 0; }\r\n        if (width === void 0) { width = 10; }\r\n        if (height === void 0) { height = 10; }\r\n        if (color === void 0) { color = 'royal blue'; }\r\n        this.x = x;\r\n        this.y = y;\r\n        this.width = width;\r\n        this.height = height;\r\n        this.color = color;\r\n    }\r\n    Sprite.prototype.render = function (ctx) {\r\n        ctx.beginPath();\r\n        ctx.rect(this.x, this.y, this.width, this.height);\r\n        ctx.fillStyle = this.color;\r\n        ctx.fill();\r\n        ctx.closePath();\r\n    };\r\n    return Sprite;\r\n}());\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sprite);\r\n\n\n//# sourceURL=webpack://breakout1/./src/Sprite.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ball */ \"./src/Ball.ts\");\n/* harmony import */ var _Sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sprite */ \"./src/Sprite.ts\");\n/* harmony import */ var _Bricks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bricks */ \"./src/Bricks.ts\");\n/* harmony import */ var _Lives__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Lives */ \"./src/Lives.ts\");\n/* harmony import */ var _Score__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Score */ \"./src/Score.ts\");\n// eslint //\r\n// variables wherein the basic structure for the game is found //\r\n\r\n\r\n\r\n\r\n\r\nvar canvas = document.getElementById(\"myCanvas\");\r\nvar ctx = canvas.getContext(\"2d\");\r\nvar x = canvas.width / 2;\r\nvar y = canvas.height - 30;\r\nvar dx = 2;\r\nvar dy = -2;\r\nvar color = \"#0095DD\";\r\nvar ballRadius = 10;\r\nvar paddleHeight = 10;\r\nvar paddleWidth = 75;\r\nvar paddleX = (canvas.width - paddleWidth) / 2;\r\nvar paddleY = (canvas.height - paddleHeight);\r\nvar rightPressed = false;\r\nvar leftPressed = false;\r\nvar brickRowCount = 3;\r\nvar brickColumnCount = 5;\r\nvar brickWidth = 75;\r\nvar brickHeight = 20;\r\nvar brickPadding = 10;\r\nvar brickOffsetTop = 30;\r\nvar brickOffsetLeft = 30;\r\nvar score = 0;\r\nvar lives = 3;\r\n//pls uncomment//\r\n//initializeBricks(); //\r\n// \r\n// instantiations are found here //\r\nvar ball = new _Ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"](x / 2, y - 55, dx, dy, ballRadius, \"#0955DD\");\r\nvar bricks = new _Bricks__WEBPACK_IMPORTED_MODULE_2__[\"default\"](3, 5, 75, 20, 10, 30, 30);\r\nbricks.init();\r\nvar paddle = new _Sprite__WEBPACK_IMPORTED_MODULE_1__[\"default\"](paddleX, paddleY, 75, 10);\r\nvar scoreLabel = new _Score__WEBPACK_IMPORTED_MODULE_4__[\"default\"]('Score: ', 8, 20);\r\nvar livesLabel = new _Lives__WEBPACK_IMPORTED_MODULE_3__[\"default\"]('Lives: ', 400, 20);\r\nlivesLabel.hearts = 3;\r\nfunction draw() {\r\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n    bricks.render(ctx);\r\n    ball.render(ctx);\r\n    paddle.render(ctx);\r\n    scoreLabel.render(ctx);\r\n    livesLabel.render(ctx);\r\n    collisionDetection();\r\n    ball.x += ball.dx;\r\n    ball.y += ball.dy;\r\n    if (ball.x + ball.dx > canvas.width - ballRadius || ball.x + ball.dx < ballRadius) {\r\n        ball.dx = -ball.dx;\r\n    }\r\n    if (ball.y + ball.dy < ballRadius) {\r\n        ball.dy = -ball.dy;\r\n    }\r\n    else if (ball.y + ball.dy > canvas.height - ballRadius) {\r\n        if (ball.x > paddle.x && ball.x < paddle.x + paddleWidth) {\r\n            ball.dy = -ball.dy;\r\n        }\r\n        else {\r\n            livesLabel.hearts -= 1;\r\n            if (livesLabel.hearts < 1) {\r\n                alert(\"GAME OVER\");\r\n                document.location.reload();\r\n                this.ball.x = 200;\r\n                this.ball.y = 200;\r\n            }\r\n            else {\r\n                ball.x = canvas.width / 2;\r\n                ball.y = canvas.height - 30;\r\n                ball.dx = 2;\r\n                ball.dy = -2;\r\n                paddle.x = (canvas.width - paddleWidth) / 2;\r\n            }\r\n        }\r\n    }\r\n    if (rightPressed) {\r\n        paddle.x += dx;\r\n    }\r\n    else if (leftPressed) {\r\n        paddle.x += dy;\r\n    }\r\n    requestAnimationFrame(draw);\r\n}\r\ndocument.addEventListener(\"keydown\", keyDownHandler, false);\r\ndocument.addEventListener(\"keyup\", keyUpHandler, false);\r\ndocument.addEventListener(\"mousemove\", mouseMoveHandler, false);\r\nfunction mouseMoveHandler(e) {\r\n    var relativeX = e.clientX - canvas.offsetLeft;\r\n    if (relativeX > 0 && relativeX < canvas.width) {\r\n        paddleX = relativeX - paddleWidth / 2;\r\n    }\r\n}\r\nfunction keyDownHandler(e) {\r\n    if (e.key === \"Right\" || e.key === \"ArrowRight\") {\r\n        rightPressed = true;\r\n    }\r\n    else if (e.key === \"Left\" || e.key === \"ArrowLeft\") {\r\n        leftPressed = true;\r\n    }\r\n}\r\nfunction keyUpHandler(e) {\r\n    if (e.key === \"Right\" || e.key === \"ArrowRight\") {\r\n        rightPressed = false;\r\n    }\r\n    else if (e.key === \"Left\" || e.key === \"ArrowLeft\") {\r\n        leftPressed = false;\r\n    }\r\n}\r\nfunction collisionDetection() {\r\n    for (var c = 0; c < bricks.cols; c++) {\r\n        for (var r = 0; r < bricks.rows; r++) {\r\n            var b = bricks.bricks[c][r];\r\n            if (b.status === 1) {\r\n                if (ball.x > b.x &&\r\n                    ball.x < b.x + brickWidth &&\r\n                    ball.y > b.y &&\r\n                    ball.y < b.y + brickHeight) {\r\n                    console.log(bricks.bricks);\r\n                    ball.dy = -ball.dy;\r\n                    b.status = 0;\r\n                    scoreLabel.points += 1;\r\n                    if (score === bricks.cols * bricks.rows) {\r\n                        alert(\"YOU WIN, CONGRATULATIONS!\");\r\n                        document.location.reload();\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\ndraw();\r\n\n\n//# sourceURL=webpack://breakout1/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;