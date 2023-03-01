import getPortfolio from '../works/requestPortfolio.js'

export default function createModale () {
  const editButton = document.querySelector('.edit-projects-btn a')

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

  const trashIconContainer = document.createElement('div')
  trashIconContainer.setAttribute('class', 'trash-icon-container')

  const trashIcon = document.createElement('img')
  trashIcon.setAttribute('src', './assets/icons/trash.svg')

  const addWorkBtn = document.createElement('input')
  addWorkBtn.setAttribute('class', 'add-work-btn')
  addWorkBtn.setAttribute('type', 'submit')
  addWorkBtn.setAttribute('value', 'Ajouter une photo')

  const removeGallery = document.createElement('input')
  removeGallery.setAttribute('class', 'remove-gallery-btn')
  removeGallery.setAttribute('type', 'button')
  removeGallery.setAttribute('value', 'Supprimer la gallerie')

  editButton.appendChild(modal)
  modal.appendChild(wrapper)
  wrapper.appendChild(closeBtn)
  closeBtn.appendChild(closeBtnImg)
  wrapper.appendChild(title)
  wrapper.appendChild(thumbnailPortfolio)
  wrapper.appendChild(trashIconContainer)
  trashIconContainer.appendChild(trashIcon)
  wrapper.appendChild(addWorkBtn)
  wrapper.appendChild(removeGallery)
}
