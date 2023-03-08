import deleteWork from './requestDeleteWork.js'
import getWorkNumber from './requestWorkNumber.js'

export default async function addDeleteListeners () {
  const deleteButtons = document.querySelectorAll('.trash-icon-container')
  let listenerNumber = await getWorkNumber()

  deleteButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      deleteWork(listenerNumber)
      listenerNumber++
    })
  })
}
