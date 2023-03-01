import clearGallery from './clearGallery.js'
import getPortfolio from './requestPortfolio.js'

export const displayPortfolio = async categoryId => {
  clearGallery()
  const portfolio = await getPortfolio()
  const elements = portfolio.filter(categoryId)
  const gallery = document.querySelector('.gallery')

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
