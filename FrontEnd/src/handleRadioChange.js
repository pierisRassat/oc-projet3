import { displayPortfolio } from './portfolio.js'

const initRadioInputs = () => {
  const inputs = Array.from(document.querySelectorAll('input[type="radio"]'))
  inputs.forEach(input => input.addEventListener('change', handleRadioChange))
  console.log('Input from button:', inputs)
}

const handleRadioChange = (event) => {
  console.log('handleRadioChange called')
  if (!event || !event.target) return
  const { value } = event.target
  console.log(`Value selected: ${value}`)
  const categoryId = value === '0' ? null : Number(value)
  displayPortfolio(categoryId)
}

export { initRadioInputs, handleRadioChange }
