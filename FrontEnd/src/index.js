import { initRadioInputs, handleRadioChange } from './categories/handleRadioChange.js' // init and handle portfolio filters
import displayPortfolioFilter from './categories/categories.js' // display portfolio filters
import { displayPortfolio } from './works/portfolio.js' // display portfolio gallery
import addLoginListener from './login/addLoginListener.js'

addLoginListener()

async function displayFilters () { // display portfolio filters
  await displayPortfolioFilter()
}
displayFilters()

displayPortfolio() // display portfolio gallery

async function initButtons () { // init portfolio filters
  await initRadioInputs()
}
initButtons()

handleRadioChange() // handle portfolio filters
