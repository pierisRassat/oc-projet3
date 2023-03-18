import addWorkWindowCloseModalListener from './addWorkWindowCloseModalListener.js'
import addWorkBackModalListener from './addWorkBackModalListener.js'
import addWorkCloseModalListener from './addWorkCloseModalListener.js'
import { getCategories } from '../categories/requestCategories.js'
import initAddWorkForm from './handleAddWorkForm.js'

async function getCategoriesData () {
  const data = await getCategories()
  return data
}
getCategoriesData()

export default async function createAddWorkModal () {
  const addWorkModal = document.createElement('div')
  addWorkModal.setAttribute('class', 'add-work-modal')

  const addWorkWrapper = document.createElement('div')
  addWorkWrapper.setAttribute('class', 'add-work-wrapper')

  const addWorkTopButtonsContainer = document.createElement('div')
  addWorkTopButtonsContainer.setAttribute('class', 'add-work-top-buttons-container')

  const backBtn = document.createElement('button')
  backBtn.setAttribute('class', 'add-work-back-arrow-btn')

  const backBtnImg = document.createElement('img')
  backBtnImg.setAttribute('src', './assets/icons/back_arrow.svg')

  const closeBtn = document.createElement('button')
  closeBtn.setAttribute('class', 'add-work-close-modal-btn')

  const closeBtnImg = document.createElement('img')
  closeBtnImg.setAttribute('src', './assets/icons/cross.svg')

  const addWorkTitle = document.createElement('h2')
  addWorkTitle.textContent = 'Ajout photo'

  const addWorkForm = document.createElement('form')
  addWorkForm.setAttribute('method', 'post')

  const addWorkFileInputContainer = document.createElement('div')
  addWorkFileInputContainer.setAttribute('class', 'add-work-file-input-container')
  addWorkForm.appendChild(addWorkFileInputContainer)

  const addWorkFileInputIcon = document.createElement('img')
  addWorkFileInputIcon.setAttribute('src', './assets/icons/add_picture.svg')
  addWorkFileInputIcon.setAttribute('class', 'add-work-file-input-icon')
  addWorkFileInputContainer.appendChild(addWorkFileInputIcon)

  const addWorkFileLabel = document.createElement('label')
  addWorkFileLabel.setAttribute('for', 'add-work-file')
  addWorkFileLabel.textContent = '+ Ajouter une photo'
  addWorkFileInputContainer.appendChild(addWorkFileLabel)

  const addWorkFileInput = document.createElement('input')
  addWorkFileInput.setAttribute('type', 'file')
  addWorkFileInput.setAttribute('name', 'add-work-file')
  addWorkFileInput.setAttribute('id', 'add-work-file')
  addWorkFileInput.setAttribute('accept', '.png, .jpg, .jpeg')
  addWorkFileInput.setAttribute('required', '')
  addWorkFileInputContainer.appendChild(addWorkFileInput)

  const addWorkFileInputText = document.createElement('p')
  addWorkFileInputText.textContent = 'jpg, png : 4mo max'
  addWorkFileInputContainer.appendChild(addWorkFileInputText)

  const addWorkTitleLabel = document.createElement('label')
  addWorkTitleLabel.setAttribute('for', 'add-work-form-title')
  addWorkTitleLabel.textContent = 'Titre'
  addWorkForm.appendChild(addWorkTitleLabel)

  const addWorkTitleInput = document.createElement('input')
  addWorkTitleInput.setAttribute('type', 'text')
  addWorkTitleInput.setAttribute('name', 'add-work-title-input')
  addWorkTitleInput.setAttribute('id', 'add-work-title-input')
  addWorkTitleInput.setAttribute('required', '')
  addWorkForm.appendChild(addWorkTitleInput)

  const addWorkCategorieLabel = document.createElement('label')
  addWorkCategorieLabel.setAttribute('for', 'categorie')
  addWorkCategorieLabel.textContent = 'Catégorie'
  addWorkForm.appendChild(addWorkCategorieLabel)

  const addWorkCategorieInput = document.createElement('select')
  addWorkCategorieInput.setAttribute('id', 'add-work-categorie-select')
  addWorkCategorieInput.setAttribute('required', '')
  addWorkForm.appendChild(addWorkCategorieInput)

  const addWorkCategorieSelectOptions = document.createElement('option')
  addWorkCategorieSelectOptions.setAttribute('value', 'blank-value')
  addWorkCategorieSelectOptions.textContent = ''
  addWorkCategorieInput.appendChild(addWorkCategorieSelectOptions)

  const data = await getCategoriesData()
  data.forEach(category => {
    const option = document.createElement('option')
    option.value = category.id
    option.textContent = category.name
    addWorkCategorieInput.appendChild(option)
  })

  const submitButton = document.createElement('button')
  submitButton.setAttribute('id', 'submit-button-add-work-form')
  submitButton.textContent = 'Valider'

  document.querySelector('body').appendChild(addWorkModal)
  addWorkModal.appendChild(addWorkWrapper)
  addWorkWrapper.appendChild(addWorkTopButtonsContainer)
  addWorkTopButtonsContainer.appendChild(backBtn)
  addWorkTopButtonsContainer.appendChild(closeBtn)
  backBtn.appendChild(backBtnImg)
  closeBtn.appendChild(closeBtnImg)
  addWorkWrapper.appendChild(addWorkTitle)
  addWorkWrapper.appendChild(addWorkForm)
  addWorkWrapper.appendChild(submitButton)
  addWorkBackModalListener(backBtn)
  addWorkCloseModalListener(closeBtn)
  addWorkWindowCloseModalListener()

  const modal = document.querySelector('.modal')
  modal.style.display = 'none'

  if (typeof (addWorkModal) !== 'undefined' || addWorkModal !== null) {
    initAddWorkForm()
  }
}
