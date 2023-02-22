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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contactPage() {\n  const h1Contact = document.createTextNode('Contact  Us');\n  const pContact = document.createTextNode(\n    \"To order a stack of pizzas from Piece-a-Pizza, fax us on 000-123-pizza. We'll get them delivered in 9-12 business days.\"\n  );\n\n  return { h1Contact, pContact };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction homePage() {\n  const h1Home = document.createTextNode('Piece-of-Pizz');\n  const pHome = document.createTextNode(\n    'For us at Piece-a-Pizza, pizza is a piece of pizz.'\n  );\n\n  return { h1Home, pHome };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst h1Main = document.querySelector('#h1-main');\nconst pMain = document.querySelector('#p-main');\nconst nav = document.querySelector('nav');\n\nnav.addEventListener('click', changeContent);\n\nfunction changeContent(event) {\n  console.log(event.target);\n\n  console.log(h1Main);\n\n  if (event.target.id === 'Home') {\n    const homePageText = (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    console.log(homePageText.h1Home);\n    h1Main.replaceChildren(homePageText.h1Home);\n    pMain.replaceChildren(homePageText.pHome);\n  } else if (event.target.id === 'Menu') {\n    const menuPageText = (0,_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    console.log(menuPageText.h1Menu);\n    h1Main.replaceChildren(menuPageText.h1Menu);\n    pMain.replaceChildren(menuPageText.pMenu);\n  } else if (event.target.id === 'Contact') {\n    const contactPageText = (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    console.log(contactPageText.h1Contact);\n    h1Main.replaceChildren(contactPageText.h1Contact);\n    pMain.replaceChildren(contactPageText.pContact);\n  }\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menuPage() {\n  const h1Menu = document.createTextNode('Menu');\n  const pMenu = document.createTextNode(\n    \"We have one pizza and it's not the one in the image. It's just a base. No toppings. Just like nonna used to make. Cheap old witch.\"\n  );\n\n  return { h1Menu, pMenu };\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n// import homePage so I can retrieve homepage content on first page load\n\n\nfunction pageLoad() {\n  // get #content div\n  const content = document.querySelector('#content');\n\n  // create header with nav and page title\n  const header = document.createElement('header');\n\n  const h1Header = document.createElement('h1');\n  h1Header.innerText = 'Piece-a-Pizza';\n\n  const nav = document.createElement('nav');\n  const ul = document.createElement('ul');\n\n  const liHome = document.createElement('li');\n  liHome.innerText = 'Home';\n  liHome.id = 'Home';\n\n  const liMenu = document.createElement('li');\n  liMenu.innerText = 'Menu';\n  liMenu.id = 'Menu';\n\n  const liContact = document.createElement('li');\n  liContact.innerText = 'Contact';\n  liContact.id = 'Contact';\n\n  ul.append(liHome, liMenu, liContact);\n  nav.append(ul);\n  header.append(h1Header, nav);\n\n  // create main content section\n  const main = document.createElement('main');\n\n  // create h1 element for different page text nodes\n  const h1Main = document.createElement('h1');\n  h1Main.id = 'h1-main';\n\n  // create paragraph element for different page text nodes\n  const p = document.createElement('p');\n  p.id = 'p-main';\n\n  //create img element for main content section\n  const img = document.createElement('img');\n  img.src = '../src/pizza-hero.jpg';\n  img.alt = 'pizza';\n\n  // get object of text nodes for homepage and add text nodes to page\n  const homePageText = (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  h1Main.append(homePageText.h1Home);\n  p.append(homePageText.pHome);\n\n  // append homepage content to main section\n  main.append(h1Main, p, img);\n\n  // create footer\n  const footer = document.createElement('footer');\n  footer.innerText = 'Made by Kupa';\n\n  // append content to page\n  content.append(header, main, footer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageLoad);\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;