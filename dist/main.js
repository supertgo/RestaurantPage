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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_skeleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/skeleton */ \"./src/modules/skeleton.js\");\n/* harmony import */ var _modules_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n\n\n\n\nfunction initWebSite () {\n    (0,_modules_skeleton__WEBPACK_IMPORTED_MODULE_0__.default)();\n    (0,_modules_home__WEBPACK_IMPORTED_MODULE_1__.default)();\n    _modules_contact__WEBPACK_IMPORTED_MODULE_2__.default;\n\n    \n}\n\ninitWebSite();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contact =  (() => {\n\n    const divContentEl = document.querySelector('#content');\n\n    const divContact = document.createElement('div');\n    divContact.id = 'contact';\n\n    const h2 = document.createElement('h2');\n\n    divContact.appendChild(h2);\n\n    const iframe = document.createElement('iframe');\n    const divInnerContact = document.createElement('div');\n\n    iframe.src = \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.652224710078!2d-44.00136518510532!3d-19.939054943740068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6965ceade4c53%3A0x4980bb6236578f78!2sCEFET-MG%20-%20Campus%20Nova%20Gameleira!5e0!3m2!1spt-BR!2sbr!4v1613073521709!5m2!1spt-BR!2sbr\";\n    \n    iframe.width = '600px';\n    iframe.height = '450px';\n\n    iframe.id = 'mapa';\n    h2.textContent = 'teste';\n    divInnerContact.id = 'innerContact';\n\n    \n    divContentEl.appendChild(divContact);\n    divContact.appendChild(divInnerContact);\n    divInnerContact.appendChild(h2);\n    divContact.appendChild(iframe);\n})();\n\nfunction initContact (){\n    contact;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initContact);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createCopy (){\n\n    \n    const divContentEl = document.querySelector('#content');\n    \n\n    const divHome = document.createElement('div');\n\n    divHome.id = 'home';\n    const title = document.createElement('h2');\n    title.textContent = 'About';\n\n    const text = document.createElement('h3');\n    text.textContent =  'Easiest way to eat clean and healthy with brazilian food';\n\n    const btnOrder = document.createElement('button');\n    \n    btnOrder.id = 'btn';\n    btnOrder.textContent = 'ORDER NOW';\n\n\n    divContentEl.appendChild(divHome);\n    divHome.appendChild(title);\n    divHome.appendChild(text);\n    divHome.appendChild(btnOrder);\n}\n\nfunction homeInit(){\n    createCopy();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeInit);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/skeleton.js":
/*!*********************************!*\
  !*** ./src/modules/skeleton.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst topBar =  (() => {\n    \n    const titleWeb = document.createElement('h2'),\n        header = document.createElement('header'),\n        navBar = document.createElement('nav'),\n        headerUl = document.createElement('ul'),\n        firstLi = document.createElement('li'),\n        secondLi = document.createElement('li'),\n        thirdLi = document.createElement('li');\n\n    const divContentEl = document.querySelector('#content')\n    \n    divContentEl.appendChild(header);\n    \n    titleWeb.textContent = 'SuperTgo´s Restaurant';\n\n    header.appendChild(navBar);\n    header.appendChild(headerUl);\n    navBar.appendChild(titleWeb);\n    \n    headerUl.appendChild(thirdLi);\n    headerUl.appendChild(secondLi);\n    headerUl.appendChild(firstLi);\n\n    firstLi.classList.add('links');\n    secondLi.classList.add('links');\n    thirdLi.classList.add('links');\n\n    firstLi.textContent = 'Home';\n    secondLi.textContent = 'Menu';\n    thirdLi.textContent = 'Contact';\n\n    titleWeb.id = 'title';\n\n    //bottom bar\n\n    const bottomBar = document.createElement('div');\n    bottomBar.id = 'bottomBar';\n    const bottomBarUl = document.createElement('ul');\n    const credits = document.createElement('li');\n\n    divContentEl.appendChild(bottomBar);\n    bottomBar.appendChild(bottomBarUl);\n    bottomBarUl.appendChild(credits);\n\n    credits.textContent = 'Super Tgo';\n\n   \n    const gitLogo = document.createElement('img');\n\n    gitLogo.src = '/dist/images/GitHub-Mark-32px.png';\n\n    gitLogo.id  = 'gitLogo';\n    \n    bottomBar.appendChild(gitLogo);\n    \n    //How to create a pseudo tag a with an element\n    gitLogo.addEventListener('click', () => window.open('https://github.com/supertgo/RestaurantPage'));\n    \n\n})();\n\nfunction initSkeleton (){\n    topBar;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initSkeleton);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/skeleton.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;