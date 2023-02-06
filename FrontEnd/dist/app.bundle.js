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

/***/ "./src/filter.js":
/*!***********************!*\
  !*** ./src/filter.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst filterPortfolio = categoryId => portfolio =>\n  categoryId\n    ? portfolio.filter(({ categoryId: id }) => id === categoryId)\n    : portfolio\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterPortfolio);\n\n\n//# sourceURL=webpack://frontend/./src/filter.js?");

/***/ }),

/***/ "./src/portfolio.js":
/*!**************************!*\
  !*** ./src/portfolio.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _query_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query.js */ \"./src/query.js\");\n/* harmony import */ var _filter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter.js */ \"./src/filter.js\");\n\n\n\nconst displayPortfolio = async categoryId => {\n  const portfolio = await (0,_query_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n  const filtered = (0,_filter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(categoryId)(portfolio)\n  const elements = Array.from(filtered)\n  const gallery = document.getElementsByClassName('gallery')[0]\n\n  while (gallery.firstChild) {\n    gallery.removeChild(gallery.firstChild)\n  }\n\n  elements.forEach(({ imageUrl, title }) => {\n    const fig = document.createElement('figure')\n    const image = document.createElement('img')\n    const caption = document.createElement('figcaption')\n\n    image.src = imageUrl\n    image.alt = title\n    caption.textContent = title.toUpperCase()\n\n    gallery.appendChild(fig)\n    fig.appendChild(image)\n    fig.appendChild(caption)\n  })\n}\n\nconst handleRadioChange = ({ target: { value } }) => {\n  const categoryId = value === '0' ? null : Number(value)\n  displayPortfolio(categoryId)\n}\n\nconst inputs = Array.from(document.querySelectorAll('input[type=\"radio\"]'))\ninputs.forEach(input => input.addEventListener('change', handleRadioChange))\n\ndocument.querySelector('input[value=\"0\"]').checked = true\ndisplayPortfolio()\n\n// const portfolioApiUrl = 'http://localhost:5678/api/works'\n// const handleError = error => {\n//   console.error(error)\n// }\n// \n// const fetchPortfolio = async () => {\n//   try {\n//     const response = await fetch(portfolioApiUrl, {\n//       method: 'GET',\n//       mode: 'cors'\n//     })\n//     if (!response.ok) {\n//       throw new Error(`Error: ${response.status}`)\n//     }\n//     return response.json()\n//   } catch (error) {\n//     handleError(error)\n//   }\n// }\n// \n// const filterPortfolio = categoryId => portfolio =>\n//   categoryId\n//     ? portfolio.filter(({ categoryId: id }) => id === categoryId)\n//     : portfolio\n// \n// const displayPortfolio = async categoryId => {\n//   const portfolio = await fetchPortfolio()\n//   const filtered = filterPortfolio(categoryId)(portfolio)\n//   const elements = Array.from(filtered)\n//   const gallery = document.getElementsByClassName('gallery')[0]\n// \n//   while (gallery.firstChild) {\n//     gallery.removeChild(gallery.firstChild)\n//   }\n// \n//   elements.forEach(({ imageUrl, title }) => {\n//     const fig = document.createElement('figure')\n//     const image = document.createElement('img')\n//     const caption = document.createElement('figcaption')\n// \n//     image.src = imageUrl\n//     image.alt = title\n//     caption.textContent = title.toUpperCase()\n// \n//     gallery.appendChild(fig)\n//     fig.appendChild(image)\n//     fig.appendChild(caption)\n//   })\n// }\n// \n// const handleRadioChange = ({ target: { value } }) => {\n//   const categoryId = value === '0' ? null : Number(value)\n//   displayPortfolio(categoryId)\n// }\n// \n// const inputs = Array.from(document.querySelectorAll('input[type=\"radio\"]'))\n// inputs.forEach(input => input.addEventListener('change', handleRadioChange))\n// \n// document.querySelector('input[value=\"0\"]').checked = true\n// displayPortfolio().catch(handleError)\n\n\n//# sourceURL=webpack://frontend/./src/portfolio.js?");

/***/ }),

/***/ "./src/query.js":
/*!**********************!*\
  !*** ./src/query.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getPortfolio)\n/* harmony export */ });\nconst portfolioApiUrl = 'http://localhost:5678/api/works'\n\nasync function getPortfolio () {\n  const response = await fetch(portfolioApiUrl, {\n    method: 'GET',\n    mode: 'cors'\n  })\n  if (!response.ok) {\n    throw new Error(`Error: ${response.status}`)\n  }\n  return response.json()\n}\n\n\n//# sourceURL=webpack://frontend/./src/query.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/portfolio.js");
/******/ 	
/******/ })()
;