export default function addWorkWindowCloseModalListener () {
  const addWorkModal = document.querySelector('.add-work-modal')

  addWorkModal.addEventListener('click', (event) => {
    if (event.target === addWorkModal) {
      addWorkModal.remove()
    }
  })
}
