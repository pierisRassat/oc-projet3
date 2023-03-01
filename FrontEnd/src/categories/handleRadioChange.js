import { displayPortfolio } from '../works/portfolio.js'

const initRadioInputs = () => {
  const inputs = Array.from(document.querySelectorAll('input[type="radio"]'))
  inputs.forEach(input => input.addEventListener('change', handleRadioChange))
}

const handleRadioChange = (event) => {
  if (!event || !event.target) return
  const { value } = event.target
  const categoryId = value === '0' ? null : Number(value)
  displayPortfolio(categoryId)
}

export { initRadioInputs, handleRadioChange }
