export default function addCloseModaleListener (closeBtn) {
  closeBtn.addEventListener('click', (event) => {
    const modal = document.querySelector('.modal')
    if (typeof (modal) !== 'undefined' && modal !== null) {
      modal.remove()
    }
  })
}
