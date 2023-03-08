import addDeleteListeners from '../deleteWork/addDeleteListener.js'
import clearThumbnailGallery from './clearThumbnailGallery.js'
import getPortfolio from '../works/requestPortfolio.js'

export const displayPortfolioThumbnails = async categoryId => {
  clearThumbnailGallery()
  const portfolio = await getPortfolio()
  const elements = portfolio.filter(categoryId)
  const gallery = document.querySelector('.thumbnail-portfolio-container')

  elements.forEach(({ imageUrl, title }) => {
    const trashIconContainer = document.createElement('div')
    trashIconContainer.setAttribute('class', 'trash-icon-container')

    const trashIcon = document.createElement('img')
    trashIcon.setAttribute('class', 'trash-icon')
    trashIcon.setAttribute('src', './assets/icons/trash.svg')

    const fig = document.createElement('figure')
    const image = document.createElement('img')
    const caption = document.createElement('figcaption')

    image.src = imageUrl
    image.alt = title
    caption.textContent = 'éditer'

    gallery.appendChild(fig)
    fig.appendChild(image)
    fig.appendChild(trashIconContainer)
    trashIconContainer.appendChild(trashIcon)
    fig.appendChild(caption)
  })
  addDeleteListeners()
}
