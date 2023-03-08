import { initRadioInputs, handleRadioChange } from './categories/handleRadioChange.js' // init and handle portfolio filters
import displayPortfolioFilter from './categories/categories.js' // display portfolio filters
import { displayPortfolio } from './works/portfolio.js' // display portfolio gallery
import { checkLocalStorageToken } from './isLogged/isLogged.js' // check if the user is logged
// import createAddWorkModale from './addWork/createAddWorkForm.js' // test for addWork modale

checkLocalStorageToken() // is user logged ?

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
