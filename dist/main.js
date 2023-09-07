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

/***/ "./src/components.js":
/*!***************************!*\
  !*** ./src/components.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appendComponent: () => (/* binding */ appendComponent),\n/* harmony export */   buildComponent: () => (/* binding */ buildComponent)\n/* harmony export */ });\nconst buildComponent = (elem, text, attributes = {}) => {\r\n  const element = document.createElement(`${elem}`);\r\n  element.innerText = text;\r\n\r\n  // Add attributes\r\n  for (const [key, value] of Object.entries(attributes)) {\r\n    element.setAttribute(key, value);\r\n  }\r\n\r\n  return element;\r\n}\r\n\r\nconst appendComponent = (targetSelector, component) => {\r\n  const content = document.querySelector(targetSelector);\r\n  content.appendChild(component);\r\n}\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/components.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components.js */ \"./src/components.js\");\n\r\n\r\nfunction createHeader() {\r\n  const headerComponent = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"header\", \"\");\r\n\r\n  const headerText = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"div\", \"Joe's Pizzaria\", {\r\n    class: \"headerText\",\r\n  });\r\n  const headerSubText = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"div\", \"(We're not a cult)\", {\r\n    class: \"headerSubText\",\r\n  });\r\n  const links = createNav();\r\n\r\n  headerComponent.appendChild(headerText);\r\n  headerComponent.appendChild(headerSubText);\r\n  headerComponent.appendChild(links);\r\n\r\n  (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.appendComponent)(\"#content\", headerComponent);\r\n}\r\n\r\nfunction createNav() {\r\n  const navComponent = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"nav\", \"\");\r\n\r\n  const link1 = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"button\", \"Home\");\r\n  const link2 = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"button\", \"Menu\");\r\n  const link3 = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"button\", \"Contact\");\r\n\r\n  navComponent.appendChild(link1);\r\n  navComponent.appendChild(link2);\r\n  navComponent.appendChild(link3);\r\n\r\n  return navComponent;\r\n}\r\n\r\nfunction createCopy() {\r\n  const copyComponent = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"div\", \"\", { class: \"copy\" });\r\n\r\n  const paragraph1 = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"p\", \"It started as an obsession\");\r\n  const paragraph2 = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"p\", \"But became my guiding light\");\r\n  const image = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"img\", \"\", {\r\n    src: \"./img/pizza-copy.webp\",\r\n    alt: \"pizza\",\r\n  });\r\n  const paragraph3 = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"p\", \"Order online, visit us, or join us!\");\r\n\r\n  copyComponent.appendChild(paragraph1);\r\n  copyComponent.appendChild(paragraph2);\r\n  copyComponent.appendChild(image);\r\n  copyComponent.appendChild(paragraph3);\r\n\r\n  (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.appendComponent)(\"#content\", copyComponent);\r\n}\r\n\r\nfunction createFooter() {\r\n  const footerComponent = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"footer\", \"\");\r\n\r\n  const copyrightText = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"div\", \"Copyright\");\r\n  const githubUsername = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"div\", \"willievaughn1004\");\r\n  const copyrightSymbol = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"i\", \"\", {\r\n    class: \"fa-regular fa-copyright\",\r\n  });\r\n  const githubSymbol = (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.buildComponent)(\"i\", \"\", {\r\n    class: \"fa-brands fa-github\",\r\n  });\r\n\r\n  footerComponent.appendChild(copyrightText);\r\n  footerComponent.appendChild(copyrightSymbol);\r\n  footerComponent.appendChild(githubUsername);\r\n  footerComponent.appendChild(githubSymbol);\r\n\r\n  (0,_components_js__WEBPACK_IMPORTED_MODULE_0__.appendComponent)(\"#content\", footerComponent);\r\n}\r\n\r\nconst createHomePage = () => {\r\n  createHeader();\r\n  createCopy();\r\n  createFooter();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n\r\n// import { buildComponent, appendComponent } from \"./components.js\"\r\n\r\n\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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