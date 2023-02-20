import { initRadioInputs, handleRadioChange } from './categories/handleRadioChange.js'
import { displayPortfolio } from './works/portfolio.js'
import displayPortfolioFilter from './categories/categories.js'
import addLoginListener from './login/addLoginListener.js'
// import handleLoginFormSubmit from './login/testLoginForm.js'
// import handleLoginFormSubmit from './login/authApi.js'
// 
// const loginForm = document.querySelector('nav ul li#login')
// 
// loginForm.addEventListener('submit', (event) => {
//   event.preventDefault()
//   handleLoginFormSubmit(event)
// })

addLoginListener()

async function displayFilters () {
  await displayPortfolioFilter()
}
displayFilters()

displayPortfolio()

async function initButtons () {
  await initRadioInputs()
}
initButtons()

handleRadioChange()

// handleLoginFormSubmit()
