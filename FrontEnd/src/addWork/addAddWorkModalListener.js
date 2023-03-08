import createAddWorkForm from './createAddWorkForm.js'

export default function addAddWorkButtonListener () {
  const addWorkButton = document.querySelector('#add-work-btn')
  const addWorkModal = document.querySelector('.add-work-modal')

  addWorkButton.addEventListener('click', (event) => {
    if (typeof (addWorkModal) !== 'undefined' || addWorkModal !== null) {
      createAddWorkForm()
    }
  })
}
