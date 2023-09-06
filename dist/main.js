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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function buildComponent(elem, text, attributes = {}) {\r\n  const element = document.createElement(`${elem}`);\r\n  element.innerText = text;\r\n\r\n  // Add attributes\r\n  for (const [key, value] of Object.entries(attributes)) {\r\n    element.setAttribute(key, value);\r\n  }\r\n\r\n  return element;\r\n}\r\n\r\nfunction appendComponent(targetSelector, component) {\r\n  const content = document.querySelector(targetSelector);\r\n  content.appendChild(component);\r\n}\r\n\r\nfunction createHeader() {\r\n  const headerComponent = buildComponent(\"header\", \"\");\r\n\r\n  const headerText = buildComponent(\"div\", \"Joe's Pizzaria\", { class: \"headerText\" });\r\n  const headerSubText = buildComponent(\"div\", \"(We're not a cult)\", { class: \"headerSubText\" })\r\n  const links = createNav();\r\n\r\n  headerComponent.appendChild(headerText);\r\n  headerComponent.appendChild(headerSubText);\r\n  headerComponent.appendChild(links);\r\n\r\n  appendComponent(\"#content\", headerComponent);\r\n}\r\n\r\nfunction createNav() {\r\n  const navComponent = buildComponent(\"nav\", \"\");\r\n\r\n  const link1 = buildComponent(\"button\", \"Home\");\r\n  const link2 = buildComponent(\"button\", \"Menu\");\r\n  const link3 = buildComponent(\"button\", \"Contact\");\r\n\r\n  navComponent.appendChild(link1);\r\n  navComponent.appendChild(link2);\r\n  navComponent.appendChild(link3);\r\n\r\n  return navComponent;\r\n}\r\n\r\nfunction createCopy() {\r\n  const copyComponent = buildComponent(\"div\", \"\", { class: \"copy\" });\r\n\r\n  const paragraph1 = buildComponent(\"p\", \"It started as an obsession\");\r\n  const paragraph2 = buildComponent(\"p\", \"But became my guiding light\");\r\n  const image = buildComponent(\"img\", \"\", {\r\n    src: \"./img/pizza-copy.webp\",\r\n    alt: \"pizza\",\r\n  });\r\n  const paragraph3 = buildComponent(\"p\", \"Order online, visit us, or join us!\");\r\n\r\n  copyComponent.appendChild(paragraph1);\r\n  copyComponent.appendChild(paragraph2);\r\n  copyComponent.appendChild(image);\r\n  copyComponent.appendChild(paragraph3);\r\n\r\n  appendComponent(\"#content\", copyComponent);\r\n}\r\n\r\nfunction createFooter() {\r\n  const footerComponent = buildComponent(\r\n    \"footer\",\r\n    \"\"\r\n  );\r\n\r\n  const copyrightText = buildComponent(\"div\", \"Copyright\")\r\n  const githubUsername = buildComponent(\"div\", \"willievaughn1004\")\r\n  const copyrightSymbol = buildComponent(\r\n    \"i\", \"\", { class: \"fa-regular fa-copyright\"}\r\n  );\r\n  const githubSymbol = buildComponent(\r\n    \"i\", \"\", { class: \"fa-brands fa-github\"}\r\n  );\r\n  \r\n  footerComponent.appendChild(copyrightText);\r\n  footerComponent.appendChild(copyrightSymbol);\r\n  footerComponent.appendChild(githubUsername);\r\n  footerComponent.appendChild(githubSymbol);\r\n\r\n  appendComponent(\"#content\", footerComponent);\r\n}\r\n\r\ncreateHeader();\r\ncreateCopy();\r\ncreateFooter();\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;