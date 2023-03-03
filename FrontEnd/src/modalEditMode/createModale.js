import addWindowCloseModaleListener from './addWindowCloseModaleListener.js'
import { displayPortfolioThumbnails } from './portfolioThumbnails.js'
import addCloseModaleListener from './addCloseModaleListener.js'

export default function createModale () {
  const modal = document.createElement('div')
  modal.setAttribute('class', 'modal')

  const wrapper = document.createElement('div')
  wrapper.setAttribute('class', 'wrapper')

  const closeBtn = document.createElement('button')
  closeBtn.setAttribute('class', 'close-modal-btn')

  const closeBtnImg = document.createElement('img')
  closeBtnImg.setAttribute('src', './assets/icons/cross.svg')

  const title = document.createElement('h2')
  title.textContent = 'Galerie photo'

  const thumbnailPortfolio = document.createElement('div')
  thumbnailPortfolio.setAttribute('class', 'thumbnail-portfolio-container')

  const addWorkBtn = document.createElement('input')
  addWorkBtn.setAttribute('class', 'add-work-btn')
  addWorkBtn.setAttribute('type', 'submit')
  addWorkBtn.setAttribute('value', 'Ajouter une photo')

  const removeGalleryBtn = document.createElement('input')
  removeGalleryBtn.setAttribute('class', 'remove-gallery-btn')
  removeGalleryBtn.setAttribute('type', 'button')
  removeGalleryBtn.setAttribute('value', 'Supprimer la gallerie')

  document.querySelector('body').appendChild(modal)
  modal.appendChild(wrapper)
  wrapper.appendChild(closeBtn)
  closeBtn.appendChild(closeBtnImg)
  wrapper.appendChild(title)
  wrapper.appendChild(thumbnailPortfolio, displayPortfolioThumbnails())
  wrapper.appendChild(addWorkBtn)
  wrapper.appendChild(removeGalleryBtn)
  title.focus()
  addCloseModaleListener(closeBtn)
  addWindowCloseModaleListener()
}
