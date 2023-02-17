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

/***/ "./src/addLoginListener.js":
/*!*********************************!*\
  !*** ./src/addLoginListener.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addLoginListener)\n/* harmony export */ });\n/* harmony import */ var _createLoginForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createLoginForm.js */ \"./src/createLoginForm.js\");\n\n\nfunction addLoginListener () {\n  const loginButton = document.querySelector('nav ul li#login')\n  const main = document.querySelector('main')\n\n  loginButton.addEventListener('click', () => {\n    while (main.firstChild) {\n      main.removeChild(main.firstChild)\n    }\n\n    main.appendChild((0,_createLoginForm_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\n  })\n}\n\n\n//# sourceURL=webpack://frontend/./src/addLoginListener.js?");

/***/ }),

/***/ "./src/categories.js":
/*!***************************!*\
  !*** ./src/categories.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendElements\": () => (/* binding */ appendElements),\n/* harmony export */   \"createDefaultRadioButton\": () => (/* binding */ createDefaultRadioButton),\n/* harmony export */   \"createRadioButton\": () => (/* binding */ createRadioButton),\n/* harmony export */   \"default\": () => (/* binding */ displayPortfolioFilter)\n/* harmony export */ });\n/* harmony import */ var _handleRadioChange_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleRadioChange.js */ \"./src/handleRadioChange.js\");\n/* harmony import */ var _getCategories_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCategories.js */ \"./src/getCategories.js\");\n\n\n\n\nfunction createButton (name, id, index) {\n  const input = document.createElement('input')\n  input.type = 'radio'\n  input.id = `radio${index}`\n  input.name = 'filterGroup'\n  input.value = id\n  input.addEventListener('change', _handleRadioChange_js__WEBPACK_IMPORTED_MODULE_0__.handleRadioChange)\n\n  const label = document.createElement('label')\n  label.htmlFor = input.id\n  label.textContent = name\n\n  return [input, label]\n}\n\nconst createRadioButton = (item, index) => createButton(item.name, item.id, index + 1)\nconst createDefaultRadioButton = () => createButton('Tous', '0', '1')\nconst appendElements = (elements, parent) => {\n  elements.forEach(element => parent.appendChild(element))\n}\n\nasync function displayPortfolioFilter () {\n  const data = await (0,_getCategories_js__WEBPACK_IMPORTED_MODULE_1__.getCategories)()\n  const portfolioFilter = document.createElement('div')\n  portfolioFilter.classList.add('portfolio-filter')\n\n  const defaultRadioButton = createDefaultRadioButton()\n  appendElements(defaultRadioButton, portfolioFilter)\n\n  data.forEach((item, index) => {\n    const radioButton = createRadioButton(item, index + 1)\n    appendElements(radioButton, portfolioFilter)\n  })\n\n  const selector = document.querySelector('.filter-container')\n  selector.append(portfolioFilter)\n}\n\n\n\n\n//# sourceURL=webpack://frontend/./src/categories.js?");

/***/ }),

/***/ "./src/clearGallery.js":
/*!*****************************!*\
  !*** ./src/clearGallery.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearGallery)\n/* harmony export */ });\nfunction clearGallery () {\n  const gallery = document.querySelector('.gallery')\n  if (typeof (gallery) !== 'undefined' && gallery !== null) {\n    while (gallery.firstChild) {\n      gallery.removeChild(gallery.firstChild)\n    }\n  } else {\n    console.error('gallery element is not set in DOM')\n  }\n}\n\n\n//# sourceURL=webpack://frontend/./src/clearGallery.js?");

/***/ }),

/***/ "./src/createLoginForm.js":
/*!********************************!*\
  !*** ./src/createLoginForm.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createLoginForm)\n/* harmony export */ });\nfunction createLoginForm () {\n\n  const section = document.createElement('section')\n  section.setAttribute('id', 'login')\n\n  const title = document.createElement('h2')\n  title.textContent = 'Log in'\n  section.appendChild(title)\n\n  const form = document.createElement('form')\n  form.setAttribute('action', './src/login.js')\n  form.setAttribute('method', 'post')\n\n  const emailLabel = document.createElement('label')\n  emailLabel.setAttribute('for', 'email')\n  emailLabel.textContent = 'E-mail'\n  form.appendChild(emailLabel)\n\n  const emailInput = document.createElement('input')\n  emailInput.setAttribute('type', 'email')\n  emailInput.setAttribute('name', 'email')\n  emailInput.setAttribute('id', 'email')\n  emailInput.setAttribute('required', '')\n  form.appendChild(emailInput)\n\n  const passLabel = document.createElement('label')\n  passLabel.setAttribute('for', 'pass')\n  passLabel.textContent = 'Mot de passe'\n  form.appendChild(passLabel)\n\n  const passInput = document.createElement('input')\n  passInput.setAttribute('type', 'password')\n  passInput.setAttribute('name', 'password')\n  passInput.setAttribute('id', 'pass')\n  passInput.setAttribute('required', '')\n  form.appendChild(passInput)\n\n  const submitInput = document.createElement('input')\n  submitInput.setAttribute('type', 'submit')\n  submitInput.setAttribute('value', 'Se connecter')\n  form.appendChild(submitInput)\n\n  section.appendChild(form)\n\n  const forgotPasswordLink = document.createElement('a')\n  forgotPasswordLink.setAttribute('href', 'forgoten-password')\n  forgotPasswordLink.textContent = 'Mot de passe oublié'\n  section.appendChild(forgotPasswordLink)\n\n  const selected = document.querySelector('nav ul li#login')\n  selected.style.fontWeight = 'bold'\n\n  return section\n}\n\n\n//# sourceURL=webpack://frontend/./src/createLoginForm.js?");

/***/ }),

/***/ "./src/getCategories.js":
/*!******************************!*\
  !*** ./src/getCategories.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCategories\": () => (/* binding */ getCategories)\n/* harmony export */ });\nconst categoriesApiUrl = 'http://localhost:5678/api/categories'\n\nasync function getCategories () {\n  const response = await fetch(categoriesApiUrl, {\n    method: 'GET',\n    mode: 'cors'\n  })\n  if (!response.ok) {\n    throw new Error(`Error: ${response.status}`)\n  }\n\n  const categories = await response.json()\n\n  const categoriesSet = new Set()\n\n  categories.forEach(category => {\n    const categoryWithKey = { ...category, key: Date.now() } // Add unique property to each categorie\n    categoriesSet.add(categoryWithKey)\n  })\n\n  return Array.from(categoriesSet)\n}\n\n\n//# sourceURL=webpack://frontend/./src/getCategories.js?");

/***/ }),

/***/ "./src/getPortfolio.js":
/*!*****************************!*\
  !*** ./src/getPortfolio.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getPortfolio)\n/* harmony export */ });\nconst portfolioApiUrl = 'http://localhost:5678/api/works'\n\nasync function getPortfolio () {\n  const response = await fetch(portfolioApiUrl, {\n    method: 'GET',\n    mode: 'cors'\n  })\n  if (!response.ok) {\n    throw new Error(`Error: ${response.status}`)\n  }\n  return {\n    data: await response.json(),\n    filter: function (categoryId) {\n      return categoryId\n        ? this.data.filter(\n          ({ categoryId: id }) => id === categoryId)\n        : this.data\n    }\n  }\n}\n\n\n//# sourceURL=webpack://frontend/./src/getPortfolio.js?");

/***/ }),

/***/ "./src/handleRadioChange.js":
/*!**********************************!*\
  !*** ./src/handleRadioChange.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleRadioChange\": () => (/* binding */ handleRadioChange),\n/* harmony export */   \"initRadioInputs\": () => (/* binding */ initRadioInputs)\n/* harmony export */ });\n/* harmony import */ var _portfolio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portfolio.js */ \"./src/portfolio.js\");\n\n\nconst initRadioInputs = () => {\n  const inputs = Array.from(document.querySelectorAll('input[type=\"radio\"]'))\n  inputs.forEach(input => input.addEventListener('change', handleRadioChange))\n  console.log('Input from button:', inputs)\n//   document.querySelector('input[value=\"0\"]').checked = true\n}\n\nconst handleRadioChange = (event) => {\n  console.log('handleRadioChange called')\n  if (!event || !event.target) return\n  const { value } = event.target\n  console.log(`Value selected: ${value}`)\n  const categoryId = value === '0' ? null : Number(value)\n  ;(0,_portfolio_js__WEBPACK_IMPORTED_MODULE_0__.displayPortfolio)(categoryId) // Appelle la fonction \"displayPortfolio\" en lui passant l'ID de la catégorie\n}\n\n\n\n\n//# sourceURL=webpack://frontend/./src/handleRadioChange.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _handleRadioChange_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleRadioChange.js */ \"./src/handleRadioChange.js\");\n/* harmony import */ var _portfolio_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio.js */ \"./src/portfolio.js\");\n/* harmony import */ var _categories_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories.js */ \"./src/categories.js\");\n/* harmony import */ var _addLoginListener_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addLoginListener.js */ \"./src/addLoginListener.js\");\n\n\n\n\n\n(0,_addLoginListener_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n\nasync function displayFilters () {\n  await (0,_categories_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n}\ndisplayFilters()\n\n;(0,_portfolio_js__WEBPACK_IMPORTED_MODULE_1__.displayPortfolio)()\n\nasync function initButtons () {\n  await (0,_handleRadioChange_js__WEBPACK_IMPORTED_MODULE_0__.initRadioInputs)()\n}\ninitButtons()\n\n;(0,_handleRadioChange_js__WEBPACK_IMPORTED_MODULE_0__.handleRadioChange)()\n\n\n//# sourceURL=webpack://frontend/./src/index.js?");

/***/ }),

/***/ "./src/portfolio.js":
/*!**************************!*\
  !*** ./src/portfolio.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayPortfolio\": () => (/* binding */ displayPortfolio)\n/* harmony export */ });\n/* harmony import */ var _clearGallery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearGallery.js */ \"./src/clearGallery.js\");\n/* harmony import */ var _getPortfolio_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getPortfolio.js */ \"./src/getPortfolio.js\");\n\n\n\nconst displayPortfolio = async categoryId => {\n  (0,_clearGallery_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n  const portfolio = await (0,_getPortfolio_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n  const elements = portfolio.filter(categoryId)\n  const gallery = document.querySelector('.gallery')\n\n  elements.forEach(({ imageUrl, title }) => {\n    const fig = document.createElement('figure')\n    const image = document.createElement('img')\n    const caption = document.createElement('figcaption')\n\n    image.src = imageUrl\n    image.alt = title\n    caption.textContent = title.toUpperCase()\n\n    gallery.appendChild(fig)\n    fig.appendChild(image)\n    fig.appendChild(caption)\n  })\n}\n\n\n//# sourceURL=webpack://frontend/./src/portfolio.js?");

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