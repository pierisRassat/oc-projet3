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

/***/ "./src/addWork/addAddWorkModalListener.js":
/*!************************************************!*\
  !*** ./src/addWork/addAddWorkModalListener.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addAddWorkButtonListener)\n/* harmony export */ });\n/* harmony import */ var _createAddWorkForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAddWorkForm.js */ \"./src/addWork/createAddWorkForm.js\");\n\n\nfunction addAddWorkButtonListener () {\n  const addWorkButton = document.querySelector('#add-work-btn')\n  const addWorkModal = document.querySelector('.add-work-modal')\n\n  addWorkButton.addEventListener('click', (event) => {\n    if (typeof (addWorkModal) !== 'undefined' || addWorkModal !== null) {\n      (0,_createAddWorkForm_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    }\n  })\n}\n\n\n//# sourceURL=webpack://frontend/./src/addWork/addAddWorkModalListener.js?");

/***/ }),

/***/ "./src/addWork/addWorkBackModaleListener.js":
/*!**************************************************!*\
  !*** ./src/addWork/addWorkBackModaleListener.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addWorkBackModaleListener)\n/* harmony export */ });\nfunction addWorkBackModaleListener (backBtn) {\n  backBtn.addEventListener('click', (event) => {\n    const addWorkModal = document.querySelector('.add-work-modal')\n    if (typeof (addWorkModal) !== 'undefined' && addWorkModal !== null) {\n      addWorkModal.remove()\n      const modal = document.querySelector('.modal')\n      modal.style.display = 'flex'\n    }\n  })\n}\n\n\n//# sourceURL=webpack://frontend/./src/addWork/addWorkBackModaleListener.js?");

/***/ }),

/***/ "./src/addWork/addWorkCloseModaleListener.js":
/*!***************************************************!*\
  !*** ./src/addWork/addWorkCloseModaleListener.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addWorkCloseModaleListener)\n/* harmony export */ });\nfunction addWorkCloseModaleListener (closeBtn) {\n  closeBtn.addEventListener('click', (event) => {\n    const addWorkModal = document.querySelector('.add-work-modal')\n    if (typeof (addWorkModal) !== 'undefined' && addWorkModal !== null) {\n      addWorkModal.remove()\n    }\n    const modal = document.querySelector('.modal')\n    if (typeof (modal) !== 'undefined' && modal !== null) {\n      modal.remove()\n    }\n  })\n}\n\n\n//# sourceURL=webpack://frontend/./src/addWork/addWorkCloseModaleListener.js?");

/***/ }),

/***/ "./src/addWork/addWorkWindowCloseModaleListener.js":
/*!*********************************************************!*\
  !*** ./src/addWork/addWorkWindowCloseModaleListener.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addWorkWindowCloseModaleListener)\n/* harmony export */ });\nfunction addWorkWindowCloseModaleListener () {\n  const addWorkModal = document.querySelector('.add-work-modal')\n\n  addWorkModal.addEventListener('click', (event) => {\n    if (event.target === addWorkModal) {\n      addWorkModal.remove()\n    }\n  })\n}\n\n\n//# sourceURL=webpack://frontend/./src/addWork/addWorkWindowCloseModaleListener.js?");

/***/ }),

/***/ "./src/addWork/createAddWorkForm.js":
/*!******************************************!*\
  !*** ./src/addWork/createAddWorkForm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createAddWorkModale)\n/* harmony export */ });\n/* harmony import */ var _addWorkWindowCloseModaleListener_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addWorkWindowCloseModaleListener.js */ \"./src/addWork/addWorkWindowCloseModaleListener.js\");\n/* harmony import */ var _addWorkBackModaleListener_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addWorkBackModaleListener.js */ \"./src/addWork/addWorkBackModaleListener.js\");\n/* harmony import */ var _addWorkCloseModaleListener_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addWorkCloseModaleListener.js */ \"./src/addWork/addWorkCloseModaleListener.js\");\n/* harmony import */ var _categories_requestCategories_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../categories/requestCategories.js */ \"./src/categories/requestCategories.js\");\n/* harmony import */ var _handleAddWorkForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handleAddWorkForm.js */ \"./src/addWork/handleAddWorkForm.js\");\n\n\n\n\n\n\nasync function getCategoriesData () {\n  const data = await (0,_categories_requestCategories_js__WEBPACK_IMPORTED_MODULE_3__.getCategories)()\n\n  console.log('data fetched in createAddWorkForm.js')\n\n  return data\n}\ngetCategoriesData()\n\nasync function createAddWorkModale () {\n  const addWorkModal = document.createElement('div')\n  addWorkModal.setAttribute('class', 'add-work-modal')\n\n  const addWorkWrapper = document.createElement('div')\n  addWorkWrapper.setAttribute('class', 'add-work-wrapper')\n\n  const addWorkTopButtonsContainer = document.createElement('div')\n  addWorkTopButtonsContainer.setAttribute('class', 'add-work-top-buttons-container')\n\n  const backBtn = document.createElement('button')\n  backBtn.setAttribute('class', 'add-work-back-arrow-btn')\n\n  const backBtnImg = document.createElement('img')\n  backBtnImg.setAttribute('src', './assets/icons/back_arrow.svg')\n\n  const closeBtn = document.createElement('button')\n  closeBtn.setAttribute('class', 'add-work-close-modal-btn')\n\n  const closeBtnImg = document.createElement('img')\n  closeBtnImg.setAttribute('src', './assets/icons/cross.svg')\n\n  const addWorkTitle = document.createElement('h2')\n  addWorkTitle.textContent = 'Ajout photo'\n\n  const addWorkForm = document.createElement('form')\n  addWorkForm.setAttribute('method', 'post')\n\n  const addWorkFileInputContainer = document.createElement('div')\n  addWorkFileInputContainer.setAttribute('class', 'add-work-file-input-container')\n  addWorkForm.appendChild(addWorkFileInputContainer)\n\n  const addWorkFileInputIcon = document.createElement('img')\n  addWorkFileInputIcon.setAttribute('src', './assets/icons/add_picture.svg')\n  addWorkFileInputIcon.setAttribute('class', 'add-work-file-input-icon')\n  addWorkFileInputContainer.appendChild(addWorkFileInputIcon)\n\n  const addWorkFileLabel = document.createElement('label')\n  addWorkFileLabel.setAttribute('for', 'add-work-file')\n  addWorkFileLabel.textContent = '+ Ajouter une photo'\n  addWorkFileInputContainer.appendChild(addWorkFileLabel)\n\n  const addWorkFileInput = document.createElement('input')\n  addWorkFileInput.setAttribute('type', 'file')\n  addWorkFileInput.setAttribute('name', 'add-work-file')\n  addWorkFileInput.setAttribute('id', 'add-work-file')\n  addWorkFileInput.setAttribute('accept', '.png, .jpg, .jpeg')\n  addWorkFileInput.setAttribute('required', '')\n  addWorkFileInputContainer.appendChild(addWorkFileInput)\n\n  const addWorkFileInputText = document.createElement('p')\n  addWorkFileInputText.textContent = 'jpg, png : 4mo max'\n  addWorkFileInputContainer.appendChild(addWorkFileInputText)\n\n  const addWorkTitleLabel = document.createElement('label')\n  addWorkTitleLabel.setAttribute('for', 'add-work-form-title')\n  addWorkTitleLabel.textContent = 'Titre'\n  addWorkForm.appendChild(addWorkTitleLabel)\n\n  const addWorkTitleInput = document.createElement('input')\n  addWorkTitleInput.setAttribute('type', 'text')\n  addWorkTitleInput.setAttribute('name', 'add-work-title-input')\n  addWorkTitleInput.setAttribute('id', 'add-work-title-input')\n  addWorkTitleInput.setAttribute('required', '')\n  addWorkForm.appendChild(addWorkTitleInput)\n\n  const addWorkCategorieLabel = document.createElement('label')\n  addWorkCategorieLabel.setAttribute('for', 'categorie')\n  addWorkCategorieLabel.textContent = 'Catégorie'\n  addWorkForm.appendChild(addWorkCategorieLabel)\n\n  const addWorkCategorieInput = document.createElement('select')\n  addWorkCategorieInput.setAttribute('id', 'add-work-categorie-select')\n  addWorkCategorieInput.setAttribute('required', '')\n  addWorkForm.appendChild(addWorkCategorieInput)\n\n  const addWorkCategorieSelectOptions = document.createElement('option')\n  addWorkCategorieSelectOptions.setAttribute('value', 'blank-value')\n  addWorkCategorieSelectOptions.textContent = ''\n  addWorkCategorieInput.appendChild(addWorkCategorieSelectOptions)\n\n  const data = await getCategoriesData()\n  data.forEach(category => {\n    const option = document.createElement('option')\n    option.value = category.id\n    option.textContent = category.name\n    addWorkCategorieInput.appendChild(option)\n  })\n\n  const submitButton = document.createElement('button')\n  submitButton.setAttribute('id', 'submit-button-add-work-form')\n  submitButton.textContent = 'Valider'\n\n  document.querySelector('body').appendChild(addWorkModal)\n  addWorkModal.appendChild(addWorkWrapper)\n  addWorkWrapper.appendChild(addWorkTopButtonsContainer)\n  addWorkTopButtonsContainer.appendChild(backBtn)\n  addWorkTopButtonsContainer.appendChild(closeBtn)\n  backBtn.appendChild(backBtnImg)\n  closeBtn.appendChild(closeBtnImg)\n  addWorkWrapper.appendChild(addWorkTitle)\n  addWorkWrapper.appendChild(addWorkForm)\n  addWorkWrapper.appendChild(submitButton)\n  ;(0,_addWorkBackModaleListener_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(backBtn)\n  ;(0,_addWorkCloseModaleListener_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(closeBtn)\n  ;(0,_addWorkWindowCloseModaleListener_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\n  const modal = document.querySelector('.modal')\n  modal.style.display = 'none'\n\n  if (typeof (addWorkModal) !== 'undefined' || addWorkModal !== null) {\n    (0,_handleAddWorkForm_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])() // fileInput is null (type error)\n  }\n}\n\n\n//# sourceURL=webpack://frontend/./src/addWork/createAddWorkForm.js?");

/***/ }),

/***/ "./src/addWork/handleAddWorkForm.js":
/*!******************************************!*\
  !*** ./src/addWork/handleAddWorkForm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAddWorkForm)\n/* harmony export */ });\n/* harmony import */ var _requestAddWork_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requestAddWork.js */ \"./src/addWork/requestAddWork.js\");\n\n\nfunction initAddWorkForm () {\n  const addWorkModal = document.querySelector('.modal-add-work')\n  if (!addWorkModal) {\n    return\n  }\n  const submitButton = document.querySelector('#submit-button-add-work-form')\n\n  function validateForm () {\n    const fileInput = document.querySelector('input[name=\"add-work-file\"]')\n    const titleInput = document.querySelector('input[name=\"add-work-title-input\"]')\n    const categorySelect = document.querySelector('select[id=\"add-work-categorie-select\"]')\n\n    if (fileInput.value && titleInput.value && categorySelect.value !== 'blank-value') {\n      submitButton.disabled = false\n      submitButton.style.backgroundColor = '#1d6154'\n      submitButton.style.border = '1px solid #1d6154'\n    } else {\n      submitButton.disabled = true\n      submitButton.style.backgroundColor = '#a7a7a7'\n      submitButton.style.border = '1px solid #a7a7a7'\n    }\n  }\n\n  function displayImagePreview () {\n    const fileInput = document.querySelector('input[name=\"add-work-file\"]')\n    const file = fileInput.files[0]\n\n    if (file) {\n      const reader = new FileReader()\n\n      reader.addEventListener('load', () => {\n        const image = new Image()\n        image.src = reader.result\n        image.setAttribute('class', 'add-work-preview-img')\n\n        image.addEventListener('load', () => {\n          const canvas = document.createElement('canvas')\n          const context = canvas.getContext('2d')\n\n          canvas.width = 129\n          canvas.height = (canvas.width / image.width) * image.height\n\n          context.drawImage(image, 0, 0, canvas.width, canvas.height)\n\n          const fileInputContainer = document.querySelector('.add-work-file-input-container')\n          const fileInputLabel = fileInputContainer.querySelector('label[for=\"add-work-file\"]')\n          const fileInputIcon = fileInputContainer.querySelector('.add-work-file-input-icon')\n          const fileInputDescription = fileInputContainer.querySelector('p')\n\n          fileInputLabel.style.display = 'none'\n          fileInputIcon.style.display = 'none'\n          fileInputDescription.style.display = 'none'\n\n          fileInputContainer.appendChild(image)\n        })\n      })\n\n      reader.readAsDataURL(file)\n    }\n  }\n\n  document.querySelectorAll('input, select').forEach((element) => {\n    element.addEventListener('change', () => {\n      validateForm()\n      if (element.name === 'add-work-file') {\n        displayImagePreview()\n      }\n    })\n  })\n\n  submitButton.addEventListener('click', (event) => {\n    event.preventDefault()\n    ;(0,_requestAddWork_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n  })\n}\n\n\n//# sourceURL=webpack://frontend/./src/addWork/handleAddWorkForm.js?");

/***/ }),

/***/ "./src/addWork/requestAddWork.js":
/*!***************************************!*\
  !*** ./src/addWork/requestAddWork.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addWork)\n/* harmony export */ });\n/* harmony import */ var _works_portfolio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../works/portfolio.js */ \"./src/works/portfolio.js\");\n\n\nasync function addWork () {\n  const endpointUrl = 'http://localhost:5678/api/works'\n\n  const formData = new FormData()\n\n  const titleInput = document.querySelector('input[name=\"add-work-title-input\"]')\n  const title = titleInput.value\n\n  const fileInput = document.querySelector('input[name=\"add-work-file\"]')\n  const file = fileInput.files[0]\n\n  const categorySelect = document.querySelector('select[id=\"add-work-categorie-select\"]')\n  const category = categorySelect.value\n\n  formData.append('title', title)\n  formData.append('image', file)\n  formData.append('category', category)\n\n  console.log(formData)\n\n  try {\n    const tokenStr = window.sessionStorage.getItem('token')\n    await fetch(endpointUrl, {\n      method: 'POST',\n      headers: {\n        Authorization: `Bearer ${tokenStr}`\n      },\n      body: formData\n    })\n    const addWorkModal = document.querySelector('.add-work-modal')\n    const modal = document.querySelector('.modal')\n    if (typeof addWorkModal !== 'undefined' && addWorkModal !== null) {\n      addWorkModal.remove()\n    }\n    if (typeof modal !== 'undefined' && modal !== null) {\n      modal.remove()\n    }\n    (0,_works_portfolio_js__WEBPACK_IMPORTED_MODULE_0__.displayPortfolio)()\n  } catch (error) {\n    console.error(error)\n  }\n}\n\n\n//# sourceURL=webpack://frontend/./src/addWork/requestAddWork.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _categories_handleRadioChange_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories/handleRadioChange.js */ \"./src/categories/handleRadioChange.js\");\n/* harmony import */ var _categories_categories_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories/categories.js */ \"./src/categories/categories.js\");\n/* harmony import */ var _works_portfolio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./works/portfolio.js */ \"./src/works/portfolio.js\");\n/* harmony import */ var _isLogged_isLogged_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isLogged/isLogged.js */ \"./src/isLogged/isLogged.js\");\n // init and handle portfolio filters\n // display portfolio filters\n // display portfolio gallery\n // check if the user is logged\n// import createAddWorkModale from './addWork/createAddWorkForm.js' // test for addWork modale\n\n(0,_isLogged_isLogged_js__WEBPACK_IMPORTED_MODULE_3__.checkLocalStorageToken)() // is user logged ?\n\nasync function displayFilters () { // display portfolio filters\n  await (0,_categories_categories_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n}\ndisplayFilters()\n\n;(0,_works_portfolio_js__WEBPACK_IMPORTED_MODULE_2__.displayPortfolio)() // display portfolio gallery\n\nasync function initButtons () { // init portfolio filters\n  await (0,_categories_handleRadioChange_js__WEBPACK_IMPORTED_MODULE_0__.initRadioInputs)()\n}\ninitButtons()\n\n;(0,_categories_handleRadioChange_js__WEBPACK_IMPORTED_MODULE_0__.handleRadioChange)() // handle portfolio filters\n\n\n//# sourceURL=webpack://frontend/./src/app.js?");

/***/ }),

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

/***/ "./src/deleteWork/addDeleteListener.js":
/*!*********************************************!*\
  !*** ./src/deleteWork/addDeleteListener.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addDeleteListeners)\n/* harmony export */ });\n/* harmony import */ var _requestDeleteWork_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requestDeleteWork.js */ \"./src/deleteWork/requestDeleteWork.js\");\n/* harmony import */ var _requestWorkNumber_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requestWorkNumber.js */ \"./src/deleteWork/requestWorkNumber.js\");\n\n\n\nasync function addDeleteListeners () {\n  const deleteButtons = document.querySelectorAll('.trash-icon-container')\n  const ids = await (0,_requestWorkNumber_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n\n  deleteButtons.forEach((button, index) => {\n    button.addEventListener('click', (event) => {\n      ;(0,_requestDeleteWork_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ids[index])\n    })\n  })\n}\n\n\n//# sourceURL=webpack://frontend/./src/deleteWork/addDeleteListener.js?");

/***/ }),

/***/ "./src/deleteWork/requestDeleteWork.js":
/*!*********************************************!*\
  !*** ./src/deleteWork/requestDeleteWork.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ deleteWork)\n/* harmony export */ });\n/* harmony import */ var _works_portfolio_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../works/portfolio.js */ \"./src/works/portfolio.js\");\n/* harmony import */ var _modalEditMode_createModale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modalEditMode/createModale.js */ \"./src/modalEditMode/createModale.js\");\n\n\n\nasync function deleteWork (listenerNumber) {\n  const endpointUrl = `http://localhost:5678/api/works/${listenerNumber}`\n\n  try {\n    const tokenStr = window.sessionStorage.getItem('token')\n    await fetch(endpointUrl, {\n      method: 'DELETE',\n      headers: {\n        Authorization: `Bearer ${tokenStr}`,\n        'Content-Type': 'application/json'\n      }\n    })\n    const modal = document.querySelector('.modal')\n    if (typeof (modal) !== 'undefined' || modal !== null) {\n      modal.remove()\n      ;(0,_modalEditMode_createModale_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n      ;(0,_works_portfolio_js__WEBPACK_IMPORTED_MODULE_0__.displayPortfolio)()\n    }\n  } catch (error) {\n    console.error(error)\n  }\n}\n\n\n//# sourceURL=webpack://frontend/./src/deleteWork/requestDeleteWork.js?");

/***/ }),

/***/ "./src/deleteWork/requestWorkNumber.js":
/*!*********************************************!*\
  !*** ./src/deleteWork/requestWorkNumber.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWorkNumber)\n/* harmony export */ });\nconst portfolioApiUrl = 'http://localhost:5678/api/works'\n\nasync function getWorkNumber () {\n  const response = await fetch(portfolioApiUrl, {\n    method: 'GET',\n    mode: 'cors',\n    'Content-Type': 'application/json;charset=utf-8'\n  })\n  if (!response.ok) {\n    throw new Error(`Error: ${response.status}`)\n  }\n  const data = await response.json()\n  const ids = data.map(({ id }) => id)\n  return ids\n}\n\n\n//# sourceURL=webpack://frontend/./src/deleteWork/requestWorkNumber.js?");

/***/ }),

/***/ "./src/isLogged/createEditionBanner.js":
/*!*********************************************!*\
  !*** ./src/isLogged/createEditionBanner.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEditionBanner)\n/* harmony export */ });\nfunction createEditionBanner () {\n  const divEditMode = document.querySelector('.edit-mode')\n\n  const section = document.createElement('section')\n  section.setAttribute('id', 'edition-mode-banner')\n\n  const editionModeTitle = document.createElement('div')\n  editionModeTitle.setAttribute('id', 'edition-mode-title')\n\n  const editionIcon = document.createElement('img')\n  editionIcon.setAttribute('src', './assets/icons/white-edit.svg')\n  editionIcon.setAttribute('alt', 'edition icon')\n\n  const editionModeTitleText = document.createElement('p')\n  editionModeTitleText.textContent = 'Mode édition'\n\n  const editionModePublishButton = document.createElement('button')\n  editionModePublishButton.textContent = 'publier les changements'\n\n  const header = document.querySelector('header')\n  header.style.marginTop = '96px'\n\n  editionModeTitle.appendChild(editionIcon)\n  editionModeTitle.appendChild(editionModeTitleText)\n  section.appendChild(editionModeTitle)\n  section.appendChild(editionModePublishButton)\n  divEditMode.appendChild(section)\n\n  return section\n}\n\n\n//# sourceURL=webpack://frontend/./src/isLogged/createEditionBanner.js?");

/***/ }),

/***/ "./src/isLogged/createEditionButtons.js":
/*!**********************************************!*\
  !*** ./src/isLogged/createEditionButtons.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createEditionButton\": () => (/* binding */ createEditionButton),\n/* harmony export */   \"createEditionProjectsButton\": () => (/* binding */ createEditionProjectsButton),\n/* harmony export */   \"replaceLoginElement\": () => (/* binding */ replaceLoginElement)\n/* harmony export */ });\nfunction createEditionButton () {\n  const divEditButton = document.querySelector('#introduction figure')\n  const fig = document.createElement('figcaption')\n  fig.setAttribute('id', 'btn-container')\n\n  const editionIcon = document.createElement('img')\n  editionIcon.setAttribute('src', './assets/icons/black-edit.svg')\n  editionIcon.setAttribute('alt', 'edition icon')\n\n  const editionModeTitleText = document.createElement('p')\n  editionModeTitleText.textContent = 'modifier'\n\n  fig.appendChild(editionIcon)\n  fig.appendChild(editionModeTitleText)\n  divEditButton.appendChild(fig)\n}\n\nfunction createEditionProjectsButton () {\n  const removedTitle = document.querySelector('#portfolio h2')\n  removedTitle.remove()\n\n  const copiedTitle = document.createElement('h2')\n  copiedTitle.textContent = 'Mes projets'\n\n  const container = document.createElement('div')\n  container.setAttribute('class', 'edit-projects-container')\n\n  const divEditButton = document.querySelector('.edit-projects-btn')\n\n  const navLink = document.createElement('button')\n  navLink.setAttribute('class', 'edit-projects-btn')\n\n  const editionIcon = document.createElement('img')\n  editionIcon.setAttribute('src', './assets/icons/black-edit.svg')\n  editionIcon.setAttribute('alt', 'edition icon')\n\n  const editionModeTitleText = document.createElement('p')\n  editionModeTitleText.textContent = 'modifier'\n\n  divEditButton.appendChild(copiedTitle)\n  divEditButton.appendChild(navLink)\n  navLink.appendChild(editionIcon)\n  navLink.appendChild(editionModeTitleText)\n}\n\nfunction replaceLoginElement () {\n  const loginButton = document.querySelector('nav ul li#login ')\n  loginButton.textContent = 'logout'\n}\n\n\n//# sourceURL=webpack://frontend/./src/isLogged/createEditionButtons.js?");

/***/ }),

/***/ "./src/isLogged/isLogged.js":
/*!**********************************!*\
  !*** ./src/isLogged/isLogged.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkLocalStorageToken\": () => (/* binding */ checkLocalStorageToken)\n/* harmony export */ });\n/* harmony import */ var _createEditionBanner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createEditionBanner.js */ \"./src/isLogged/createEditionBanner.js\");\n/* harmony import */ var _createEditionButtons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createEditionButtons.js */ \"./src/isLogged/createEditionButtons.js\");\n/* harmony import */ var _login_addLoginListener_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/addLoginListener.js */ \"./src/login/addLoginListener.js\");\n/* harmony import */ var _modalEditMode_addEditListener_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modalEditMode/addEditListener.js */ \"./src/modalEditMode/addEditListener.js\");\n\n\n\n\n\nfunction checkLocalStorageToken () {\n  const isTokenStored = window.sessionStorage.getItem('token')\n  if (isTokenStored) {\n    (0,_createEditionBanner_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    ;(0,_createEditionButtons_js__WEBPACK_IMPORTED_MODULE_1__.createEditionButton)()\n    ;(0,_createEditionButtons_js__WEBPACK_IMPORTED_MODULE_1__.createEditionProjectsButton)()\n    ;(0,_createEditionButtons_js__WEBPACK_IMPORTED_MODULE_1__.replaceLoginElement)()\n    ;(0,_modalEditMode_addEditListener_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n  } else {\n    (0,_login_addLoginListener_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n  }\n}\n\n\n//# sourceURL=webpack://frontend/./src/isLogged/isLogged.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handleLoginFormSubmit)\n/* harmony export */ });\nasync function handleLoginFormSubmit () {\n  const loginForm = document.querySelector('#login form')\n\n  loginForm.addEventListener('submit', async (event) => {\n    event.preventDefault()\n\n    const email = document.querySelector('#login input[type=\"email\"]').value\n    const password = document.querySelector('#login input[type=\"password\"]').value\n\n    const response = await fetch('http://localhost:5678/api/users/login', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({ email, password })\n    })\n\n    if (response.ok) {\n      const token = await response.json()\n      window.sessionStorage.setItem('token', token.token)\n      window.location.href = '.'\n    } else {\n      await response.json()\n      window.alert('Email ou mot de passe incorrect')\n    }\n  })\n}\n\n\n//# sourceURL=webpack://frontend/./src/login/requestLogin.js?");

/***/ }),

/***/ "./src/modalEditMode/addCloseModaleListener.js":
/*!*****************************************************!*\
  !*** ./src/modalEditMode/addCloseModaleListener.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addCloseModaleListener)\n/* harmony export */ });\nfunction addCloseModaleListener (closeBtn) {\n  closeBtn.addEventListener('click', (event) => {\n    const modal = document.querySelector('.modal')\n    if (typeof (modal) !== 'undefined' && modal !== null) {\n      modal.remove()\n    }\n  })\n}\n\n\n//# sourceURL=webpack://frontend/./src/modalEditMode/addCloseModaleListener.js?");

/***/ }),

/***/ "./src/modalEditMode/addEditListener.js":
/*!**********************************************!*\
  !*** ./src/modalEditMode/addEditListener.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addEditListener)\n/* harmony export */ });\n/* harmony import */ var _createModale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createModale.js */ \"./src/modalEditMode/createModale.js\");\n\n\nfunction addEditListener () {\n  const editButton = document.querySelector('.edit-projects-btn button')\n  const modal = document.querySelector('.modal')\n\n  editButton.addEventListener('click', (event) => {\n    if (typeof (modal) !== 'undefined' || modal !== null) {\n      (0,_createModale_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    }\n  })\n}\n\n\n//# sourceURL=webpack://frontend/./src/modalEditMode/addEditListener.js?");

/***/ }),

/***/ "./src/modalEditMode/addWindowCloseModaleListener.js":
/*!***********************************************************!*\
  !*** ./src/modalEditMode/addWindowCloseModaleListener.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addWindowCloseModaleListener)\n/* harmony export */ });\nfunction addWindowCloseModaleListener () {\n  const modal = document.querySelector('.modal')\n\n  modal.addEventListener('click', (event) => {\n    if (event.target === modal) {\n      modal.remove()\n    }\n  })\n}\n\n\n//# sourceURL=webpack://frontend/./src/modalEditMode/addWindowCloseModaleListener.js?");

/***/ }),

/***/ "./src/modalEditMode/clearThumbnailGallery.js":
/*!****************************************************!*\
  !*** ./src/modalEditMode/clearThumbnailGallery.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearThumbnailGallery)\n/* harmony export */ });\nfunction clearThumbnailGallery () {\n  const thumbnailGallery = document.querySelector('.thumbnail-portfolio-container')\n  if (typeof (thumbnailGallery) !== 'undefined' && thumbnailGallery !== null) {\n    thumbnailGallery.remove()\n  }\n}\n\n\n//# sourceURL=webpack://frontend/./src/modalEditMode/clearThumbnailGallery.js?");

/***/ }),

/***/ "./src/modalEditMode/createModale.js":
/*!*******************************************!*\
  !*** ./src/modalEditMode/createModale.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createModale)\n/* harmony export */ });\n/* harmony import */ var _addWindowCloseModaleListener_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addWindowCloseModaleListener.js */ \"./src/modalEditMode/addWindowCloseModaleListener.js\");\n/* harmony import */ var _portfolioThumbnails_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolioThumbnails.js */ \"./src/modalEditMode/portfolioThumbnails.js\");\n/* harmony import */ var _addCloseModaleListener_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addCloseModaleListener.js */ \"./src/modalEditMode/addCloseModaleListener.js\");\n/* harmony import */ var _addWork_addAddWorkModalListener_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addWork/addAddWorkModalListener.js */ \"./src/addWork/addAddWorkModalListener.js\");\n\n\n\n\n\nfunction createModale () {\n  const modal = document.createElement('div')\n  modal.setAttribute('class', 'modal')\n\n  const wrapper = document.createElement('div')\n  wrapper.setAttribute('class', 'wrapper')\n\n  const closeBtn = document.createElement('button')\n  closeBtn.setAttribute('class', 'close-modal-btn')\n\n  const closeBtnImg = document.createElement('img')\n  closeBtnImg.setAttribute('src', './assets/icons/cross.svg')\n\n  const title = document.createElement('h2')\n  title.textContent = 'Galerie photo'\n\n  const thumbnailPortfolio = document.createElement('div')\n  thumbnailPortfolio.setAttribute('class', 'thumbnail-portfolio-container')\n\n  const addWorkBtn = document.createElement('input')\n  addWorkBtn.setAttribute('id', 'add-work-btn')\n  addWorkBtn.setAttribute('type', 'submit')\n  addWorkBtn.setAttribute('value', 'Ajouter une photo')\n\n  const removeGalleryBtn = document.createElement('input')\n  removeGalleryBtn.setAttribute('class', 'remove-gallery-btn')\n  removeGalleryBtn.setAttribute('type', 'button')\n  removeGalleryBtn.setAttribute('value', 'Supprimer la gallerie')\n\n  document.querySelector('body').appendChild(modal)\n  modal.appendChild(wrapper)\n  wrapper.appendChild(closeBtn)\n  closeBtn.appendChild(closeBtnImg)\n  wrapper.appendChild(title)\n  wrapper.appendChild(thumbnailPortfolio, (0,_portfolioThumbnails_js__WEBPACK_IMPORTED_MODULE_1__.displayPortfolioThumbnails)())\n  wrapper.appendChild(addWorkBtn)\n  wrapper.appendChild(removeGalleryBtn)\n  title.focus()\n  ;(0,_addCloseModaleListener_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(closeBtn)\n  ;(0,_addWindowCloseModaleListener_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n  ;(0,_addWork_addAddWorkModalListener_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n}\n\n\n//# sourceURL=webpack://frontend/./src/modalEditMode/createModale.js?");

/***/ }),

/***/ "./src/modalEditMode/portfolioThumbnails.js":
/*!**************************************************!*\
  !*** ./src/modalEditMode/portfolioThumbnails.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayPortfolioThumbnails\": () => (/* binding */ displayPortfolioThumbnails)\n/* harmony export */ });\n/* harmony import */ var _deleteWork_addDeleteListener_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../deleteWork/addDeleteListener.js */ \"./src/deleteWork/addDeleteListener.js\");\n/* harmony import */ var _clearThumbnailGallery_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clearThumbnailGallery.js */ \"./src/modalEditMode/clearThumbnailGallery.js\");\n/* harmony import */ var _works_requestPortfolio_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../works/requestPortfolio.js */ \"./src/works/requestPortfolio.js\");\n\n\n\n\nconst displayPortfolioThumbnails = async categoryId => {\n  (0,_clearThumbnailGallery_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n  const portfolio = await (0,_works_requestPortfolio_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n  const elements = portfolio.filter(categoryId)\n  const gallery = document.querySelector('.thumbnail-portfolio-container')\n\n  elements.forEach(({ imageUrl, title }) => {\n    const trashIconContainer = document.createElement('div')\n    trashIconContainer.setAttribute('class', 'trash-icon-container')\n\n    const trashIcon = document.createElement('img')\n    trashIcon.setAttribute('class', 'trash-icon')\n    trashIcon.setAttribute('src', './assets/icons/trash.svg')\n\n    const fig = document.createElement('figure')\n    const image = document.createElement('img')\n    const caption = document.createElement('figcaption')\n\n    image.src = imageUrl\n    image.alt = title\n    caption.textContent = 'éditer'\n\n    gallery.appendChild(fig)\n    fig.appendChild(image)\n    fig.appendChild(trashIconContainer)\n    trashIconContainer.appendChild(trashIcon)\n    fig.appendChild(caption)\n  })\n  ;(0,_deleteWork_addDeleteListener_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n}\n\n\n//# sourceURL=webpack://frontend/./src/modalEditMode/portfolioThumbnails.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;