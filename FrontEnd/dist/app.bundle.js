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

/***/ "./src/categories/categories.js":
/*!**************************************!*\
  !*** ./src/categories/categories.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendElements\": () => (/* binding */ appendElements),\n/* harmony export */   \"createDefaultRadioButton\": () => (/* binding */ createDefaultRadioButton),\n/* harmony export */   \"createRadioButton\": () => (/* binding */ createRadioButton),\n/* harmony export */   \"default\": () => (/* binding */ displayPortfolioFilter)\n/* harmony export */ });\n/* harmony import */ var _handleRadioChange_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleRadioChange.js */ \"./src/categories/handleRadioChange.js\");\n/* harmony import */ var _requestCategories_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requestCategories.js */ \"./src/categories/requestCategories.js\");\n\n\n\n\nfunction createButton (name, id, index) {\n  const input = document.createElement('input')\n  input.type = 'radio'\n  input.id = `radio${index}`\n  input.name = 'filterGroup'\n  input.value = id\n  input.addEventListener('change', _handleRadioChange_js__WEBPACK_IMPORTED_MODULE_0__.handleRadioChange)\n\n  const label = document.createElement('label')\n  label.htmlFor = input.id\n  label.textContent = name\n\n  return [input, label]\n}\n\nconst createRadioButton = (item, index) => createButton(item.name, item.id, index + 1)\nconst createDefaultRadioButton = () => createButton('Tous', '0', '1')\nconst appendElements = (elements, parent) => {\n  elements.forEach(element => parent.appendChild(element))\n}\n\nasync function displayPortfolioFilter () {\n  const data = await (0,_requestCategories_js__WEBPACK_IMPORTED_MODULE_1__.getCategories)()\n  const portfolioFilter = document.createElement('div')\n  portfolioFilter.classList.add('portfolio-filter')\n\n  const defaultRadioButton = createDefaultRadioButton()\n  appendElements(defaultRadioButton, portfolioFilter)\n\n  data.forEach((item, index) => {\n    const radioButton = createRadioButton(item, index + 1)\n    appendElements(radioButton, portfolioFilter)\n  })\n\n  const selector = document.querySelector('.filter-container')\n  selector.append(portfolioFilter)\n}\n\n\n\n\n//# sourceURL=webpack://frontend/./src/categories/categories.js?");

/***/ }),

/***/ "./src/categories/handleRadioChange.js":
/*!*********************************************!*\
  !*** ./src/categories/handleRadioChange.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleRadioChange\": () => (/* binding */ handleRadioChange),\n/* harmony export */   \"initRadioInputs\": () => (/* binding */ initRadioInputs)\n/* harmony export */ });\n/* harmony import */ var _works_portfolio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../works/portfolio.js */ \"./src/works/portfolio.js\");\n\n\nconst initRadioInputs = () => {\n  const inputs = Array.from(document.querySelectorAll('input[type=\"radio\"]'))\n  inputs.forEach(input => input.addEventListener('change', handleRadioChange))\n}\n\nconst handleRadioChange = (event) => {\n  if (!event || !event.target) return\n  const { value } = event.target\n  const categoryId = value === '0' ? null : Number(value)\n  ;(0,_works_portfolio_js__WEBPACK_IMPORTED_MODULE_0__.displayPortfolio)(categoryId)\n}\n\n\n\n\n//# sourceURL=webpack://frontend/./src/categories/handleRadioChange.js?");

/***/ }),

/***/ "./src/categories/requestCategories.js":
/*!*********************************************!*\
  !*** ./src/categories/requestCategories.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCategories\": () => (/* binding */ getCategories)\n/* harmony export */ });\nconst categoriesApiUrl = 'http://localhost:5678/api/categories'\n\nasync function getCategories () {\n  const response = await fetch(categoriesApiUrl, {\n    method: 'GET',\n    mode: 'cors',\n    'Content-Type': 'application/json;charset=utf-8'\n  })\n  if (!response.ok) {\n    throw new Error(`Error: ${response.status}`)\n  }\n\n  const categories = await response.json()\n\n  const categoriesSet = new Set()\n\n  categories.forEach(category => {\n    const categoryWithKey = { ...category, key: Date.now() } // Add unique property to each categorie\n    categoriesSet.add(categoryWithKey)\n  })\n\n  return Array.from(categoriesSet)\n}\n\n\n//# sourceURL=webpack://frontend/./src/categories/requestCategories.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _categories_handleRadioChange_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories/handleRadioChange.js */ \"./src/categories/handleRadioChange.js\");\n/* harmony import */ var _categories_categories_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories/categories.js */ \"./src/categories/categories.js\");\n/* harmony import */ var _works_portfolio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./works/portfolio.js */ \"./src/works/portfolio.js\");\n/* harmony import */ var _isLogged_isLogged_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isLogged/isLogged.js */ \"./src/isLogged/isLogged.js\");\n // init and handle portfolio filters\n // display portfolio filters\n // display portfolio gallery\n // check if the user is logged\n\n(0,_isLogged_isLogged_js__WEBPACK_IMPORTED_MODULE_3__.checkLocalStorageToken)() // is user logged ?\n\nasync function displayFilters () { // display portfolio filters\n  await (0,_categories_categories_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n}\ndisplayFilters()\n\n;(0,_works_portfolio_js__WEBPACK_IMPORTED_MODULE_2__.displayPortfolio)() // display portfolio gallery\n\nasync function initButtons () { // init portfolio filters\n  await (0,_categories_handleRadioChange_js__WEBPACK_IMPORTED_MODULE_0__.initRadioInputs)()\n}\ninitButtons()\n\n;(0,_categories_handleRadioChange_js__WEBPACK_IMPORTED_MODULE_0__.handleRadioChange)() // handle portfolio filters\n\n\n//# sourceURL=webpack://frontend/./src/index.js?");

/***/ }),

/***/ "./src/isLogged/createEditionBanner.js":
/*!*********************************************!*\
  !*** ./src/isLogged/createEditionBanner.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEditionBanner)\n/* harmony export */ });\nfunction createEditionBanner () {\n  const divEditMode = document.querySelector('.edit-mode')\n\n  const section = document.createElement('section')\n  section.setAttribute('id', 'edition-mode-banner')\n\n  const editionModeTitle = document.createElement('div')\n  editionModeTitle.setAttribute('id', 'edition-mode-title')\n\n  const editionIcon = document.createElement('img')\n  editionIcon.setAttribute('src', './assets/icons/white-edit.svg')\n  editionIcon.setAttribute('alt', 'edition icon')\n\n  const editionModeTitleText = document.createElement('p')\n  editionModeTitleText.textContent = 'Mode édition'\n\n  const editionModePublishButton = document.createElement('button')\n  editionModePublishButton.textContent = 'publier les changements'\n\n  editionModeTitle.appendChild(editionIcon)\n  editionModeTitle.appendChild(editionModeTitleText)\n  section.appendChild(editionModeTitle)\n  section.appendChild(editionModePublishButton)\n  divEditMode.appendChild(section)\n\n  return section\n}\n\n\n//# sourceURL=webpack://frontend/./src/isLogged/createEditionBanner.js?");

/***/ }),

/***/ "./src/isLogged/createEditionButtons.js":
/*!**********************************************!*\
  !*** ./src/isLogged/createEditionButtons.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createEditionButton\": () => (/* binding */ createEditionButton),\n/* harmony export */   \"createEditionProjectsButton\": () => (/* binding */ createEditionProjectsButton),\n/* harmony export */   \"replaceLoginElement\": () => (/* binding */ replaceLoginElement)\n/* harmony export */ });\nfunction createEditionButton () {\n  const divEditButton = document.querySelector('#introduction figure')\n  const fig = document.createElement('figcaption')\n  fig.setAttribute('id', 'btn-container')\n\n  const editionIcon = document.createElement('img')\n  editionIcon.setAttribute('src', './assets/icons/black-edit.svg')\n  editionIcon.setAttribute('alt', 'edition icon')\n\n  const editionModeTitleText = document.createElement('p')\n  editionModeTitleText.textContent = 'modifier'\n\n  fig.appendChild(editionIcon)\n  fig.appendChild(editionModeTitleText)\n  divEditButton.appendChild(fig)\n}\n\nfunction createEditionProjectsButton () {\n  const removedTitle = document.querySelector('#portfolio h2')\n  removedTitle.remove()\n\n  const copiedTitle = document.createElement('h2')\n  copiedTitle.textContent = 'Mes projets'\n\n  const container = document.createElement('div')\n  container.setAttribute('class', 'edit-projects-container')\n\n  const divEditButton = document.querySelector('.edit-projects-btn')\n\n  const navLink = document.createElement('a')\n  navLink.setAttribute('href', '#modaleWorks')\n\n  const editionIcon = document.createElement('img')\n  editionIcon.setAttribute('src', './assets/icons/black-edit.svg')\n  editionIcon.setAttribute('alt', 'edition icon')\n\n  const editionModeTitleText = document.createElement('p')\n  editionModeTitleText.textContent = 'modifier'\n\n  divEditButton.appendChild(copiedTitle)\n  divEditButton.appendChild(navLink)\n  navLink.appendChild(editionIcon)\n  navLink.appendChild(editionModeTitleText)\n}\n\nfunction replaceLoginElement () {\n  const loginButton = document.querySelector('nav ul li#login ')\n  loginButton.textContent = 'logout'\n\n}\n\n\n//# sourceURL=webpack://frontend/./src/isLogged/createEditionButtons.js?");

/***/ }),

/***/ "./src/isLogged/isLogged.js":
/*!**********************************!*\
  !*** ./src/isLogged/isLogged.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkLocalStorageToken\": () => (/* binding */ checkLocalStorageToken)\n/* harmony export */ });\n/* harmony import */ var _createEditionBanner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createEditionBanner.js */ \"./src/isLogged/createEditionBanner.js\");\n/* harmony import */ var _createEditionButtons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createEditionButtons.js */ \"./src/isLogged/createEditionButtons.js\");\n/* harmony import */ var _login_addLoginListener_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/addLoginListener.js */ \"./src/login/addLoginListener.js\");\n/* harmony import */ var _modalEditMode_addEditListener_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modalEditMode/addEditListener.js */ \"./src/modalEditMode/addEditListener.js\");\n\n\n\n\n\nfunction checkLocalStorageToken () {\n  const isTokenStored = window.localStorage.getItem('token')\n  if (isTokenStored) {\n    (0,_createEditionBanner_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    ;(0,_createEditionButtons_js__WEBPACK_IMPORTED_MODULE_1__.createEditionButton)()\n    ;(0,_createEditionButtons_js__WEBPACK_IMPORTED_MODULE_1__.createEditionProjectsButton)()\n    ;(0,_createEditionButtons_js__WEBPACK_IMPORTED_MODULE_1__.replaceLoginElement)()\n   ;(0,_modalEditMode_addEditListener_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n  } else {\n    (0,_login_addLoginListener_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n  }\n}\n\n\n//# sourceURL=webpack://frontend/./src/isLogged/isLogged.js?");

/***/ }),

/***/ "./src/login/addLoginListener.js":
/*!***************************************!*\
  !*** ./src/login/addLoginListener.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addLoginListener)\n/* harmony export */ });\n/* harmony import */ var _createLoginForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createLoginForm.js */ \"./src/login/createLoginForm.js\");\n/* harmony import */ var _requestLogin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requestLogin.js */ \"./src/login/requestLogin.js\");\n\n\n\nfunction addLoginListener () {\n  const loginButton = document.querySelector('nav ul li#login ')\n  const main = document.querySelector('main')\n\n  loginButton.addEventListener('click', () => {\n    while (main.firstChild) {\n      main.removeChild(main.firstChild)\n    }\n\n    main.appendChild((0,_createLoginForm_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\n\n    ;(0,_requestLogin_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n  })\n}\n\n\n//# sourceURL=webpack://frontend/./src/login/addLoginListener.js?");

/***/ }),

/***/ "./src/login/createLoginForm.js":
/*!**************************************!*\
  !*** ./src/login/createLoginForm.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createLoginForm)\n/* harmony export */ });\n/* harmony import */ var _requestLogin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requestLogin.js */ \"./src/login/requestLogin.js\");\n\n\nfunction createLoginForm () {\n  const section = document.createElement('section')\n  section.setAttribute('id', 'login')\n\n  const title = document.createElement('h2')\n  title.textContent = 'Log in'\n  section.appendChild(title)\n\n  const form = document.createElement('form')\n  form.setAttribute('method', 'post')\n\n  const emailLabel = document.createElement('label')\n  emailLabel.setAttribute('for', 'email')\n  emailLabel.textContent = 'E-mail'\n  form.appendChild(emailLabel)\n\n  const emailInput = document.createElement('input')\n  emailInput.setAttribute('type', 'email')\n  emailInput.setAttribute('name', 'email')\n  emailInput.setAttribute('id', 'email')\n  emailInput.setAttribute('required', '')\n  form.appendChild(emailInput)\n\n  const passLabel = document.createElement('label')\n  passLabel.setAttribute('for', 'pass')\n  passLabel.textContent = 'Mot de passe'\n  form.appendChild(passLabel)\n\n  const passInput = document.createElement('input')\n  passInput.setAttribute('type', 'password')\n  passInput.setAttribute('name', 'password')\n  passInput.setAttribute('id', 'pass')\n  passInput.setAttribute('required', '')\n  form.appendChild(passInput)\n\n  const submitInput = document.createElement('input')\n  submitInput.setAttribute('type', 'submit')\n  submitInput.setAttribute('id', 'submitLoginForm')\n  submitInput.setAttribute('value', 'Se connecter')\n  form.appendChild(submitInput)\n\n  section.appendChild(form)\n\n  const forgotPasswordLink = document.createElement('a')\n  forgotPasswordLink.setAttribute('href', 'forgoten-password')\n  forgotPasswordLink.textContent = 'Mot de passe oublié'\n  section.appendChild(forgotPasswordLink)\n\n  const selected = document.querySelector('nav ul li#login')\n  selected.style.fontWeight = 'bold' // create \"bold\" class\n\n  form.addEventListener('submit', _requestLogin_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n  return section\n}\n\n\n//# sourceURL=webpack://frontend/./src/login/createLoginForm.js?");

/***/ }),

/***/ "./src/login/requestLogin.js":
/*!***********************************!*\
  !*** ./src/login/requestLogin.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleLoginFormSubmit)\n/* harmony export */ });\nasync function handleLoginFormSubmit () {\n  const loginForm = document.querySelector('#login form')\n\n  loginForm.addEventListener('submit', async (event) => {\n    event.preventDefault()\n\n    const email = document.querySelector('#login input[type=\"email\"]').value\n    const password = document.querySelector('#login input[type=\"password\"]').value\n\n    const response = await fetch('http://localhost:5678/api/users/login', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({ email, password })\n    })\n\n    if (response.ok) {\n      const token = await response.json()\n      window.localStorage.setItem('token', token)\n      window.location.href = 'index.html'\n    } else {\n      const errorMessage = await response.json().message\n      window.alert('Email ou mot de passe incorrect')\n      window.message('Allo ?')\n      console.error(errorMessage)\n    }\n  })\n}\n\n\n//# sourceURL=webpack://frontend/./src/login/requestLogin.js?");

/***/ }),

/***/ "./src/modalEditMode/addEditListener.js":
/*!**********************************************!*\
  !*** ./src/modalEditMode/addEditListener.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addEditListener)\n/* harmony export */ });\n/* harmony import */ var _createModale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createModale.js */ \"./src/modalEditMode/createModale.js\");\n\n\nfunction addEditListener () {\n  const editButton = document.querySelector('.edit-projects-btn a')\n\n  editButton.addEventListener('click', () => {\n    ;(0,_createModale_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n  })\n}\n\n\n//# sourceURL=webpack://frontend/./src/modalEditMode/addEditListener.js?");

/***/ }),

/***/ "./src/modalEditMode/createModale.js":
/*!*******************************************!*\
  !*** ./src/modalEditMode/createModale.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createModale)\n/* harmony export */ });\n/* harmony import */ var _works_requestPortfolio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../works/requestPortfolio.js */ \"./src/works/requestPortfolio.js\");\n\n\nfunction createModale () {\n  const editButton = document.querySelector('.edit-projects-btn a')\n\n  const modal = document.createElement('div')\n  modal.setAttribute('class', 'modal')\n\n  const wrapper = document.createElement('div')\n  wrapper.setAttribute('class', 'wrapper')\n\n  const closeBtn = document.createElement('button')\n  closeBtn.setAttribute('class', 'close-modal-btn')\n\n  const closeBtnImg = document.createElement('img')\n  closeBtnImg.setAttribute('src', './assets/icons/cross.svg')\n\n  const title = document.createElement('h2')\n  title.textContent = 'Galerie photo'\n\n  const thumbnailPortfolio = document.createElement('div')\n  thumbnailPortfolio.setAttribute('class', 'thumbnail-portfolio-container')\n\n  const trashIconContainer = document.createElement('div')\n  trashIconContainer.setAttribute('class', 'trash-icon-container')\n\n  const trashIcon = document.createElement('img')\n  trashIcon.setAttribute('src', './assets/icons/trash.svg')\n\n  const addWorkBtn = document.createElement('input')\n  addWorkBtn.setAttribute('class', 'add-work-btn')\n  addWorkBtn.setAttribute('type', 'submit')\n  addWorkBtn.setAttribute('value', 'Ajouter une photo')\n\n  const removeGallery = document.createElement('input')\n  removeGallery.setAttribute('class', 'remove-gallery-btn')\n  removeGallery.setAttribute('type', 'button')\n  removeGallery.setAttribute('value', 'Supprimer la gallerie')\n\n  editButton.appendChild(modal)\n  modal.appendChild(wrapper)\n  wrapper.appendChild(closeBtn)\n  closeBtn.appendChild(closeBtnImg)\n  wrapper.appendChild(title)\n  wrapper.appendChild(thumbnailPortfolio)\n  wrapper.appendChild(trashIconContainer)\n  trashIconContainer.appendChild(trashIcon)\n  wrapper.appendChild(addWorkBtn)\n  wrapper.appendChild(removeGallery)\n}\n\n\n//# sourceURL=webpack://frontend/./src/modalEditMode/createModale.js?");

/***/ }),

/***/ "./src/works/clearGallery.js":
/*!***********************************!*\
  !*** ./src/works/clearGallery.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearGallery)\n/* harmony export */ });\nfunction clearGallery () {\n  const gallery = document.querySelector('.gallery')\n  if (typeof (gallery) !== 'undefined' && gallery !== null) {\n    while (gallery.firstChild) {\n      gallery.removeChild(gallery.firstChild)\n    }\n  } else {\n    console.error('gallery element is not set in DOM')\n  }\n}\n\n\n//# sourceURL=webpack://frontend/./src/works/clearGallery.js?");

/***/ }),

/***/ "./src/works/portfolio.js":
/*!********************************!*\
  !*** ./src/works/portfolio.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayPortfolio\": () => (/* binding */ displayPortfolio)\n/* harmony export */ });\n/* harmony import */ var _clearGallery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearGallery.js */ \"./src/works/clearGallery.js\");\n/* harmony import */ var _requestPortfolio_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requestPortfolio.js */ \"./src/works/requestPortfolio.js\");\n\n\n\nconst displayPortfolio = async categoryId => {\n  (0,_clearGallery_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n  const portfolio = await (0,_requestPortfolio_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n  const elements = portfolio.filter(categoryId)\n  const gallery = document.querySelector('.gallery')\n\n  elements.forEach(({ imageUrl, title }) => {\n    const fig = document.createElement('figure')\n    const image = document.createElement('img')\n    const caption = document.createElement('figcaption')\n\n    image.src = imageUrl\n    image.alt = title\n    caption.textContent = title.toUpperCase()\n\n    gallery.appendChild(fig)\n    fig.appendChild(image)\n    fig.appendChild(caption)\n  })\n}\n\n\n//# sourceURL=webpack://frontend/./src/works/portfolio.js?");

/***/ }),

/***/ "./src/works/requestPortfolio.js":
/*!***************************************!*\
  !*** ./src/works/requestPortfolio.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getPortfolio)\n/* harmony export */ });\nconst portfolioApiUrl = 'http://localhost:5678/api/works'\n\nasync function getPortfolio () {\n  const response = await fetch(portfolioApiUrl, {\n    method: 'GET',\n    mode: 'cors',\n    'Content-Type': 'application/json;charset=utf-8'\n  })\n  if (!response.ok) {\n    throw new Error(`Error: ${response.status}`)\n  }\n  return {\n    data: await response.json(),\n    filter: function (categoryId) {\n      return categoryId\n        ? this.data.filter(\n          ({ categoryId: id }) => id === categoryId)\n        : this.data\n    }\n  }\n}\n\n\n//# sourceURL=webpack://frontend/./src/works/requestPortfolio.js?");

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