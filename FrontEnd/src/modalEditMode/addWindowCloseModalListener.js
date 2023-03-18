export default function addWindowCloseModalListener () {
  const modal = document.querySelector('.modal')

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.remove()
    }
  })
}
