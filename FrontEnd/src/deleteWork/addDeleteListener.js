import deleteWork from './requestDeleteWork.js'
import getWorkNumber from './requestWorkNumber.js'

export default async function addDeleteListeners () {
  const deleteButtons = document.querySelectorAll('.trash-icon-container')
  const ids = await getWorkNumber()

  deleteButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
      deleteWork(ids[index])
    })
  })
}
