import { handleRadioChange } from './handleRadioChange.js'

import { getCategories } from './requestCategories.js'

function createButton (name, id, index) {
  const input = document.createElement('input')
  input.type = 'radio'
  input.id = `radio${index}`
  input.name = 'filterGroup'
  input.value = id
  input.addEventListener('change', handleRadioChange)

  const label = document.createElement('label')
  label.htmlFor = input.id
  label.textContent = name

  return [input, label]
}

const createRadioButton = (item, index) => createButton(item.name, item.id, index + 1)
const createDefaultRadioButton = () => createButton('Tous', '0', '1')
const appendElements = (elements, parent) => {
  elements.forEach(element => parent.appendChild(element))
}

export default async function displayPortfolioFilter () {
  const data = await getCategories()
  const portfolioFilter = document.createElement('div')
  portfolioFilter.classList.add('portfolio-filter')

  const defaultRadioButton = createDefaultRadioButton()
  appendElements(defaultRadioButton, portfolioFilter)

  data.forEach((item, index) => {
    const radioButton = createRadioButton(item, index + 1)
    appendElements(radioButton, portfolioFilter)
  })

  const selector = document.querySelector('.filter-container')
  selector.append(portfolioFilter)
}

export {
  createRadioButton,
  createDefaultRadioButton,
  appendElements
}
