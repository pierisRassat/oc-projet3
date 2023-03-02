export default function addCloseModaleListener () {
  const closeBtn = document.querySelector('.close-modal-btn')

  closeBtn.addEventListener('click', (event) => {
    const modal = document.querySelectorAll('.modal')
    event.preventDefault()
    console.log('closeBtn clicked')
    if (typeof (modal) !== 'undefined' && modal !== null) {
      console.log('modal is not null')
      modal.classList.remove('modal')
      modal.classList.add('hidden')
    }
  })
}
