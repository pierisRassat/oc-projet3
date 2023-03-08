import createModale from './createModale.js'

export default function addEditListener () {
  const editButton = document.querySelector('.edit-projects-btn button')
  const modal = document.querySelector('.modal')

  editButton.addEventListener('click', (event) => {
    if (typeof (modal) !== 'undefined' || modal !== null) {
      createModale()
    }
  })
}
