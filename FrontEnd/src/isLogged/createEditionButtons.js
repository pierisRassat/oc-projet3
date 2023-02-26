export function createEditionButtons () {
  const divEditButton = document.querySelector('.edit-btn')
  const div = document.createElement('div')

  const editionIcon = document.createElement('img')
  editionIcon.setAttribute('src', './assets/icons/edit.svg')

  const editionModeTitleText = document.createElement('p')
  editionModeTitleText.textContent = 'modifier'

  div.appendChild(editionIcon)
  div.appendChild(editionModeTitleText)
  divEditButton.appendChild(div)
}

export function createEditionProjectsButton () {
  const divEditButton = document.querySelector('.edit-projects-btn')
  const div = document.createElement('div')

  const editionIcon = document.createElement('img')
  editionIcon.setAttribute('src', './assets/icons/edit.svg')

  const editionModeTitleText = document.createElement('p')
  editionModeTitleText.textContent = 'modifier'

  div.appendChild(editionIcon)
  div.appendChild(editionModeTitleText)
  divEditButton.appendChild(div)
}
