import createModale from './createModale.js'
import addCloseModaleListener from './addCloseModaleListener.js'

export default function addEditListener () {
  const editButton = document.querySelector('.edit-projects-btn a')

  editButton.addEventListener('click', (event) => {
    event.preventDefault()
    createModale()
    addCloseModaleListener()
  })
}
