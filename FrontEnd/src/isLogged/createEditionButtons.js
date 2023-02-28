export function createEditionButton () {
  const divEditButton = document.querySelector('#introduction figure')
  const fig = document.createElement('figcaption')
  fig.setAttribute('id', 'btn-container')

  const editionIcon = document.createElement('img')
  editionIcon.setAttribute('src', './assets/icons/black-edit.svg')
  editionIcon.setAttribute('alt', 'edition icon')

  const editionModeTitleText = document.createElement('p')
  editionModeTitleText.textContent = 'modifier'

  fig.appendChild(editionIcon)
  fig.appendChild(editionModeTitleText)
  divEditButton.appendChild(fig)
}

export function createEditionProjectsButton () {
  const removedTitle = document.querySelector('#portfolio h2')
  removedTitle.remove()

  const copiedTitle = document.createElement('h2')
  copiedTitle.textContent = 'Mes projets'

  const container = document.createElement('div')
  container.setAttribute('class', 'edit-projects-container')

  const divEditButton = document.querySelector('.edit-projects-btn')

  const navLink = document.createElement('a')
  navLink.setAttribute('href', 'https://www.something.tld')

  const editionIcon = document.createElement('img')
  editionIcon.setAttribute('src', './assets/icons/black-edit.svg')
  editionIcon.setAttribute('alt', 'edition icon')

  const editionModeTitleText = document.createElement('p')
  editionModeTitleText.textContent = 'modifier'

  divEditButton.appendChild(copiedTitle)
  divEditButton.appendChild(navLink)
  navLink.appendChild(editionIcon)
  navLink.appendChild(editionModeTitleText)
}
