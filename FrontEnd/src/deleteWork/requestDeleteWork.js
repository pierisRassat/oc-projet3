import { displayPortfolio } from '../works/portfolio.js'
import createModal from '../modalEditMode/createModal.js'

export default async function deleteWork (listenerNumber) {
  const endpointUrl = `http://localhost:5678/api/works/${listenerNumber}`

  try {
    const tokenStr = window.sessionStorage.getItem('token')
    await fetch(endpointUrl, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${tokenStr}`,
        'Content-Type': 'application/json'
      }
    })
    const modal = document.querySelector('.modal')
    if (typeof (modal) !== 'undefined' || modal !== null) {
      modal.remove()
      createModal()
      displayPortfolio()
    }
  } catch (error) {
    console.error(error)
  }
}
