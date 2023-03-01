import createModale from './createModale.js'

export default function addEditListener () {
  const editButton = document.querySelector('.edit-projects-btn a')

  editButton.addEventListener('click', () => {
    createModale()
  })
}
