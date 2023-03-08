export default function addWorkWindowCloseModaleListener () {
  const addWorkModal = document.querySelector('.add-work-modal')

  addWorkModal.addEventListener('click', (event) => {
    if (event.target === addWorkModal) {
      addWorkModal.remove()
    }
  })
}
