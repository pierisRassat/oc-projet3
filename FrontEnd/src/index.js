import { initRadioInputs, handleRadioChange } from './categories/handleRadioChange.js'
import { displayPortfolio } from './works/portfolio.js'
import displayPortfolioFilter from './categories/categories.js'
import addLoginListener from './login/addLoginListener.js'

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
