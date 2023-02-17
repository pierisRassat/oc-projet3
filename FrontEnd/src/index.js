import { initRadioInputs, handleRadioChange } from './handleRadioChange.js'
import { displayPortfolio } from './portfolio.js'
import displayPortfolioFilter from './categories.js'
import addLoginListener from './addLoginListener.js'

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
