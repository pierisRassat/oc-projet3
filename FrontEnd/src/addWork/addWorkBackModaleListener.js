export default function addWorkBackModaleListener (backBtn) {
  backBtn.addEventListener('click', (event) => {
    const addWorkModal = document.querySelector('.add-work-modal')
    if (typeof (addWorkModal) !== 'undefined' && addWorkModal !== null) {
      addWorkModal.remove()
      const modal = document.querySelector('.modal')
      modal.style.display = 'flex'
    }
  })
}
