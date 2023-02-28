export default function createEditionBanner () {
  const divEditMode = document.querySelector('.edit-mode')

  const section = document.createElement('section')
  section.setAttribute('id', 'edition-mode-banner')

  const editionModeTitle = document.createElement('div')
  editionModeTitle.setAttribute('id', 'edition-mode-title')

  const editionIcon = document.createElement('img')
  editionIcon.setAttribute('src', './assets/icons/white-edit.svg')
  editionIcon.setAttribute('alt', 'edition icon')

  const editionModeTitleText = document.createElement('p')
  editionModeTitleText.textContent = 'Mode édition'

  const editionModePublishButton = document.createElement('button')
  editionModePublishButton.textContent = 'publier les changements'

  editionModeTitle.appendChild(editionIcon)
  editionModeTitle.appendChild(editionModeTitleText)
  section.appendChild(editionModeTitle)
  section.appendChild(editionModePublishButton)
  divEditMode.appendChild(section)

  return section
}
