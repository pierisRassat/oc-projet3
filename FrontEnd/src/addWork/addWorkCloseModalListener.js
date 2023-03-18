export default function addWorkCloseModalListener (closeBtn) {
  closeBtn.addEventListener('click', (event) => {
    const addWorkModal = document.querySelector('.add-work-modal')
    if (typeof (addWorkModal) !== 'undefined' && addWorkModal !== null) {
      addWorkModal.remove()
    }
    const modal = document.querySelector('.modal')
    if (typeof (modal) !== 'undefined' && modal !== null) {
      modal.remove()
    }
  })
}
