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

/***/ "./src/circle.js":
/*!***********************!*\
  !*** ./src/circle.js ***!
  \***********************/
/***/ ((module) => {

eval("class Circle {\n    constructor(centerX, centerY, radius, color) {\n        this.centerX = centerX;\n        this.centerY = centerY;\n        this.radius = radius;\n        this.color = color;\n    }\n\n    static randomColor() {\n        const HEX_DIGITS = \"0123456789ABCDEF\";\n\n        let color = \"#\";\n        for (let i = 0; i < 6; i++) {\n            color += HEX_DIGITS[Math.floor(Math.random() * HEX_DIGITS.length)];\n        }\n\n        return color;\n    }\n\n    static randomCircle(maxY, maxX, numCircles) {\n        return new Circle(\n            maxX * Math.random(),\n            maxY * Math.random(),\n            Circle.radius(maxX, maxY, numCircles),\n            Circle.randomColor()\n        );\n    }\n\n    static radius(maxX, maxY, numCircles) {\n        let targetCircleArea = (maxX * maxY) / numCircles;\n        let targetRadius = Math.sqrt(targetCircleArea / Math.PI);\n        return 2 * targetRadius;\n    }\n\n    moveRandom(maxX, maxY) {\n        let dx = (Math.random() * 2) - 1;\n        let dy = (Math.random() * 2) - 1;\n\n        this.centerX = Math.abs((this.centerX + (dx * this.radius * 0.1)) % maxX);\n        this.centerY = Math.abs((this.centerY + (dy * this.radius) * 0.1) % maxY);\n    }\n\n    render(ctx) {\n        ctx.fillStyle = this.color;\n        ctx.beginPath();\n\n        ctx.arc(\n            this.centerX,\n            this.centerY,\n            this.radius,\n            0,\n            2 * Math.PI,\n            false\n        );\n\n        ctx.fill();\n    }\n}\n\nmodule.exports = Circle;\n\n//# sourceURL=webpack://drunken_circles/./src/circle.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Circle = __webpack_require__(/*! ./circle.js */ \"./src/circle.js\");\n\nconst circles = [];\nconsole.log(circles);\nwindow.Game = function(xDim, yDim) {\n    this.xDim = xDim;\n    this.yDim = yDim;\n\n    for (let i = 0; i < Game.NUM_CIRCLES; ++i) {\n        circles.push(\n            Circle.randomCircle(xDim, yDim, Game.NUM_CIRCLES)\n        );\n    }\n};\n\nGame.NUM_CIRCLES = 100;\n\nGame.prototype.render = function(ctx) {\n    //this will empty the canvas\n    ctx.clearRect(0, 0, this.xDim, this.yDim);\n\n    circles.forEach(function(circle) {\n        circle.render(ctx);\n    });\n};\n\nGame.prototype.moveCircles = function() {\n    circles.forEach(circle => {\n        circle.moveRandom(this.xDim, this.yDim);\n    });\n};\n\nGame.prototype.start = function(canvasEl) {\n    // get a 2d canvas drawing context. The canvas API lets us call\n    // a `getContext` method on a canvas DOM element.\n    const ctx = canvasEl.getContext(\"2d\");\n\n    //this function will update the position of all the circles,\n    //clear the canvas, and redraw them\n    const animateCallback = () => {\n        this.moveCircles();\n        this.render(ctx);\n        //this will call our animateCallback again, but only when the browser\n        //is ready, usually every 1/60th of a second\n\n        //if we didn't know about requestAnimationFrame, we could use setTimeout\n        setTimeout(animateCallback, 1000 / 60);\n    };\n\n    //this will cause the first render and start the endless triggering of\n    //the function using requestAnimationFrame\n    animateCallback();\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack://drunken_circles/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\nconst canvasEl = document.getElementsByTagName(\"canvas\")[0];\ncanvasEl.height = window.innerHeight;\ncanvasEl.width = window.innerWidth;\nnew Game(\n    canvasEl.width,\n    canvasEl.height\n).start(canvasEl);\n\n//# sourceURL=webpack://drunken_circles/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;