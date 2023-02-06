import fetchPortfolio from './query.js'
import filterPortfolio from './filter.js'
import { handleError } from './error-handler.js'

const displayPortfolio = async categoryId => {
  const portfolio = await fetchPortfolio()
  const filtered = filterPortfolio(categoryId)(portfolio)
  const elements = Array.from(filtered)
  const gallery = document.getElementsByClassName('gallery')[0]

  while (gallery.firstChild) {
    gallery.removeChild(gallery.firstChild)
  }

  elements.forEach(({ imageUrl, title }) => {
    const fig = document.createElement('figure')
    const image = document.createElement('img')
    const caption = document.createElement('figcaption')

    image.src = imageUrl
    image.alt = title
    caption.textContent = title.toUpperCase()

    gallery.appendChild(fig)
    fig.appendChild(image)
    fig.appendChild(caption)
  })
}

const handleRadioChange = ({ target: { value } }) => {
  const categoryId = value === '0' ? null : Number(value)
  displayPortfolio(categoryId)
}

const inputs = Array.from(document.querySelectorAll('input[type="radio"]'))
inputs.forEach(input => input.addEventListener('change', handleRadioChange))

document.querySelector('input[value="0"]').checked = true
displayPortfolio().catch(handleError)
